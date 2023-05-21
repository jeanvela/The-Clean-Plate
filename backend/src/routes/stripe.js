const Stripe = require("stripe");
require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_KEY);
const express = require("express");
const { Router } = require("express");
const router = Router();

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.item.map((el) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: el.name,
          images: [el.image],
          description: el.category,
          metadata: {
            id: el._id,
          },
        },
        unit_amount: el.price * 100,
      },
      quantity: el.cartAmount,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: "http://127.0.0.1:5173/CheckoutSuccess",
    cancel_url: "http://127.0.0.1:5173",
  });

  res.send({ url: session.url });
});

module.exports = router;
