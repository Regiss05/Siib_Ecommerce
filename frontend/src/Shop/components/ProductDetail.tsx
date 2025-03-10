import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from "@mui/material";

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
  const { id } = useParams<{ id: string }>(); // Get product ID from URL
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

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

  const isNewProduct = (createdAt: string) => {
    const createdTime = new Date(createdAt).getTime();
    const currentTime = new Date().getTime();
    return (currentTime - createdTime) <= 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds
  };

  useEffect(() => {
    fetch(`http://localhost:8000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.product))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ padding: "20px" }}>
      <Card sx={{ maxWidth: "600px", margin: "auto", padding: "10px" }}>
        <CardMedia
          component="img"
          height="250"
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
              color: product.likes && product.likes > 0 ? "red" : "gray", // Dynamically change color
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleLike(product._id);
            }}
          >
            <FavoriteIcon />
          </IconButton>

          {isNewProduct(product.createdAt) && (
            <Box sx={{
              position: 'absolute',
              top: 8,
              left: 0,
              backgroundColor: '#FF9A00',
              padding: '5px',
              color: 'white',
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
            }}>
              New
            </Box>
          )}
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1" sx={{ color: "#9d9d9d" }}>{product.description}</Typography>
          <Typography variant="h6">Category: {product.category}</Typography>
          <Typography variant="h6" sx={{ color: "#6030ff" }}>Price: {product.price} Pi</Typography>
          <Typography variant="body2">Available Stock: {product.availableStock}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetail;
