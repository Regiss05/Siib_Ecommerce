import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
  Divider,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import {
  ArrowBack,
  MoreVert,
  Home,
  Favorite,
  ShoppingCart,
  ChatBubble,
  AccountCircle,
  RemoveCircleOutline,
  AddCircleOutline,
  Close,
  Storefront,
  ShoppingCartCheckout,
} from '@mui/icons-material';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Land Lover',
      price: 0.45,
      quantity: 1,
      image: 'http://localhost:3000/static/media/car7.a436c3d9d9bdb9ce10cd.jpg',
      shop: 'SIIB Tanzania',
    },
    {
      id: 2,
      name: 'Range Sport',
      price: 0.000205,
      quantity: 1,
      image: 'data:image/jpeg;base64,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',
      shop: 'SIIB BURUNDI',
    },
    {
      id: 3,
      name: 'Land cruiser',
      price: 0.000205,
      quantity: 1,
      image: 'data:image/jpeg;base64,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',
      shop: 'SIIB RWANDA',
    },
    {
      id: 4,
      name: 'Land cruiser Prado',
      price: 0.000205,
      quantity: 1,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUSEhMWFhUVFhUVFRcXFxcWFRYXFRcWFxUXFRgYHSggGBolHhYYITEiJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGA8QFy0eHR0tLS0tKysrLSsrLS03KzctKy0tKysrKystLTctOC4rKystLS0tLTU3KzcrLSstKy0rLf/AABEIAKEBOQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABJEAACAQIDBQQGBgYIBAcAAAABAgADEQQSIQUGMUFRE2FxgQciUpGhsRQyQnLB0RUjYpKy8BYkM0NTY4LhF1SjwoOTlKLD0/H/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGREBAQEBAQEAAAAAAAAAAAAAABEBIQIx/9oADAMBAAIRAxEAPwDuMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEwY7GU6NNqtVgqICzMeQHzPcNTKCvpaos1kwmIYXspsoJF7A5b6X7z42gdFiVc75qPrYXEr/6c/wANYzGvpAwl7FMQpHWi5HvW4MC2RK9R31wTf3jj71GsPmk2f6U4PT9emvW499xp5wJiJDnenA/81R/8xfznP8Z6Va5r1RRoUuxRstNqmcPUA0L6GwBOo04EQOsRKJh9+6pVGalg/XtYDHrnGYXAZTSGU9bnQ6T1tP0iDDKrV8K2V2yA0q1CtrYngrggacSAIF5iVfC7603oiv8ARcWKZXMG7IVAQOJ/VM1uB4zNu7vtgsawShUJYgsoZGXMBxysRlJHQG+h6QLFERAREQEREBERAREQEREBERAREQEREBERAREQEREBNTau0aWHovXrNlRBcniegCgaliSAANSSBNucR3/3r+l18tNv6tSJ7O3Cq+oNU9RxC9xLa5hYMm29+sXXfMrtQQXy00IvY8O0cas3cDbx4mEr7axR41Kh95mphrhzfkPcTy8bfOZKtewJPLX3QNettusDrUa/eZrPtyr/AIjSDxmMuxPfM2Nw2SkKlzqFuLcCR18YEmNqVjwLG/DS9/hMZ2vU9s/D8pA4faDIwYHh/JmTZz56yjvv5DX8IE1+lqntH4flPA2q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REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k=',
      shop: 'SIIB Tanzania ',
    },
  ]);

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateOrderFees = () => {
    return 0.00004;
  };

  return (
    <div>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            My cart
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="more">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ 
        mt: 2, 
        mb: 8, 
        maxHeight: 'calc(100vh - 200px)', 
        overflowY: 'auto' 
      }}>
        <Container maxWidth="sm">
          <Typography variant="subtitle1" sx={{ mb: 2,textAlign:'center' }}>
          <Badge badgeContent=  {cartItems.length} color="primary">
        </Badge>
          </Typography>

          {cartItems.map((item) => (
            <Card key={item.id} sx={{ display: 'flex', mb: 2,borderRadius:'4px'  }}>
              <CardMedia
                component="img"
                sx={{ width: 110, height: 80, objectFit: 'cover',backgroundColor:'#D9D9D9' }}
                image={item.image}
                alt={item.name}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
              <CardContent sx={{ flex: '1 0 auto', p: 1 }}>
                  <Typography component="div" variant="subtitle1">
                    {item.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center',backgroundColor:'#D9D9D9',width:'40vw',height:'5vh',borderRadius:'6px' }}>
                    <Storefront sx={{ fontSize: 16, mr: 0.5,color:'#362FFF',marginRight:'4px',paddingLeft:'15px' }} />
                    <Typography variant="body2" color="text.secondary" sx={{fontSize:'12',color:'#362FFF'}}>
                      {item.shop}
                    </Typography>
                  </Box>
                </CardContent>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 3,paddingBottom:'13px',marigin:'55px' }}>
                 
                </Box> */}
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', position: 'absolute', top: 13, right: 8,color:'#362FFF',fontFamily:'sans-serif'}}>
                 
                  {item.price} Pi
             
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1,width:'108%',position:'absolute',top:27 }}>
                  <IconButton
                    size="small"
                    onClick={() => handleQuantityChange(item.id, -1)}
                   
                  >
                    <RemoveCircleOutline />
                  </IconButton>
                  <Typography variant="body2" sx={{ mx: 1 }}>
                    {item.quantity}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <AddCircleOutline />
                  </IconButton>
                  </Box>
              </Box>
              <IconButton onClick={() => handleRemoveItem(item.id)} sx={{ alignSelf: 'start', p: 1 }}>
                <Close />
              </IconButton>
            </Card>
          ))}

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="subtitle1" sx={{color:'#BAB3B3'}}>Amount</Typography>
            <Typography variant="subtitle1">{calculateTotal()} Pi</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="subtitle1"sx={{color:'#BAB3B3'}}>Order Fees</Typography>
            <Typography variant="subtitle1">{calculateOrderFees()} Pi</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="subtitle1"sx={{color:'#BAB3B3'}}>Discount</Typography>
            <Typography variant="subtitle1">0%</Typography>
          </Box>

          <Button variant="contained"sx={{backgroundColor:'#362FFF',width:'100%',borderRadius:'11px'}}>
          <ShoppingCartCheckout  />
            Checkout
          </Button>
        </Container>
      </Box>

      <BottomNavigation showLabels sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Favorite" icon={<Favorite />} />
        <BottomNavigationAction label="Cart" icon={<ShoppingCart />} />
        <BottomNavigationAction label="Chat" icon={<ChatBubble />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
      </BottomNavigation>
    </div>
  );
};

export default CartPage;