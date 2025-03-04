import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Button,
  Box,
  ButtonGroup,
  ListItemIcon,
  Card, CardMedia,
} from '@mui/material';
import {
  ArrowBack,
  MoreVert,
  Close,
  Add,
  Remove,
  Home as HomeIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingCart as ShoppingCartIcon,
  ChatBubble as ChatBubbleIcon,
  AccountCircle as AccountCircleIcon,
  Store as StoreIcon,
} from '@mui/icons-material';

interface Product {
  id: number;
  name: string;
  price: string;
  shop: string;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
    {
      id: 1,
      name: 'L9 MAX I9 Pro',
      price: '0.45 Pi',
      shop: 'SIIB Tanzania Shop',
      image: 'https://via.placeholder.com/150',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Hp laptop',
      price: '0.000205 Pi',
      shop: 'SIIB Tanzania Shop',
      image: 'https://via.placeholder.com/150',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Macbook Pro',
      price: '0.000205 Pi',
      shop: 'SIIB Tanzania Shop',
      image: 'https://via.placeholder.com/150',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Hp laptop',
      price: '0.000205 Pi',
      shop: 'SIIB Tanzania Shop',
      image: 'https://via.placeholder.com/150',
      quantity: 1,
    },
  ]);

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace(' Pi', '')) * item.quantity,
    0
  );
  const orderFees = 0.00004;

  return (
    <Container maxWidth="sm">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My cart
          </Typography>
          <IconButton color="inherit" aria-label="more">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items
        </Typography>

        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id} alignItems="flex-start" sx={{ border: '1px solid #e0e0e0', borderRadius: '4px', marginBottom: '8px' }}>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1">{item.name}</Typography>
                    <IconButton edge="end" aria-label="close" onClick={() => handleRemoveItem(item.id)}>
                      <Close />
                    </IconButton>
                  </Box>
                }
                secondary={
                  <React.Fragment>
                    <Box display="flex" alignItems="center">
                      <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px' }}>
                        <StoreIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography component="span" variant="body2" color="text.primary">
                        {item.shop}
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2">{item.price}</Typography>
                      <ButtonGroup size="small">
                        <Button onClick={() => handleQuantityChange(item.id, -1)}>
                          <Remove />
                        </Button>
                        <Typography variant="body2" sx={{ margin: '0 8px' }}>
                          {item.quantity}
                        </Typography>
                        <Button onClick={() => handleQuantityChange(item.id, 1)}>
                          <Add />
                        </Button>
                      </ButtonGroup>
                    </Box>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="body1">Amount</Typography>
          <Typography variant="body2" align="right">
            {totalAmount.toFixed(3)} Pi
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="body1">Order Fees</Typography>
          <Typography variant="body2" align="right">
            {orderFees} Pi
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1">Discount</Typography>
          <Typography variant="body2" align="right">
            0%
          </Typography>
        </Box>

        <Button variant="contained" fullWidth>
          Checkout
        </Button>
      </Paper>

      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#fff' }}>
        <Divider />
        <Toolbar>
          <IconButton>
            <HomeIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </Box>
    </Container>
  );
};

export default Cart;