import * as React from 'react';
import { Card, CardMedia, CardContent, IconButton, Typography, Box,Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
import carv8 from '../../imges/statics/v8card.jpeg';
import car1 from '../../imges/statics/car1.jpg';
import car2 from '../../imges/statics/car2.jpg';
import car3 from '../../imges/statics/car3.jpg';
import car4 from '../../imges/statics/car4.jpg';
import car5 from '../../imges/statics/car5.jpg';
import car6 from '../../imges/statics/car6.png';
import car7 from '../../imges/statics/car7.jpg';
import car8 from '../../imges/statics/car8.jpg';
import car9 from '../../imges/statics/car9.jpg';
import car10 from '../../imges/statics/car10.jpg';
import car11 from '../../imges/statics/car11.jpg';
import car12 from '../../imges/statics/car12.jpg';
import car13 from '../../imges/statics/car13.jpg';
import car14 from '../../imges/statics/car14.jpg';
import car15 from '../../imges/statics/car15.jpg';
import v92024 from '../../imges/statics/v82024.png';
import house2 from '../../imges/statics/house2.jpg';
import house3 from '../../imges/statics/house3.jpg';
import house4 from '../../imges/statics/house4.jpg';
import house5 from '../../imges/statics/house5.jpg';
import house6 from '../../imges/statics/house6.jpg';
import house7 from '../../imges/statics/house7.jpg';
import house8 from '../../imges/statics/house8.jpg';
import house9 from '../../imges/statics/house9.jpg';
import house10 from '../../imges/statics/house10.jpg';
import house11 from '../../imges/statics/house11.jpg';
import house12 from '../../imges/statics/house12.jpg';
import house13 from '../../imges/statics/house13.jpg';
import house14 from '../../imges/statics/house14.jpg';
import car17 from '../../imges/statics/car17.jpg';
import car18 from '../../imges/statics/car18.jpg';
import car19 from '../../imges/statics/car19.jpg';
import car20 from '../../imges/statics/car20.jpg';
import car33 from '../../imges/statics/car33.jpg';
import houses from '../../imges/statics/housenew2.jpg';
import vpcar from '../../imges/statics/landcruser.jpg';
import jeep from '../../imges/statics/jeep.png';
import landlover from '../../imges/statics/landlover.png';
import vpcar2 from '../../imges/statics/v82024.png';
import crown from '../../imges/statics/crown2024.png';
import benz from '../../imges/statics/benz.png';
import benz2 from '../../imges/statics/benz2.png';
import prado from '../../imges/statics/toyotaprado.png';
import house21 from '../../imges/statics/house21.png';
import house22 from '../../imges/statics/house22.png';
import house23 from '../../imges/statics/house23.png';
import house24 from '../../imges/statics/house24.png';
import house25 from '../../imges/statics/house25.png';
import house26 from '../../imges/statics/house26.png';
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
  { id: 1, name: "Lexus Gx460", price: "0.10", image: car1, shopName: "SIIB IVORY COST"},
  { id: 2, name: "Toyota RAV4 Hybrid SE ", price: "0.9", image: car2, shopName: "SIIB RWANDA" },
  { id: 3, name: "Nissan Magnite", price: "0.03", image: car3, shopName: "SIIB BURUNDI" },
  { id: 4, name: "Nissan Caravan Van ", price: "0.06", image:car4, shopName: "SIIB BURUNDI"},
  { id: 5, name: "BYD YangWang U8", price: "0.003", image: car5, shopName: "SIIB BURUNDI" },
  { id: 6, name: "BMW 2-Series", price: "0.001", image: car6, shopName: "SIIB BURUNDI"},
  { id: 8, name: "Emerald Paradise", price: "0.002", image:house6, shopName: "SIIB RWANDA"},
  { id: 9, name: "Lotus Feet Cottage", price: "0.005", image:house2, shopName: "Tech Hub"},
  { id: 10, name: "Divine Heritage", price: "0.0021", image:house3, shopName: "SIIB TANZANIA"},
  { id: 11, name: "Moonlit Roof Cottage", price: "0.0011", image:house4, shopName: "SIIB TANZANIA"},
  { id: 12, name: "Pure Abode", price: "0.0013", image:house5, shopName: "SIIB RWANDA"},
  { id: 13, name: "LandLover", price: "0.0017", image:car7, shopName: "SIIB TANZANIA"},
  { id: 14, name: "Mercedes-Benz AMG G-Class", price: "0.0025", image:car8, shopName: "SIIB TANZANIA"},
  { id: 15, name: "BYD Shark Premium PHEV ", price: "0.0027", image:car9, shopName: "SIIB TANZANIA"},
  { id: 16, name: "Nissan Armada", price: "0.002", image:car10, shopName: "SIIB TANZANIA"},
  { id: 17, name: "Hot Hongqi H9 2023 ", price: "0.0029", image:car11, shopName: "SIIB BENIN"},
  { id: 18, name: "Chery Tiggo 7 Pro", price: "0.0023", image:car12, shopName: "SIIB BENIN"},
  { id: 19, name: "Hongqi E-HS9 2025", price: "0.0028", image:car13, shopName: "SIIB BENIN"},
  { id: 20, name: "Toyota Noah Si Gs Version EDGE", price: "0.0031", image:car14, shopName: "SIIB BENIN"},
  { id: 21, name: "Pre-Owned BMW X5 ", price: "0.39", image:car15, shopName: "SIIB BENIN"},
  { id: 22, name: "House Celtigar", price: "0.0034", image:house7, shopName: "SIIB Burundi"},
  { id: 23, name: "Blackberry Cottage", price: "0.0045", image:house8, shopName: "SIIB Burundi"},
  { id: 24, name: "Chimney Cottage", price: "0.0061", image:house9, shopName: "SIIB TANZANIA"},
  { id: 25, name: "Brahmins House", price: "0.0039", image:house10, shopName: "SIIB Burundi"},
  { id: 26, name: "Oakhall Cottage", price: "0.0043", image:house11, shopName: "SIIB RWANDA"},
  { id: 27, name: "Birch Cottage", price: "0.0061", image:house12, shopName: "SIIB RWANDA"},
  { id: 28, name: "Rose Cottage", price: "0.0061", image:house13, shopName: "SIIB BURUNDI"},
  { id: 29, name: "Barton Villa", price: "0.0061", image:house14, shopName: "SIIB RWANDA"},
  { id: 30, name: "Ferrari", price: "0.0043", image:car17, shopName: "SIIB RWANDA"},
  { id: 31, name: "Birch Cottage", price: "0.0061", image:car18, shopName: "SIIB TANZANIA"},
  { id: 32, name: "Rose Cottage", price: "0.0071", image:car19, shopName: "SIIB RWANDA"},
  { id: 33, name: "Barton Villa", price: "0.0061", image:car20, shopName: "SIIB SOUTH AFRICA"},
  { id: 34, name: "Landcruiser V9", price: "0.0064", image:car33, shopName: "SIIB BURUNDI"},
  { id: 35, name: "Landcruiser V9", price: "0.0069", image:houses, shopName: "SIIB BURUNDI"},
  { id: 36, name: "Landcruiser V9", price: "0.0063", image:vpcar, shopName: "SIIB BURUNDI"},
  { id: 37, name: "Landcruiser V9", price: "0.0062", image:vpcar2, shopName: "SIIB BURUNDI"},
  { id: 38, name: "Jeep 2024", price: "0.0063", image:jeep, shopName: "SIIB TANZANIA"},
  { id: 39, name: "Landlover 2024", price: "0.0081", image:landlover, shopName: "SIIB RWANDA"},
  { id: 40, name: "Crown 2024", price: "0.0077", image:crown, shopName: "SIIB TANZANIA"},
  { id: 41, name: "Mercedes-Benz Trucks", price: "0.00682", image:benz2, shopName: "SIIB BURUNDI"},
  { id: 42, name: "Mercedes-Benz Trucks", price: "0.0084", image:benz, shopName: "SIIB RWANDA"},
  { id: 43, name: "Toyota Prado 2024", price: "0.0084", image:prado, shopName: "SIIB RWANDA"},
  { id: 44, name: "The New American Home 2024", price: "0.0087", image:house21, shopName: "SIIB RWANDA"},
  { id: 45, name: "The New American Home ", price: "0.0087", image:house22, shopName: "SIIB RWANDA"},
  { id: 46, name: "2Modern Luxury Home Building", price: "0.0089", image:house23, shopName: "SIIB BURUNDI"},
  { id: 47, name: "Murray Homes", price: "0.0092", image:house24, shopName: "SIIB TANZANIA"},
  { id: 48, name: "Murray Homes", price: "0.0092", image:house24, shopName: "SIIB TANZANIA"},
  { id: 49, name: "Murray Homes", price: "0.0092", image:house24, shopName: "SIIB TANZANIA"},
  { id: 50, name: "Murray moden house", price: "0.0095", image:house25, shopName: "SIIB TANZANIA"},
  { id: 51, name: "Tropical House Design", price: "0.0097", image:house26, shopName: "SIIB TANZANIA"},
];

export default function MyCard() {
  const [isFavorite, setIsFavorite] = React.useState(false);

  // const handleFavoriteClick = () => {
  //   setIsFavorite(!isFavorite);
  // };
  const navigate = useNavigate();

  const openRandomProduct = () => {
    const randomId = Product[Math.floor(Math.random() * Product.length)].id;
    navigate(`/product/${randomId}`);
  };
  function handleOpenProduct(id: number) {
    throw new Error('Function not implemented.');
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 20px 5rem 20px', gap: 2 }}>
<Grid container spacing={3}>
        {Product.map((product) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={product.id}>
            <Card sx={{ maxWidth: '88%', fontSize: '12px', position: 'relative', borderRadius: '10px',p:2 }}>
              <CardMedia component="img" height="88" 
              image={product.image} alt={product.name}
              onClick={openRandomProduct}
              />
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