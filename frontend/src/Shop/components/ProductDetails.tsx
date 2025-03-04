import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Paper,
  Box,
  Button,
  Chip,
  Rating,
  Avatar,
  Tabs,
  Tab,
  MobileStepper,
} from '@mui/material';
import {
  ArrowBack,
  FavoriteBorder,
  Share,
  CheckCircle,
  AddShoppingCart,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const ProductDetails = () => {
  const theme = useTheme();

  const [value, setValue] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const product = {
    name: 'L9 MAX I9 pro',
    price: '0.3 Pi',
    rating: 4.5,
    reviews: 225,
    available: true,
    vendor: {
   
      shop: 'SIIB Burundi Shop',
      logo: 'https://siibarnut.com/img/new-logo.png', // Replace with vendor logo URL
    },
    location: 'Burundi',
    category: 'Car',
    description: `Li L9 adopt a 1.5L four-cylinder range extender with a maximum thermal efficiency of up to 40.5%. Under CLTC conditions, thethermal oil consumption is as low as 5.9 liters per 100 km. Moreover, the Li L9 has an externalpower discharge capacity of 3.5 kW...`,
    images: [
      'http://localhost:3000/static/media/car4.c562076e5935df900fae.jpg', // Replace with product image URLs
      'http://localhost:3000/static/media/car2.9ffb24f5976021e58e09.jpg',
      'data:image/jpeg;base64,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',
      'http://localhost:3000/static/media/car8.c27d73ca56e191f3bd69.jpg',
      'http://localhost:3000/static/media/landcruser.fa475b8e0822976280f6.jpg',
      'http://localhost:3000/static/media/crown2024.670c3756b337a333c8cf.png',
    ],
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="sm">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBack />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" aria-label="favorite">
            <FavoriteBorder />
          </IconButton>
          <IconButton color="inherit" aria-label="share">
            <Share />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        {/* Product Image Carousel */}
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <img
            src={product.images[activeStep]}
            alt={product.name}
            style={{ width: '100%', display: 'block' }}
          />
          <MobileStepper
            variant="dots"
            steps={product.images.length}
            position="static"
            activeStep={activeStep}
            nextButton={
              <IconButton size="small" onClick={handleNext} disabled={activeStep === product.images.length - 1}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </IconButton>
            }
            backButton={
              <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </IconButton>
            }
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'transparent',
              justifyContent: 'center',
            }}
          />
        </Box>

        {/* Thumbnail Gallery */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 1 }}>
          {product.images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`thumbnail-${index}`}
              style={{ width: '50px', height: '50px', margin: '0 5px', cursor: 'pointer' }}
              onClick={() => setActiveStep(index)}
            />
          ))}
          {product.images.length > 3 && (
            <Chip label={`+${product.images.length - 3}`} size="small" sx={{ marginLeft: 1 }} />
          )}
        </Box>

        {/* Product Details */}
        <Box sx={{ display: 'flex', justifyContent: 'space', marginTop: 2 }}>
          <Chip label={product.location} size="small" />
          <Chip label={product.category} size="small" />
        </Box>

        <Typography variant="h6" sx={{ marginTop: 1 }}>
          {product.name}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
          <Rating name="read-only" value={product.rating} readOnly precision={0.5} />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {product.rating} ({product.reviews} reviews)
          </Typography>
          {product.available && (
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 23,marginBottom:5 }}>
              <CheckCircle color="success" sx={{ fontSize: '1rem', marginRight: 0.3 }} />
              <Typography variant="body2" sx={{ fontSize: '1rem', marginRight: 0 }}>Available</Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
          <Avatar src={product.vendor.logo} sx={{ width: 30, height: 30, marginRight: 1 }} />
          <Typography variant="body2">
          {product.vendor.shop}
          </Typography>
        </Box>

        {/* Tabs for Description and Similar Products */}
        <Tabs value={value} onChange={handleTabChange} aria-label="product tabs" sx={{ marginTop: 2 }}>
          <Tab label="Description" />
          <Tab label="Similar Products" />
        </Tabs>

        {value === 0 && (
          <><Typography variant="body2" sx={{ marginTop: 1 }}>
            {product.description}
            <Typography variant="body2" component="span" sx={{ color: 'primary.main', cursor: 'pointer' }}>
              Read More
            </Typography>
          </Typography><Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
              <Typography variant="h6">{product.price}</Typography>
              <Button variant="contained" startIcon={<AddShoppingCart />}>
                Add to cart
              </Button>
            </Box></>
        )}
     
        {value === 1 && (
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            Similar products content goes here.
          </Typography>
        )}

        {/* Price and Add to Cart */}
        
      </Paper>
    </Container>
  );
};

export default ProductDetails;