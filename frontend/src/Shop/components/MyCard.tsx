import * as React from 'react';
import { Card, CardMedia, CardContent, IconButton, Typography, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import carv8 from '../../imges/statics/v8card.jpeg';
import onlinestore from '../../imges/statics/onlinestore.svg';

export default function MyCard() {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '20px 20px 5rem 20px', gap: 2 }}>
      <Card sx={{ maxWidth: '50%', fontSize: '12px', position: 'relative', borderRadius: '10px' }}>
        {/* Image */}
        <CardMedia component="img" height="130" image={carv8} alt="v8 car" />

        {/* Favorite Icon Positioned on Top Right */}
        <IconButton
          onClick={handleFavoriteClick}
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
        {/* Card Content */}
        <CardContent sx={{ margin: 0, padding: '0px 5px' }}>
          <Typography variant="h6" sx={{ fontSize: '14px' }}>
            BYD U8 Hybrid Electric Car
          </Typography>
        </CardContent>
        <Box sx={{ fontSize: '12px', color: 'gray', padding: '0 5px' }}>
          <img src={onlinestore} alt="online store" />
          SIIB Tanzania Shop

          <Box sx={{color: '#AB4BF3', fontSize: '16px', fontWeight: 'bold', margin: '5px auto'}}>0.45 Pi</Box>
        </Box>
      </Card>
    </Box>
  );
}
