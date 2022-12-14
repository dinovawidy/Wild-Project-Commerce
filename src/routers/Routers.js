import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";

const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<Cart />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Routers;
