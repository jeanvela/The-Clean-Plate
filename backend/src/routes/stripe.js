const Stripe = require("stripe");
require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_KEY);
const express = require("express");
const { Router } = require("express");
const router = Router();
const Order = require("../models/Order");

router.post("/create-checkout-session", express.json(), async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      metadata: {
        userId: req.body.userId.toString(),
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
          unit_amount: el.price * 100,
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
    // console.log(line_items);
    res.send({ url: session.url });
  } catch (error) {
    res.status(404).json({error: error.message})
  }
});

//createOrder
const createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);

  const newOrder = new Order({
    userId: customer.metadata.userId,
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
    console.log("processed order", saveOrder);
  } catch (error) {
    console.log(error);
  }
};

//stripe webhook

const endpointSecret =
  "whsec_94da73b7cc291f76b0a28e57bc4ebda7068b376c726dc303c652b36967d61738";

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const endpointSecret =
      "whsec_94da73b7cc291f76b0a28e57bc4ebda7068b376c726dc303c652b36967d61738";

    const payload = request.body;
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      // console.log("verified");
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
        })
        .catch((error) => console.log(error.message));
    }

    response.json({ success: true });
  }
);

module.exports = router;
