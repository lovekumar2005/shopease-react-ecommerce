import ProductCard from "../products/ProductCard";

// Product Images
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
];


const FeaturedProducts = () => {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24">

      {/* ================= BACKGROUND ================= */}

      {/* Blue Glow */}

      <div className="absolute left-1/2 top-1/2 h-125 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/6 blur-[140px]" />


      {/* Subtle Grid */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />


      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-350 px-8">

        {/* ================= SECTION HEADER ================= */}

        <div className="mx-auto mb-14 max-w-2xl text-center">

          {/* Label */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2">

            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Featured
            </span>

          </div>


          {/* Heading */}

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Featured Products
          </h2>


          {/* Description */}

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-500">
            Discover our handpicked selection of premium products,
            carefully chosen to bring quality and style to your everyday life.
          </p>

        </div>


        {/* ================= PRODUCTS ================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>


        {/* ================= VIEW ALL ================= */}

        <div className="mt-12 flex justify-center">

          <button className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/2 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/5">

            View All Products

            <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </button>

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;