const Stripe = require("stripe");
require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_KEY);
const express = require("express");
const { Router, response } = require("express");
const router = Router();
const Order = require("../models/Order");
const Product = require("../models/Products");
const { getProductById } = require("../controllers/productsControllers");
router.post("/create-checkout-session", express.json(), async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      metadata: {
        userId: req.body.userId,
        cart: JSON.stringify(req.body.item),
      },
    });

    const line_items = req.body.item?.map((el) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: el.name,
            images: [el.image],
            description: el.category,
            metadata: {
              id: el.id,
            },
          },
          unit_amount: Math.round(el.price * 100),
        },
        quantity: el.cartAmount,
      };
    });

    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "usd",
            },
            display_name: "Next day air",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
      customer: customer.id,
      line_items,
      mode: "payment",
      success_url: "http://127.0.0.1:5173/CheckoutSuccess",
      cancel_url: "http://127.0.0.1:5173/cart",
    });
    // console.log("session console", session);
    res.send({ url: session.url });
  } catch (error) {
    console.log(error);
  }
});

//createOrder
const createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);
  const userId = customer.metadata.userId;
  const newOrder = new Order({
    userId: userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: Items,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });

  try {
    const saveOrder = await newOrder.save();
    // console.log("processed order", saveOrder);
  } catch (error) {
    console.log(error);
  }
};
// const success = (status, res) => {
//   res.send(status);
//   console.log("*******", status);
// };
// router.get("/success", success);

//successe response

const stockUpdate = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);
  const stripeProductId = Items?.map((el) => el.id);
  for (let i = 0; i < Items.length; i++) {
    const updateStock = await getProductById(Items[i].id);
    if (updateStock) {
      updateStock.stock -= Items[0].cartAmount;
      const saveProduct = updateStock.save();
    }
    // console.log("========", updateStock, "========");
    // console.log("**********", stripeProductId);
  }
};
// const stockUpdate = async (customer, data) => {
//   const Items = JSON.parse(customer.metadata.cart);
//   const stripeProductId = Items[0].id;
//   const updateStock = await getProductById(stripeProductId);
//   if (updateStock) {
//     updateStock.stock -= Items[0].cartAmount;
//     const saveProduct = updateStock.save();
//   }
//   console.log("========", updateStock.stock, "========");
//   console.log("**********", stripeProductId);
// };

//stripe webhook

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const endpointSecret = process.env.ENDPOINT;
    const payload = request.body;
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      console.log("verified");
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    const data = event.data.object;
    // Handle the event1
    if (event.type === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then((customer) => {
          createOrder(customer, data);
          stockUpdate(customer, data);
        })

        // .then(() => {
        //   const status = data.payment_status;
        //   success(status);
        // })
        .catch((error) => console.log(error.message));
    }

    response.json(data.payment_status);
  }
);

module.exports = router;
