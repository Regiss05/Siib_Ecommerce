import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import Cart from "./components/Cart";
import Chat from "./components/Chat";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Routes> {/* Wrap the routes inside the Routes component */}
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </>
  );
}
