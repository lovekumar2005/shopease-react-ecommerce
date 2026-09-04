import React from "react";
import { Link } from "react-router-dom";
import {ArrowLeft, Minus, Plus, Trash2, ShoppingBag,} from "lucide-react";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart,} = useCart();


  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#030712] px-6 py-24 text-white">

        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10 text-blue-500">
            <ShoppingBag size={36} />
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/products"
            className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Start Shopping
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="min-h-screen bg-[#030712] px-6 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================= */}

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
              Your Cart
            </h1>

            <p className="mt-2 text-gray-500">
              Review your items before checkout.
            </p>

          </div>


          <button
            onClick={clearCart}
            className="text-sm text-red-400 transition hover:text-red-300"
          >
            Clear Cart
          </button>

        </div>


        {/* =========================
            CART
        ========================= */}

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* =========================
              CART ITEMS
          ========================= */}

          <div className="space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex gap-5 rounded-2xl border border-white/[0.07] bg-[#0a1020] p-5"
              >

                {/* IMAGE */}

                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-[#060b16]">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 object-contain"
                  />

                </div>


                {/* INFO */}

                <div className="flex flex-1 flex-col justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-wider text-blue-400">
                      {item.category}
                    </p>

                    <h2 className="mt-1 font-semibold text-white">
                      {item.name}
                    </h2>

                    <p className="mt-2 font-bold">
                      ${Number(item.price).toFixed(2)}
                    </p>

                  </div>


                  {/* CONTROLS */}

                  <div className="mt-4 flex items-center justify-between">

                    {/* QUANTITY */}

                    <div className="flex items-center rounded-lg border border-white/10">

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        disabled={item.quantity === 1}
                        className="flex h-9 w-9 items-center justify-center text-gray-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        <Minus size={15} />
                      </button>


                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>


                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center text-gray-400 transition hover:text-white"
                      >
                        <Plus size={15} />
                      </button>

                    </div>


                    {/* REMOVE */}

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-400"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* =========================
              ORDER SUMMARY
          ========================= */}

          <div className="h-fit rounded-2xl border border-white/[0.07] bg-[#0a1020] p-6">

            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>


            <div className="my-6 border-t border-white/[0.07]" />


            {/* SUBTOTAL */}

            <div className="flex justify-between text-sm text-gray-400">

              <span>
                Subtotal
              </span>

              <span>
                ${Number(cartTotal).toFixed(2)}
              </span>

            </div>


            {/* SHIPPING */}

            <div className="mt-4 flex justify-between text-sm text-gray-400">

              <span>
                Shipping
              </span>

              <span className="text-green-400">
                Free
              </span>

            </div>


            <div className="my-6 border-t border-white/[0.07]" />


            {/* TOTAL */}

            <div className="flex justify-between">

              <span className="font-semibold">
                Total
              </span>

              <span className="text-2xl font-bold text-blue-400">
                ${Number(cartTotal).toFixed(2)}
              </span>

            </div>


            {/* CHECKOUT */}

            <Link
              to="/checkout"
              className="mt-7 block w-full rounded-xl bg-blue-600 py-3.5 text-center font-semibold transition hover:bg-blue-500"
            >
              Proceed to Checkout
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Cart;