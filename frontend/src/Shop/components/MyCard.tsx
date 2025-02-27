import * as React from 'react';
import { Card, CardMedia, CardContent, IconButton, Typography, Box,Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import carv8 from '../../imges/statics/v8card.jpeg';
import car1 from '../../imges/statics/car1.jpg';
import car2 from '../../imges/statics/car2.jpg';
import car3 from '../../imges/statics/car3.jpg';
import car4 from '../../imges/statics/car4.jpg';
import car5 from '../../imges/statics/car5.jpg';
import car6 from '../../imges/statics/car6.jpg';
import car7 from '../../imges/statics/car7.jpg';
import car8 from '../../imges/statics/car8.jpg';
import car9 from '../../imges/statics/car9.jpg';
import car10 from '../../imges/statics/car10.jpg';
import car11 from '../../imges/statics/car11.jpg';
import car12 from '../../imges/statics/car12.jpg';
import car13 from '../../imges/statics/car13.jpg';
import car14 from '../../imges/statics/car14.jpg';
import car15 from '../../imges/statics/car15.jpg';
import car16 from '../../imges/statics/car16.jpg';
import house2 from '../../imges/statics/house2.jpg';
import house3 from '../../imges/statics/house3.jpg';
import house4 from '../../imges/statics/house4.jpg';
import house5 from '../../imges/statics/house5.jpg';
import house from '../../imges/statics/house1.jpg';
import onlinestore from '../../imges/statics/onlinestore.svg';
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  shopName: string;
}
// Sample Product Data
const Product = [
  { id: 1, name: "car1", price: "0.10", image: car1, shopName: "SIIB IVORY COST"},
  { id: 2, name: "car2", price: "0.9", image: car2, shopName: "SIIB IVORY COST" },
  { id: 3, name: "car3", price: "0.03", image: car3, shopName: "SIIB BURUNDI" },
  { id: 4, name: "Smartwatch", price: "0.06", image:car4, shopName: "SIIB BURUNDI"},
  { id: 5, name: "Camera", price: "0.003", image: car5, shopName: "SIIB BURUNDI" },
  { id: 6, name: "Monitor", price: "0.001", image: car6, shopName: "SIIB BURUNDI"},
  { id: 8, name: "Emerald Paradise", price: "0.002", image:house, shopName: "SIIB BURUNDI"},
  { id: 9, name: "Lotus Feet Cottage", price: "0.005", image:house2, shopName: "Tech Hub"},
  { id: 10, name: "Divine Heritage", price: "0.0021", image:house3, shopName: "SIIB TANZANIA"},
  { id: 11, name: "Moonlit Roof Cottage", price: "0.0011", image:house4, shopName: "SIIB TANZANIA"},
  { id: 12, name: "Pure Abode", price: "0.0013", image:house5, shopName: "SIIB TANZANIA"},
  { id: 13, name: "LandLover", price: "0.0017", image:car7, shopName: "SIIB TANZANIA"},
  { id: 14, name: "Mercedes-Benz AMG G-Class", price: "0.0025", image:car8, shopName: "SIIB TANZANIA"},
  { id: 15, name: "BYD Shark Premium PHEV ", price: "0.0027", image:car9, shopName: "SIIB TANZANIA"},
  { id: 16, name: "Nissan Armada", price: "0.002", image:car10, shopName: "SIIB TANZANIA"},
  { id: 17, name: "Hot Hongqi H9 2023 ", price: "0.0029", image:car11, shopName: "SIIB BENIN"},
  { id: 18, name: "Chery Tiggo 7 Pro", price: "0.0023", image:car12, shopName: "SIIB BENIN"},
  { id: 19, name: "Hongqi E-HS9 2025", price: "0.0028", image:car13, shopName: "SIIB BENIN"},
  { id: 20, name: "Toyota Noah Si Gs Version EDGE", price: "0.0031", image:car14, shopName: "SIIB BENIN"},
  { id: 21, name: "Pre-Owned BMW X5 ", price: "0.39", image:car15, shopName: "SIIB BENIN"},
  { id: 22, name: "2023 Toyota Hilux Revo Double Cab Z", price: "0.0034", image:car16, shopName: "SIIB Burundi"},
];

export default function MyCard() {
  const [isFavorite, setIsFavorite] = React.useState(false);

  // const handleFavoriteClick = () => {
  //   setIsFavorite(!isFavorite);
  // };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 20px 5rem 20px', gap: 2 }}>
<Grid container spacing={3}>
        {Product.map((product) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={product.id}>
            <Card sx={{ maxWidth: '88%', fontSize: '12px', position: 'relative', borderRadius: '10px',p:2 }}>
              <CardMedia component="img" height="88" image={product.image} alt={product.name} />
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
              <CardContent sx={{ margin: 0, padding: '0px 5px' }}>
              <Typography variant="h6" sx={{ fontSize: '14px' }}>{product.name}</Typography>

              </CardContent>
              <Box sx={{ fontSize: '12px', color: 'gray', padding: '0 5px' }}>
              <img src={onlinestore} alt="online store" />
              {product.shopName}
              <Box sx={{ color: '#AB4BF3', fontSize: '16px', fontWeight: 'bold', margin: '5px auto' }}>{product.price} Pi</Box>
            </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

  );
}
