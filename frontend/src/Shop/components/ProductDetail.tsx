import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import Car from "../../imges/statics/Car.svg";
import check from "../../imges/statics/check.svg";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  availableStock: number;
  imageUrl: string;
  likes?: number;
  createdAt: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [stockDisplay, setStockDisplay] = useState<string>("");
  const [showStockCount, setShowStockCount] = useState<boolean>(false);

  const handleLike = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:8000/products/${id}/like`, { method: "POST" });
      const data = await res.json();

      if (product) {
        setProduct({ ...product, likes: data.likes });
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
        if (data.product.availableStock > 0) {
          setStockDisplay("Available");
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  useEffect(() => {
    if (product && product.availableStock > 0) {
      const interval = setInterval(() => {
        setShowStockCount((prev) => !prev);
        setStockDisplay((prev) =>
          prev === "Available" ? `${product.availableStock} in stock` : "Available"
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [product]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box>
      <Card sx={{ maxWidth: "600px", margin: 0, padding: 0 }}>
        <CardMedia
          component="img"
          height="280"
          image={`http://localhost:8000${product.imageUrl}`}
          alt={product.name}
        />
        <CardContent>
          <IconButton
            sx={{
              backgroundColor: "white",
              position: "absolute",
              top: 10,
              right: 10,
              color: product.likes && product.likes > 0 ? "red" : "gray",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleLike(product._id);
            }}
          >
            <FavoriteIcon />
          </IconButton>

          <IconButton
            sx={{
              backgroundColor: "white",
              position: "absolute",
              top: 10,
              left: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "15px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", backgroundColor: "rgba(54, 47, 255, 0.2)", padding: "5px 10px", width: "fit-content", borderRadius: "15px", margin: "10px 0" }}>
              <img src={Car} alt="car" style={{ width: "21px" }} />
              <Typography sx={{ color: "#362FFF" }}>{product.category}</Typography>
            </Box>
            {/* Stock Availability with Animation */}
            <motion.div
              initial={{ x: "100%" }} // Start off-screen (right)
              animate={{ x: 0 }} // Move into view
              transition={{ duration: 0.5 }} // Smooth animation for sliding in
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "5px 10px",
                borderRadius: "15px",
                backgroundColor: showStockCount ? "white" : "green",
                color: showStockCount ? "black" : "white",
                fontWeight: "bold",
                width: "fit-content",
                transition: "background-color 0.5s ease", // Smooth transition for background color
                fontSize: "18px",
              }}
            >
              <img src={check} alt="check" style={{ width: "20px" }} />
              <Typography variant="body2">{stockDisplay}</Typography>
            </motion.div>
          </Box>
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body1" sx={{ color: "#9d9d9d" }}>{product.description}</Typography>
          <Typography variant="h6" sx={{ color: "#6030ff" }}>Price: {product.price} Pi</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetail;
