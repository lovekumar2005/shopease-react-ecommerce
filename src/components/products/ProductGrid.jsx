import { SlidersHorizontal, ChevronDown } from "lucide-react";

import ProductCard from "./ProductCard";

import headphones from "../../assets/products/headphones.png";
import smartwatch from "../../assets/products/smartwatch.png";
import sneakers from "../../assets/products/sneakers.png";
import backpack from "../../assets/products/backpack.png";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: "129.99",
    oldPrice: "159.99",
    discount: 19,
    rating: 4.8,
    reviews: 124,
    image: headphones,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: "89.99",
    oldPrice: "119.99",
    discount: 25,
    rating: 4.9,
    reviews: 98,
    image: smartwatch,
  },
  {
    id: 3,
    name: "Air Max Running Shoes",
    category: "Footwear",
    price: "79.99",
    oldPrice: "99.99",
    discount: 20,
    rating: 4.7,
    reviews: 86,
    image: sneakers,
  },
  {
    id: 4,
    name: "Urban Travel Backpack",
    category: "Accessories",
    price: "59.99",
    oldPrice: "74.99",
    discount: 20,
    rating: 4.8,
    reviews: 73,
    image: backpack,
  },
  {
    id: 5,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: "129.99",
    oldPrice: "159.99",
    discount: 19,
    rating: 4.8,
    reviews: 124,
    image: headphones,
  },
  {
    id: 6,
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: "89.99",
    oldPrice: "119.99",
    discount: 25,
    rating: 4.9,
    reviews: 98,
    image: smartwatch,
  },
  {
    id: 7,
    name: "Air Max Running Shoes",
    category: "Footwear",
    price: "79.99",
    oldPrice: "99.99",
    discount: 20,
    rating: 4.7,
    reviews: 86,
    image: sneakers,
  },
  {
    id: 8,
    name: "Urban Travel Backpack",
    category: "Accessories",
    price: "59.99",
    oldPrice: "74.99",
    discount: 20,
    rating: 4.8,
    reviews: 73,
    image: backpack,
  },
];

const ProductGrid = () => {
  return (
    <div>

      {/* ================= TOP BAR ================= */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Product Count */}

        <div>

          <h2 className="text-lg font-semibold text-white">
            All Products
          </h2>

          <p className="mt-1 text-xs text-gray-600">
            Showing {products.length} products
          </p>

        </div>


        {/* Controls */}

        <div className="flex items-center gap-3">

          {/* Mobile Filter */}

          <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/2 px-4 py-2.5 text-sm text-gray-400 transition hover:border-blue-500/30 hover:text-white lg:hidden">

            <SlidersHorizontal size={15} />

            Filter

          </button>


          {/* Sort */}

          <button className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0a1020] px-4 py-2.5 text-sm text-gray-400 transition hover:border-blue-500/30 hover:text-white">

            <span className="hidden sm:inline">
              Sort by:
            </span>

            <span className="text-gray-300">
              Featured
            </span>

            <ChevronDown size={15} />

          </button>

        </div>

      </div>


      {/* ================= PRODUCTS ================= */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>


      {/* ================= PAGINATION ================= */}

      <div className="mt-12 flex items-center justify-center gap-2">

        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-600 text-sm font-semibold text-white">
          1
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2 text-sm text-gray-500 transition hover:border-blue-500/30 hover:text-white">
          2
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2 text-sm text-gray-500 transition hover:border-blue-500/30 hover:text-white">
          3
        </button>

        <span className="px-1 text-gray-700">
          ...
        </span>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2 text-sm text-gray-500 transition hover:border-blue-500/30 hover:text-white">
          8
        </button>

      </div>

    </div>
  );
};

export default ProductGrid;