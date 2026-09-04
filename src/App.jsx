import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* =========================
            PUBLIC ROUTES
        ========================= */}

        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>
        <Route path="/categories" element={<Categories />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>


        {/* =========================
            PROTECTED ROUTES
        ========================= */}

        <Route path="/wishlist" element={<ProtectedRoute> <Wishlist /> </ProtectedRoute>}/>
        <Route path="/checkout" element={<ProtectedRoute> <Checkout /> </ProtectedRoute>}/>
        <Route path="/account" element={<ProtectedRoute> <Account /> </ProtectedRoute>}/>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;