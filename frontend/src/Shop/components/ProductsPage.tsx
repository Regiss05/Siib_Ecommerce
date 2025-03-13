import React, { useEffect, useState } from "react";
import { 
  Card, CardMedia, CardContent, IconButton, Typography, Box, Grid, Dialog, DialogContent, DialogTitle, TextField 
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import onlinestore from "../../imges/statics/onlinestore.svg";

// Define Product type
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

const ProductsPage: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [popupSearchQuery, setPopupSearchQuery] = useState(searchQuery);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    setOpen(searchQuery.length > 0);
  }, [searchQuery]);

  const handleLike = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:8000/products/${id}/like`, { method: "POST" });
      const data = await res.json();
      setProducts(products.map((p) =>
        p._id === id ? { ...p, likes: data.likes } : p
      ));
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(popupSearchQuery.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 20px 5rem 20px', gap: 2 }}>
      
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product._id} xs={6} sm={4} md={3} lg={2}>
            <Card
              sx={{
                maxWidth: '100%',
                fontSize: '12px',
                position: 'relative',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <CardMedia
                component="img"
                height="88"
                image={`http://localhost:8000${product.imageUrl}`}
                alt={product.name}
              />
              <CardContent sx={{ margin: 0, padding: 1 }}>
                <IconButton
                  sx={{ backgroundColor: 'white', position: "absolute", top: 10, right: 10, color: (product.likes || 0) > 0 ? "red" : "gray" }}
                  onClick={(e) => { e.stopPropagation(); handleLike(product._id); }}
                >
                  <FavoriteIcon />
                </IconButton>
                <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{product.name}</Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: 'block',
                    maxWidth: '100%',
                    fontSize: '10px',
                    color: '#9d9d9d',
                  }}
                >
                  {product.description}
                </Typography>
                <img src={onlinestore} alt="online store" />SIIB
                <Typography variant="body1" sx={{ color: '#6030ff', fontSize: '16px', fontWeight: 'bold', margin: '5px auto' }}>
                  Price: {product.price} Pi
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Search Results Popup */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6">Search Results</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ height: "80vh", overflowY: "auto" }}>
          <TextField
            label="Search Products"
            value={popupSearchQuery}
            onChange={(e) => setPopupSearchQuery(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <Grid container spacing={3}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Grid item key={product._id} xs={6} sm={4} md={3} lg={2}>
                  <Card
                    sx={{
                      maxWidth: '100%',
                      fontSize: '12px',
                      position: 'relative',
                      borderRadius: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={() => { 
                      navigate(`/product/${product._id}`);
                      setOpen(false);
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="88"
                      image={`http://localhost:8000${product.imageUrl}`}
                      alt={product.name}
                    />
                    <CardContent sx={{ margin: 0, padding: 1 }}>
                      <IconButton
                        sx={{ backgroundColor: 'white', position: "absolute", top: 10, right: 10, color: (product.likes || 0) > 0 ? "red" : "gray" }}
                        onClick={(e) => { e.stopPropagation(); handleLike(product._id); }}
                      >
                        <FavoriteIcon />
                      </IconButton>
                      <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{product.name}</Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: 'block',
                          maxWidth: '100%',
                          fontSize: '10px',
                          color: '#9d9d9d',
                        }}
                      >
                        {product.description}
                      </Typography>
                      <img src={onlinestore} alt="online store" />SIIB
                      <Typography variant="body1" sx={{ color: '#6030ff', fontSize: '16px', fontWeight: 'bold', margin: '5px auto' }}>
                        Price: {product.price} Pi
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography sx={{ textAlign: "center", width: "100%" }}>No results found</Typography>
            )}
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProductsPage;
