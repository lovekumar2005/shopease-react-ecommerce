import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../common/SearchBar";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";

const Navbar = () => {
  const location = useLocation();
  const { cartCount } = useCart();
  const { wishlistItems } = useWishlist();
  const { user, isLoggedIn } = useAuth();

  const loggedIn = localStorage.getItem("shopEaseLoggedIn") === "true";
  const savedUser = JSON.parse(localStorage.getItem("shopEaseUser")) || null;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex cursor-pointer items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <span className="text-2xl">🛍️</span>
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Shop<span className="text-blue-500">Ease</span>
            </h1>

            <p className="text-[10px] font-medium tracking-wider text-gray-500">
              SHOP SMARTER
            </p>
          </div>
        </Link>


        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {/* Home */}
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors ${
              location.pathname === "/"
                ? "text-blue-500"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            Home
          </Link>


          {/* Products */}
          <Link
            to="/products"
            className={`text-sm font-semibold transition-colors ${
              location.pathname.startsWith("/products")
                ? "text-blue-500"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            Products
          </Link>


          {/* Categories */}
          <Link
            to="/categories"
            className={`text-sm font-semibold transition-colors ${
              location.pathname === "/categories"
                ? "text-blue-500"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            Categories
          </Link>

        </div>


        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Search Component */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>


          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-xl text-gray-400 hover:bg-red-500/10 hover:text-red-500"
          >
            ♡

            {wishlistItems.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>


          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-lg text-gray-400 hover:bg-blue-500/10 hover:text-blue-500"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>


          {/* Profile */}
          {isLoggedIn ? (
          
            <Link
              to="/account"
              className="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 py-1.5 pl-1.5 pr-3 hover:border-blue-500/40 hover:bg-blue-500/10"
            >
            
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm">
                {user?.firstName?.charAt(0)}
              </span>
          
              <span className="hidden text-sm font-medium text-gray-300 sm:block">
                {user?.firstName}
              </span>
          
            </Link>
          
          ) : (
          
            <Link
              to="/login"
              className="rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
            >
              Login
            </Link>
          
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;