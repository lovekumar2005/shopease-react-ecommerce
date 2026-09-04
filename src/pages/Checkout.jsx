import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  MapPin,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Checkout = () => {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    clearCart,
  } = useCart();

  const { user } = useAuth();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "cash",
  });


  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // =========================
  // PLACE ORDER
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real application,
    // order would be sent to backend here.

    setOrderPlaced(true);

    clearCart();
  };


  // =========================
  // EMPTY CART
  // =========================

  if (cart.length === 0 && !orderPlaced) {
    return (
      <main className="min-h-screen bg-[#030712] px-6 py-24 text-white">

        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10 text-blue-500">
            <ShoppingBag size={36} />
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Add some products before proceeding to checkout.
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


  // =========================
  // ORDER SUCCESS
  // =========================

  if (orderPlaced) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#030712] px-6 py-20 text-white">

        <div className="w-full max-w-lg rounded-2xl border border-white/[0.07] bg-[#0a1020] p-8 text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-400">

            <CheckCircle size={42} />

          </div>


          <h1 className="mt-6 text-3xl font-bold">
            Order Placed Successfully!
          </h1>


          <p className="mt-3 text-gray-500">
            Thank you for shopping with ShopEase.
            Your order has been received.
          </p>


          <button
            onClick={() => navigate("/products")}
            className="mt-7 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Continue Shopping
          </button>

        </div>

      </main>
    );
  }


  return (
    <main className="min-h-screen bg-[#030712] px-6 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        {/* =========================
            BACK
        ========================= */}

        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-blue-400"
        >
          <ArrowLeft size={16} />
          Back to Cart
        </Link>


        {/* =========================
            HEADER
        ========================= */}

        <div className="mt-8">

          <h1 className="text-4xl font-bold">
            Checkout
          </h1>

          <p className="mt-2 text-gray-500">
            Complete your order by providing your details.
          </p>

        </div>


        {/* =========================
            CHECKOUT GRID
        ========================= */}

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* =========================
              FORM
          ========================= */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* =========================
                CONTACT INFORMATION
            ========================= */}

            <div className="rounded-2xl border border-white/[0.07] bg-[#0a1020] p-6">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <MapPin size={18} />
                </div>

                <div>

                  <h2 className="font-semibold">
                    Delivery Information
                  </h2>

                  <p className="mt-1 text-xs text-gray-600">
                    Where should we deliver your order?
                  </p>

                </div>

              </div>


              {/* NAME */}

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm text-gray-400">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-white outline-none transition focus:border-blue-500/60"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm text-gray-400">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-white outline-none transition focus:border-blue-500/60"
                  />

                </div>

              </div>


              {/* EMAIL + PHONE */}

              <div className="mt-4 grid gap-4 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm text-gray-400">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-white outline-none transition focus:border-blue-500/60"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm text-gray-400">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92 300 1234567"
                    className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60"
                  />

                </div>

              </div>


              {/* ADDRESS */}

              <div className="mt-4">

                <label className="mb-2 block text-sm text-gray-400">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="House number, street, area"
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60"
                />

              </div>


              {/* CITY + POSTAL */}

              <div className="mt-4 grid gap-4 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm text-gray-400">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Lahore"
                    className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm text-gray-400">
                    Postal Code
                  </label>

                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    placeholder="54000"
                    className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60"
                  />

                </div>

              </div>

            </div>


            {/* =========================
                PAYMENT
            ========================= */}

            <div className="rounded-2xl border border-white/[0.07] bg-[#0a1020] p-6">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                  <CreditCard size={18} />
                </div>

                <div>

                  <h2 className="font-semibold">
                    Payment Method
                  </h2>

                  <p className="mt-1 text-xs text-gray-600">
                    Choose how you want to pay.
                  </p>

                </div>

              </div>


              <div className="mt-6 space-y-3">

                {/* CASH */}

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#030712] p-4 transition hover:border-blue-500/40">

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={
                      formData.paymentMethod === "cash"
                    }
                    onChange={handleChange}
                    className="accent-blue-600"
                  />

                  <div>

                    <p className="font-medium text-white">
                      Cash on Delivery
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Pay when your order arrives.
                    </p>

                  </div>

                </label>


                {/* CARD */}

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#030712] p-4 transition hover:border-blue-500/40">

                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={
                      formData.paymentMethod === "card"
                    }
                    onChange={handleChange}
                    className="accent-blue-600"
                  />

                  <div>

                    <p className="font-medium text-white">
                      Credit / Debit Card
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Card payment integration coming soon.
                    </p>

                  </div>

                </label>

              </div>

            </div>


            {/* =========================
                PLACE ORDER
            ========================= */}

            <button
              type="submit"
              className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              <ShoppingBag size={18} />
              Place Order
            </button>

          </form>


          {/* =========================
              ORDER SUMMARY
          ========================= */}

          <div className="h-fit rounded-2xl border border-white/[0.07] bg-[#0a1020] p-6 lg:sticky lg:top-28">

            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>


            <div className="mt-6 space-y-4">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center gap-3"
                >

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#060b16]">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-11 w-11 object-contain"
                    />

                  </div>


                  <div className="min-w-0 flex-1">

                    <p className="truncate text-sm font-medium text-white">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Qty: {item.quantity}
                    </p>

                  </div>


                  <p className="text-sm font-semibold">
                    $
                    {(
                      Number(item.price) *
                      item.quantity
                    ).toFixed(2)}
                  </p>

                </div>

              ))}

            </div>


            <div className="my-6 border-t border-white/[0.07]" />


            <div className="flex justify-between text-sm text-gray-400">

              <span>
                Subtotal
              </span>

              <span>
                ${Number(cartTotal).toFixed(2)}
              </span>

            </div>


            <div className="mt-4 flex justify-between text-sm text-gray-400">

              <span>
                Shipping
              </span>

              <span className="text-green-400">
                Free
              </span>

            </div>


            <div className="my-6 border-t border-white/[0.07]" />


            <div className="flex items-center justify-between">

              <span className="font-semibold">
                Total
              </span>

              <span className="text-2xl font-bold text-blue-400">
                ${Number(cartTotal).toFixed(2)}
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Checkout;