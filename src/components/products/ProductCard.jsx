import { Heart, ShoppingCart, Star, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a1020] transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

      {/* ================= PRODUCT IMAGE ================= */}

      <div className="relative flex h-67.5 items-center justify-center overflow-hidden bg-linear-to-br from-[#0d172b] to-[#060b16]">

        {/* Background Glow */}

        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[70px] transition-all duration-500 group-hover:bg-blue-500/20" />

        {/* Discount Badge */}

        {product.discount && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-[0_5px_20px_rgba(37,99,235,0.3)]">
            -{product.discount}%
          </div>
        )}

        {/* Favorite */}

        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
            isInWishlist(product.id)
              ? "border-red-500/30 bg-red-500/10 text-red-400"
              : "border-white/10 bg-black/30 text-gray-400 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
          }`}
          aria-label="Add to wishlist"
        >
          <Heart
            size={17}
            className={isInWishlist(product.id) ? "fill-current" : ""}
          />
        </button>

        {/* Product Image */}

        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 h-52.5 w-[85%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
        />

        {/* Quick View */}

        <button
          onClick={() => navigate(`/products/${product.id}`)}
          className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 translate-y-16 items-center gap-2 rounded-lg border border-white/10 bg-[#0b1120]/90 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:border-blue-500/40 hover:text-blue-400"
        >
          Quick View
          <ArrowUpRight size={15} />
        </button>

      </div>


      {/* ================= PRODUCT INFO ================= */}

      <div className="p-5">

        {/* Category */}

        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-blue-400">
          {product.category}
        </p>


        {/* Product Name */}

        <h3 className="line-clamp-1 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
          {product.name}
        </h3>


        {/* Rating */}

        <div className="mt-2 flex items-center gap-2">

          <div className="flex items-center gap-1">

            <Star
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-sm font-medium text-gray-300">
              {product.rating}
            </span>

          </div>

          <span className="text-xs text-gray-600">
            ({product.reviews} reviews)
          </span>

        </div>


        {/* ================= PRICE + CART ================= */}

        <div className="mt-5 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span className="text-xl font-bold text-white">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-sm text-gray-600 line-through">
                ${product.oldPrice}
              </span>
            )}

          </div>


          {/* Cart */}

          <button
            onClick={() => addToCart(product)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-[0_5px_20px_rgba(37,99,235,0.2)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_8px_25px_rgba(37,99,235,0.35)]"
            aria-label="Add to cart"
          >
            <ShoppingCart size={17} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;