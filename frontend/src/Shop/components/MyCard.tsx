import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, IconButton, Typography, Box, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import onlinestore from '../../imges/statics/onlinestore.svg';

// Define Product type
interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  availableStock: number;
  imageUrl: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = React.useState(false);


  useEffect(() => {
    // Fetch products from the backend
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 20px 5rem 20px', gap: 2 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product._id} xs={6} sm={4} md={3} lg={2} >
            <Card sx={{ maxWidth: '88%', fontSize: '12px', position: 'relative', borderRadius: '10px', p: 2 }}>
              <CardMedia
                component="img"
                height="88"
                image={`http://localhost:8000${product.imageUrl}`}
                alt={product.name}
              />
              <CardContent sx={{ margin: 0, padding: '0px 5px' }}>
                <IconButton
                  // onClick={handleFavoriteClick}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: isFavorite ? 'error.main' : 'white', // Red if clicked, white if not
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: background for contrast
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' } // Darken on hover
                  }}
                  aria-label="add to favorites"
                >
                  <FavoriteIcon />
                </IconButton>
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
                <Typography variant="h6" sx={{ fontSize: '14px' }}>{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <img src={onlinestore} alt="online store" />SIIB
                <Typography variant="body1" sx={{ color: '#AB4BF3', fontSize: '16px', fontWeight: 'bold', margin: '5px auto' }}>
                  Price: {product.price} Pi
                </Typography>
                {/* <IconButton>
                  <FavoriteIcon />
                </IconButton> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsPage;
