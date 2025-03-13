import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

interface CartItem {
  _id: string;
  product: {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  // Retrieve userId from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored User:", storedUser);
  
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log("Parsed User:", parsedUser);
        setUserId(parsedUser.uid); // Correctly extract `uid`
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
      console.log("No user found in localStorage.");
    }
  }, []);
    // Fetch cart items when userId is available
  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) {
        console.warn("User ID is missing. Skipping cart fetch.");
        return;
      }

      console.log("Fetching cart for user:", userId); // Log the userId

      try {
        const response = await fetch(`http://server.siibarnut.com/api/cart/${userId}`); // Ensure the correct API endpoint
        const data = await response.json();
        console.log("Cart API Response:", data);

        if (data && Array.isArray(data.cartItems)) {
          setCartItems(data.cartItems);
        } else {
          console.warn("Unexpected API response structure:", data);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [userId]); // Depend on `userId` from state


  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>My Cart</Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is currently empty. Start shopping now!</Typography>
      ) : (
        cartItems.map((item) => (
          <Card key={item._id} sx={{ display: "flex", marginBottom: "10px", padding: "10px" }}>
            <CardMedia component="img" image={`http://server.siibarnut.com/${item.product.imageUrl}`} sx={{ width: 80, height: 80 }} />
            <CardContent>
              <Typography>{item.product.name}</Typography>
              <Typography>Price: {item.product.price} Pi</Typography>
              <Typography>Quantity: {item.quantity}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default CartPage;
