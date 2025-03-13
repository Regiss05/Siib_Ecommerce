import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { Button, Box, Card, Typography, IconButton, CardMedia, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const { cart, setCart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [loading, setLoading] = useState(true);
  const [shopNames, setShopNames] = useState<{ [key: string]: string }>({});

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
    
      console.log("Fetching shop names for:", uniqueShopIds);
    
      const shopNameMap: { [key: string]: string } = {};
      await Promise.all(
        uniqueShopIds.map(async (shopId) => {
          try {
            const response = await axios.get(`http://localhost:8000/shops/${shopId}`);
            console.log(`Shop ${shopId} Response:`, response.data);
            shopNameMap[shopId] = response.data.shop.shopName;
          } catch (error) {
            // @ts-ignore
            console.error(`Error fetching shop ${shopId}:`, error.response?.data || error.message);
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

  useEffect(() => {
    console.log("Cart Data:", JSON.stringify(cart, null, 2));
  }, [cart]);

  return (
    <Box sx={{ 
      padding: "16px", 
      backgroundColor: "#f5f5f5", 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
     }}
     >
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>My Cart</Typography>
      <Box>
        <Typography variant="body2" sx={{ textAlign: "center", color: "#666", mb: 2 }}>
          {cart.length} item{cart.length > 1 && 's'}
        </Typography>
      </Box>
      
      {loading ? (
        <Typography>Loading cart...</Typography>
      ) : cart.length === 0 ? (
        <Typography variant="h6">Your cart is currently empty. Start shopping now!</Typography>
      ) : (
        <>
        {cart.map((item) => (
          <Card key={item.productId} sx={{ 
            display: "flex", 
            alignItems: "center", 
            mb: 1, 
            position: "relative",
            borderRadius: 1,
            py: 1.5,
            px: 2
          }}>
            <CardMedia component="img" image={`http://localhost:8000${item.imageUrl}`} sx={{ minWidth: 110, maxWidth: 110, height: 80 }} />

            <CardContent>
              <Typography sx={{fontSize: '20px'}}>{item.name}</Typography>              
              <Typography variant="caption" sx={{ color: "gray" }}>
                {shopNames[item.shopId] || "Loading Shop..."}
              </Typography>
            </CardContent>

            <Box>
              <Typography sx={{fontSize: '12px'}}>{item.price ? (item.price * item.quantity).toFixed(2) : "0.00"} Pi</Typography>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value))}
                min="1"
                style={{ width: "50px" }}
              />
            </Box>

            <IconButton onClick={() => removeFromCart(item.productId)}>
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}
        </>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <Button variant="contained" color="primary" onClick={() => window.location.href = "/checkout"}>
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;
