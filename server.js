const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const app = express();
app.use(bodyParser.json());

// Firebase setup
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Razorpay webhook route
app.post("/webhook", async (req, res) => {
  const payment = req.body.payload.payment.entity;

  const phone = payment.contact || "unknown";
  const amount = payment.amount / 100;

  await db.collection("orders").add({
    phone: phone,
    amount: amount,
    status: "Processing",
    payment_id: payment.id
  });

  res.status(200).send("OK");
});

app.listen(5000, () => console.log("Server running"));
