import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import Cart from "./components/Cart";
import Chat from "./components/Chat";
import AddItem from "./components/AddItem";
import CreateShop from "./components/CreateShop";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  // useTranslation(); // Ensure the useTranslation hook is called
  
  return (
    <>
      <Routes> {/* Wrap the routes inside the Routes component */}
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/CreateShop" element={<CreateShop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Add product details route */}
      </Routes>
      <Footer />
    </>
  );
}
