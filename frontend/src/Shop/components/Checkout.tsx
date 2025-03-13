// @ts-nocheck

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

const Checkout = () => {
  const { cart, totalPrice } = useCart();
  const [shippingAddress, setShippingAddress] = useState("");

  const tax = totalPrice * 0.18;
  const shippingFee = totalPrice > 50 ? 0 : 5;
  const finalTotal = totalPrice + tax + shippingFee;

  const { setCart } = useCart();

const handleCheckout = async () => {
  const userData = localStorage.getItem("user");
  if (!userData) {
    alert("You must be logged in to checkout.");
    return;
  }

  try {
    const user = JSON.parse(userData);
    const response = await axios.post("http://localhost:8000/cart/checkout", { userId: user.uid });

    if (response.status === 200) {
      console.log("Order ID:", response.data.orderId);

      setCart([]);
      localStorage.removeItem("cart");

      alert("Checkout successful. Proceed to payment.");
      window.location.href = `/payment/${response.data.orderId}`;
    }
  } catch (error) {
    console.error("Checkout error:", error);
    alert("Checkout failed. Please try again.");
  }
};


  return (
    <div>
      <h2>Order Summary</h2>
      <div>
        {cart.map((item) => (
          <div key={item.productId}>
            <p>{item.product?.name} x {item.quantity} - ${item.product?.price ? (item.product.price * item.quantity).toFixed(2) : "0.00"}</p>
          </div>
        ))}
      </div>
      <h3>Subtotal: ${totalPrice.toFixed(2)}</h3>
      <h3>Tax (18%): ${tax.toFixed(2)}</h3>
      <h3>Shipping: ${shippingFee.toFixed(2)}</h3>
      <h2>Total: ${finalTotal.toFixed(2)}</h2>

      <label>
        Shipping Address:
        <input type="text" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} />
      </label>

      <button onClick={handleCheckout}>Confirm Order</button>
    </div>
  );
};

export default Checkout;

