import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  // Find the product whose id matches the URL
  const product = products.find(
    (product) => product.id === Number(id)
  );

  // If product doesn't exist
  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Product Not Found</h1>

        <Link
          to="/products"
          className="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-500"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060b16] px-6 py-12 text-white">
      
      {/* Back Button */}
      <Link
        to="/products"
        className="mb-8 inline-flex items-center gap-2 text-gray-400 transition hover:text-blue-400"
      >
        <ArrowLeft size={18} />
        Back to Products
      </Link>

      {/* Product Details */}
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

        {/* ================= IMAGE ================= */}
        <div className="flex min-h-125 items-center justify-center rounded-2xl border border-white/[0.07] bg-[#0a1020]">

          <img
            src={product.image}
            alt={product.name}
            className="h-105 w-[90%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          />

        </div>

        {/* ================= INFO ================= */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-400">
            {product.category}
          </p>

          {/* Name */}
          <h1 className="text-4xl font-bold leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-3">

            <div className="flex items-center gap-1">
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="font-medium">
                {product.rating}
              </span>
            </div>

            <span className="text-gray-500">
              ({product.reviews} reviews)
            </span>

          </div>

          {/* Price */}
          <div className="mt-7 flex items-center gap-3">

            <span className="text-4xl font-bold">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.oldPrice}
              </span>
            )}

            {product.discount && (
              <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm font-semibold text-blue-400">
                -{product.discount}%
              </span>
            )}

          </div>

          {/* Description */}
          <p className="mt-7 max-w-xl leading-7 text-gray-400">
            {product.description}
          </p>

          {/* Stock */}
          <div className="mt-6">
            {product.stock > 0 ? (
              <p className="text-sm text-green-400">
                ✓ In Stock ({product.stock} available)
              </p>
            ) : (
              <p className="text-sm text-red-400">
                Out of Stock
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            <button
              disabled={product.stock === 0}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ShoppingCart size={19} />
              Add to Cart
            </button>

            <button
              disabled={product.stock === 0}
              className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-blue-500/40 hover:text-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;