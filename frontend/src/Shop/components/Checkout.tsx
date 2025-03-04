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
  Badge,
  Rating,
  ListItemIcon,
} from '@mui/material';
import { ArrowBack, Close, Store as StoreIcon } from '@mui/icons-material';

interface Product {
  id: number;
  name: string;
  price: string;
  shop: string;
  rating: number;
  image: string;
}

const OrderSummary = () => {
  const [orderItems, setOrderItems] = useState<Product[]>([
    {
      id: 1,
      name: 'L9 MAX I9 Pro',
      price: '0.5 Pi',
      shop: 'SIIB Tanzania Shop',
      rating: 4.5,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Hp Laptop',
      price: '0.000205 Pi',
      shop: 'SIIB Burundi Shop',
      rating: 4.7,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const handleRemoveItem = (id: number) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = orderItems.reduce((acc, item) => acc + parseFloat(item.price.replace(' Pi', '')), 0);
  const shippingFees = 0.000055;
  const tax = 0.00004;
  const total = totalAmount + shippingFees + tax;

  return (
    <Container maxWidth="sm">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Order summary
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <List>
          {orderItems.map((item) => (
            <ListItem key={item.id} alignItems="flex-start" sx={{ border: '1px solid #e0e0e0', borderRadius: '4px', marginBottom: '8px' }}>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="flex" justifyContent="space-between">
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
                    {item.price}
                  </React.Fragment>
                }
              />
              <Box display="flex" flexDirection="column" alignItems="center">
                <Rating name="read-only" value={item.rating} precision={0.5} readOnly size="small" />
              </Box>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1"align="right">Username</Typography>
          <Typography variant="body2"align="right">@avatar93</Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1"align="right">Wallet</Typography>
          <Typography variant="body2"align="right">DHY56FNCN456HDJ21</Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1"align="right">Shipping Adress</Typography>
          <Typography variant="body2"align="right">Burundi, Bujumbura, Ntahagwa</Typography>
          <Button size="small" sx={{ marginLeft: 46 }}>
            Edit
          </Button>
          <Typography component="span"> | </Typography>
          <Button size="small">Remove</Button>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="body1">Amount</Typography>
          <Typography variant="body2" align="right">
            {totalAmount.toFixed(6)} Pi
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="body1">Items</Typography>
          <Typography variant="body2" align="right">
            {orderItems.length}
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="body1">Shipping Fees</Typography>
          <Typography variant="body2" align="right">
            {shippingFees.toFixed(6)} Pi
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="body1">Tax(18%)</Typography>
          <Typography variant="body2" align="right">
            {tax.toFixed(6)} Pi
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1">Total</Typography>
          <Typography variant="body2" align="right">
            {total.toFixed(6)} Pi
          </Typography>
        </Box>

        <Button variant="contained" fullWidth>
          Confirm Payment
        </Button>
      </Paper>
    </Container>
  );
};

export default OrderSummary;