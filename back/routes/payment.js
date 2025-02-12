import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Initialize Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Your Test API Key ID
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Your Test API Key Secret
});

// Donation Payment Route
router.post("/donate", async (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: amount * 100, // Convert to paisa (INR)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({ order });
  } catch (error) {
    console.error("Razorpay Error:", error);
    res.status(500).json({ message: "Payment failed. Please try again." });
  }
});

export default router;
