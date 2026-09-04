import React from "react";
import { ArrowUpRight, Headphones, Shirt, Footprints, Watch, Backpack } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electronics",
    description: "Smart devices and modern technology",
    icon: Headphones,
    products: 4,
  },
  {
    name: "Fashion",
    description: "Modern styles for everyday life",
    icon: Shirt,
    products: 4,
  },
  {
    name: "Shoes",
    description: "Comfortable footwear for every occasion",
    icon: Footprints,
    products: 4,
  },
  {
    name: "Watches",
    description: "Classic and modern timepieces",
    icon: Watch,
    products: 3,
  },
  {
    name: "Accessories",
    description: "Complete your everyday style",
    icon: Backpack,
    products: 3,
  },
];

const Categories = () => {
  return (
    <main className="min-h-screen bg-[#060b16] px-6 py-16 text-white">

      {/* ================= HEADER ================= */}

      <div className="mx-auto max-w-3xl text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          Shop by Category
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Explore Our Categories
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
          Discover carefully selected products across our most popular
          categories. Find what you need and shop with ease.
        </p>

      </div>


      {/* ================= CATEGORIES ================= */}

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {categories.map((category) => {

          const Icon = category.icon;

          return (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a1020] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >

              {/* Background Glow */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-600/5 blur-3xl transition-all duration-500 group-hover:bg-blue-600/15" />


              {/* Icon */}

              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                <Icon size={27} />

              </div>


              {/* Content */}

              <div className="relative mt-6">

                <h2 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {category.name}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {category.description}
                </p>

                <p className="mt-4 text-sm text-gray-400">
                  {category.products} Products
                </p>

              </div>


              {/* View Button */}

              <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-blue-500">

                Explore Category

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </div>

            </Link>
          );
        })}

      </div>

    </main>
  );
};

export default Categories;