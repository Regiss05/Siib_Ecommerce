import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { Button, Box, Card, Typography, IconButton, CardMedia, CardContent } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import iconshop from "../../imges/statics/iconshop.svg";

const Cart = () => {
  const { cart, setCart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [loading, setLoading] = useState(true);
  const [shopNames, setShopNames] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const getUserFromLocalStorage = () => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  };

  useEffect(() => {
    const fetchCart = async () => {
      const user = getUserFromLocalStorage();
      if (!user || !user.uid) {
        console.log("User not found.");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8000/cart/${user.uid}`);
        setCart(response.data.cart || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  useEffect(() => {
    const fetchShopNames = async () => {
      const uniqueShopIds = Array.from(new Set(cart.map((item) => item.shopId).filter(Boolean)));
      const shopNameMap: { [key: string]: string } = {};
      await Promise.all(
        uniqueShopIds.map(async (shopId) => {
          try {
            const response = await axios.get(`http://localhost:8000/shops/${shopId}`);
            shopNameMap[shopId] = response.data.shop.shopName;
          } catch (error) {
            shopNameMap[shopId] = "Unknown Shop";
          }
        })
      );
      setShopNames(shopNameMap);
    };

    if (cart.length > 0) {
      fetchShopNames();
    }
  }, [cart]);

  return (
    <Box sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <IconButton
        onClick={() => navigate(-1)}
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
      <Typography sx={{ marginBottom: "20px", textAlign: "center", fontSize: "18px", marginTop: "20px" }}>My Cart</Typography>
      <Box sx={{ backgroundColor: "#EBE8E8", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography sx={{ textAlign: "center", color: "#666" }}>
          {cart.length} item{cart.length > 1 && 's'}
        </Typography>
      </Box>
      {loading ? (
        <Typography>Loading cart...</Typography>
      ) : cart.length === 0 ? (
        <Typography variant="h6">Your cart is currently empty. Start shopping now!</Typography>
      ) : (
        <Card sx={{ padding: "16px 24px" }}>
          {cart.map((item) => (
            <Card key={item.productId} sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              borderRadius: 1,
              padding: "5px",
              marginBottom: "10px",
            }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <Box sx={{ display: "flex", gap: "1px" }}>
                  <CardMedia component="img" image={`http://localhost:8000${item.imageUrl}`} sx={{ minWidth: 110, maxWidth: 110, height: 80 }} />
                  <CardContent>
                    <Typography sx={{ fontSize: '20px' }}>{item.name}</Typography>
                    <Typography variant="caption" sx={{ color: "#362FFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", gap: "5px", backgroundColor: "#EBE8E8", borderRadius: "8px", padding: "1px 5px" }}>
                      <img src={iconshop} alt="shop name" />{shopNames[item.shopId] || "Loading Shop..."}
                    </Typography>
                  </CardContent>
                </Box>
                <Box sx={{ marginRight: "5px" }}>
                  <Typography sx={{ fontSize: '18px', color: "#362FFF", fontWeight: "bold", textAlign: "right" }}>{item.price ? (item.price * item.quantity).toFixed(2) : "0.00"} Pi</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#EBE8E8", borderRadius: "15px", px: "15px" }}>
                    <IconButton sx={{ width: "5px", height: "5px" }} onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ fontSize: '18px', margin: '0 8px' }}>{item.quantity}</Typography>
                    <IconButton sx={{ width: "5px", height: "5px" }} onClick={() => updateQuantity(item.productId, item.quantity + 1)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              <IconButton
                onClick={() => removeFromCart(item.productId)}
                sx={{
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Card>
          ))}
        </Card>
      )}
      <Box sx={{ position: "absolute", bottom: "5rem", left: 0 }}>
        <h3>Amount: {totalPrice.toFixed(2)} Pi</h3>
        <Button variant="contained" sx={{ backgroundColor: "#362FFF" }} onClick={() => window.location.href = "/checkout"}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
