/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Donation.css";

const Donation = () => {
  const [amount, setAmount] = useState(500); // Default amount

  const handlePayment = async () => {
    try {
      const response = await fetch("https://chadhava-foundation-1.onrender.com/api/payment/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      if (!data || !data.order) {
        alert("Payment failed! Please try again.");
        return;
      }

      const options = {
        key: "rzp_test_87CyR4G73HpfHT", // Replace with your Test API Key
        amount: data.order.amount,
        currency: "INR",
        name: "Chadhava Foundation",
        description: "Help us with your generous donation!",
        order_id: data.order.id,
        handler: function (response) {
          alert("Payment Successful! Thank you for your donation.");
          console.log(response);
        },
        prefill: {
          name: "Your Name",
          email: "your.email@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("An error occurred while processing the payment.");
    }
  };

  return (
    <div className="donation-container">
      <h1 className="donation_heading">Support Our Cause</h1>
      <p className="donation_para">
        Your small contribution can make a big difference.
      </p>

      <div className="donation-options">
        <button onClick={() => setAmount(100)}>₹100</button>
        <button onClick={() => setAmount(500)}>₹500</button>
        <button onClick={() => setAmount(1000)}>₹1000</button>
        <input
          type="number"
          placeholder="Enter Custom Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      <button className="donate-btn" onClick={handlePayment}>
        Donate ₹{amount}
      </button>
    </div>
  );
};

export default Donation;
