// // App.js
// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Tabs,
//   Tab,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Button,
//   Badge,
//   Box,
//   Rating,
// } from '@mui/material';
// import {
//   ArrowBack,
//   FilterList,
//   Favorite, // Use Favorite icon for filled heart
//   FavoriteBorder, // Use FavoriteBorder icon for empty heart
//   ShoppingCart,
//   DirectionsCar,
//   Home,
//   DevicesOther,
//   Checkroom,
// } from '@mui/icons-material';
// import products from '../components/ProductsData';

// function App() {
//   const [value, setValue] = useState(0); // Tab value for category selection
//   const [activeTab, setActiveTab] = useState('Popular'); // Tab value for Popular, Latest, Favorite
//   const [favoriteProducts, setFavoriteProducts] = useState([]); // Store favorite product IDs
    
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const toggleFavorite = (productId) => {
    
//     const [favoriteProducts, setFavoriteProducts] = useState<number[]>([]);
//     if (productId.isFavorite) {
//       setFavoriteProducts(favoriteProducts.filter((id) => id !== productId));
//     } else {
//       setFavoriteProducts([...favoriteProducts, productId]);
//     }
//   };

//   const categories = ['All', 'Car', 'House', 'Electronics', 'Clothing'];
//   const categoryIcons = [null, <DirectionsCar />, <Home />, <DevicesOther />, <Checkroom />]; // Icons for categories
//   const tabs = ['Popular', 'Latest', 'Favorite'];

//   const filteredProducts = products.filter((product) => {
//     if (categories[value] === 'All') {
//       return true;
//     }
//     return product.category === categories[value];
//   });

//   let sortedProducts = [...filteredProducts];
//   if (activeTab === 'Latest') {
//     sortedProducts.sort((a, b) => b.id - a.id);
//   } else if (activeTab === 'Favorite') {
//     sortedProducts = sortedProducts.filter((product) =>
//         favoriteProducts.includes(product.id)
//       );
//   }

//   return (
//     <div>
//       <AppBar position="static" color="default">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <ArrowBack />
//           </IconButton>
//           <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
//             All products
//           </Typography>
//           <IconButton color="inherit">
//             <FilterList />
//           </IconButton>
//         </Toolbar>
//         <Tabs
//           value={activeTab === 'Popular' ? 0 : activeTab === 'Latest' ? 1 : 2}
//           onChange={(event, newValue) => handleTabChange(tabs[newValue])}
//           centered
//         >
//           {tabs.map((tab) => (
//             <Tab key={tab} label={tab} />
//           ))}
//         </Tabs>
//       </AppBar>

//       <Tabs value={value} onChange={handleChange} centered>
//         {categories.map((category, index) => (
//           <Tab
//             key={index}
//             label={category}
//             icon={categoryIcons[index]} // Add category icon
//             iconPosition="start"
//           />
//         ))}
//       </Tabs>

//       <Grid container spacing={2} style={{ padding: '16px' }}>
//         {sortedProducts.map((product) => (
//           <Grid item xs={12} sm={6} md={4} key={product.id}>
//             <Card>
//               <Box position="relative">
//                 <CardMedia
//                   component="img"
//                   height="100"
//                   width={55}
//                   image={product.imageUrl}
//                   alt={product.name}
//                 />
//                 {product.isNew && (
//                   <Box
//                     position="absolute"
//                     top={8}
//                     left={8}
//                     bgcolor="primary.main"
//                     color="white"
//                     padding="4px 8px"
//                     borderRadius="4px"
//                   >
//                     New
//                   </Box>
//                 )}
//                 <Box position="absolute" top={8} right={8}>
//                   <IconButton
//                     color="inherit"
//                     onClick={() => toggleFavorite(product.id)}
//                   >
//                     {favoriteProducts.includes(product.id) ? (
//                       <Favorite color="primary" />
//                     ) : (
//                       <FavoriteBorder />
//                     )}
//                   </IconButton>
//                 </Box>
//               </Box>
//               <CardContent>
//                 <Typography variant="subtitle1">{product.name}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {product.shop}
//                 </Typography>
//                 <Typography variant="body2">{product.price}</Typography>
//                 {product.rating && (
//                   <Box display="flex" alignItems="center" mt={1}>
//                     <Rating
//                       name="read-only"
//                       value={product.rating}
//                       precision={0.1}
//                       readOnly
//                       size="small"
//                     />
//                     <Typography variant="caption" ml={0.5}>
//                       ({product.reviews} Reviews)
//                     </Typography>
//                   </Box>
//                 )}
//               </CardContent>
//               <CardActions>
//                 <Button size="small" variant="outlined">
//                   Add cart
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default App;

import React from 'react'

export default function AllProducts() {
  return (
    <div>AllProducts</div>
  )
}
