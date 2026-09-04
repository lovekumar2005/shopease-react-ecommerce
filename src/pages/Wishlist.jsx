import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Wishlist = () => {

  const {
    wishlistItems,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  const { addToCart } = useCart();


  // =========================
  // EMPTY WISHLIST
  // =========================

  if (wishlistItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#030712] px-6 py-24 text-white">

        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-400">
            <Heart size={36} />
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Your Wishlist is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Save your favorite products here and come back later.
          </p>

          <Link
            to="/products"
            className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Explore Products
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="min-h-screen bg-[#030712] px-6 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-blue-400"
        >
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>


        <div className="mt-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              My Wishlist
            </h1>

            <p className="mt-2 text-gray-500">
              Your favorite products in one place.
            </p>

          </div>


          <button
            onClick={clearWishlist}
            className="text-sm text-red-400 transition hover:text-red-300"
          >
            Clear Wishlist
          </button>

        </div>


        {/* ================= PRODUCTS ================= */}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {wishlistItems.map((product) => (

            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a1020]"
            >

              {/* IMAGE */}

              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-linear-to-br from-[#0d172b] to-[#060b16]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-[85%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
                />


                {/* REMOVE */}

                <button
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-gray-400 backdrop-blur-md transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={16} />
                </button>

              </div>


              {/* INFO */}

              <div className="p-5">

                <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                  {product.category}
                </p>

                <h2 className="mt-2 line-clamp-1 text-lg font-semibold text-white">
                  {product.name}
                </h2>


                <div className="mt-4 flex items-center justify-between">

                  <span className="text-xl font-bold">
                    ${Number(product.price).toFixed(2)}
                  </span>


                  {/* ADD TO CART */}

                  <button
                    onClick={() => addToCart(product)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-500"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart size={17} />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
};

export default Wishlist;