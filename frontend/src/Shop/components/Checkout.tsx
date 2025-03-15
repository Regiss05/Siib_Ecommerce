// @ts-nocheck

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { Button, Box, Card, Typography, IconButton, CardMedia, CardContent } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import { margin, padding } from "@mui/system";
import iconshop from "../../imges/statics/iconshop.svg";
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import TextField from '@mui/material/TextField';

const Checkout = () => {
  const { cart, totalPrice } = useCart();
  const [shippingAddress, setShippingAddress] = useState("");
  const navigate = useNavigate();
  const [shopNames, setShopNames] = useState<{ [key: string]: string }>({});

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
    <Box sx={{ padding: "20px", marginBottom: "50px" }}>
      <IconButton
        onClick={() => navigate("/Checkout")}
        sx={{
          backgroundColor: "white",
          position: "absolute",
          top: 10,
          left: 10,
          border: "1px solid #ddd",
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Typography sx={{ marginBottom: "20px", textAlign: "center", fontSize: "18px" }}>Order summary</Typography>
      <Box>
        {cart.map((item) => (
          <Box sx={{ border: "1px solid #ddd", padding: "10px", my: "7px" }}>
            <Typography key={item.productId}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <CardMedia component="img" image={`http://localhost:8000${item.imageUrl}`} sx={{ minWidth: 110, maxWidth: 110, height: 80, filter: "grayscale(100%)" }} />
                <Box sx={{ color: "gray" }}>
                  <Typography sx={{ fontweight: "bold" }}>{item.product?.name} x {item.quantity}</Typography>
                  <Typography>{item.product?.price ? (item.product.price * item.quantity).toFixed(2) : "0.00"} Pi</Typography>
                  <Typography variant="caption" sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", gap: "5px", backgroundColor: "#EBE8E8", borderRadius: "8px", padding: "1px 5px" }}>
                    <StoreOutlinedIcon />{shopNames[item.product?.shopId] || "Loading Shop..."}
                  </Typography>
                </Box>
              </Box>
            </Typography>
          </Box>
        ))}
      </Box>
      {/* <label>
        Shipping Address:
        <input type="text" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} required/>
      </label> */}
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
        noValidate
        autoComplete="on"
      >
        <TextField
          id="filled-multiline-static"
          label="Shipping Adress"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          required
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", paddingX: "1rem", fontSize: "14px", color: "#666" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Amount:</Typography>
          <Typography>{totalPrice.toFixed(2)} Pi</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Order Fees (8%):</Typography>
          <Typography>{(totalPrice * 0.08).toFixed(2)} Pi</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Discount:</Typography>
          <Typography>0 Pi</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Tax (18%):</Typography>
          <Typography>{tax.toFixed(2)}Pi</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", marginTop: "5px", color: "#FF9A00" }}>
          <Typography sx={{ fontWeight: "bold" }}>Total:</Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            {(totalPrice + totalPrice * 0.08).toFixed(2)} Pi
          </Typography>
        </Box>
      </Box>
      {/* <h3>Shipping: {shippingFee.toFixed(2)}Pi</h3> */}
      {/* <h2>Total: {finalTotal.toFixed(2)}Pi</h2> */}

      {/* <button onClick={handleCheckout}>Confirm Order</button> */}
      <Box sx={{ display: "flex", justifyContent: "center", my: "1rem" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#362FFF",
            width: "55%",
            padding: "10px",
          }}
          onClick={handleCheckout}
        >
          Confirm Paiement
        </Button>
      </Box>
    </Box>
  );
};

export default Checkout;

