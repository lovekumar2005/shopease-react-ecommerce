import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Heart,
  ShoppingBag,
  LogOut,
  ChevronRight,
  Package,
  Settings,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Account = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();


  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    logout();

    navigate("/");
  };


  return (
    <main className="min-h-screen bg-[#030712] px-6 py-20">

      <div className="mx-auto max-w-6xl">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Home → Account
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            My Account
          </h1>

          <p className="mt-3 text-gray-500">
            Manage your profile, orders and shopping preferences.
          </p>

        </div>


        {/* =========================
            PROFILE
        ========================= */}

        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">

          {/* =========================
              PROFILE CARD
          ========================= */}

          <div className="rounded-2xl border border-white/[0.07] bg-[#0a1020] p-6">

            {/* Avatar */}

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/20">

                {user?.firstName?.charAt(0)?.toUpperCase()}

              </div>


              <div>

                <h2 className="text-xl font-semibold text-white">

                  {user?.firstName} {user?.lastName}

                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  ShopEase Customer
                </p>

              </div>

            </div>


            {/* Divider */}

            <div className="my-6 h-px bg-white/[0.07]" />


            {/* Email */}

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">

                <Mail
                  size={16}
                  className="text-blue-400"
                />

              </div>

              <div>

                <p className="text-xs text-gray-600">
                  Email
                </p>

                <p className="text-sm text-gray-300">
                  {user?.email}
                </p>

              </div>

            </div>


            {/* Phone */}

            <div className="mt-5 flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">

                <Phone
                  size={16}
                  className="text-blue-400"
                />

              </div>

              <div>

                <p className="text-xs text-gray-600">
                  Phone
                </p>

                <p className="text-sm text-gray-300">
                  {user?.phone || "Not added"}
                </p>

              </div>

            </div>


            {/* City */}

            <div className="mt-5 flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">

                <MapPin
                  size={16}
                  className="text-blue-400"
                />

              </div>

              <div>

                <p className="text-xs text-gray-600">
                  Location
                </p>

                <p className="text-sm text-gray-300">
                  {user?.city || "Not added"}
                </p>

              </div>

            </div>


            {/* Logout */}

            <button
              onClick={handleLogout}
              className="mt-7 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 text-sm font-medium text-red-400 transition hover:border-red-500/40 hover:bg-red-500/15 hover:text-red-300"
            >

              <LogOut size={17} />

              Logout

            </button>

          </div>


          {/* =========================
              ACCOUNT OPTIONS
          ========================= */}

          <div className="space-y-4">

            {/* ORDERS */}

            <Link
              to="/orders"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-[#0a1020] p-5 transition hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#0c1324]"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">

                  <Package size={21} />

                </div>


                <div>

                  <h3 className="font-semibold text-white">
                    My Orders
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Track and manage your orders
                  </p>

                </div>

              </div>


              <ChevronRight
                size={19}
                className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-blue-400"
              />

            </Link>


            {/* WISHLIST */}

            <Link
              to="/wishlist"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-[#0a1020] p-5 transition hover:-translate-y-1 hover:border-red-500/30 hover:bg-[#0c1324]"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition group-hover:bg-red-500/20">

                  <Heart size={21} />

                </div>


                <div>

                  <h3 className="font-semibold text-white">
                    Wishlist
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    View products you saved
                  </p>

                </div>

              </div>


              <ChevronRight
                size={19}
                className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-red-400"
              />

            </Link>


            {/* SHOPPING */}

            <Link
              to="/products"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-[#0a1020] p-5 transition hover:-translate-y-1 hover:border-green-500/30 hover:bg-[#0c1324]"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition group-hover:bg-green-500/20">

                  <ShoppingBag size={21} />

                </div>


                <div>

                  <h3 className="font-semibold text-white">
                    Continue Shopping
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Explore our latest products
                  </p>

                </div>

              </div>


              <ChevronRight
                size={19}
                className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-green-400"
              />

            </Link>


            {/* SETTINGS */}

            <button
              className="group flex w-full items-center justify-between rounded-2xl border border-white/[0.07] bg-[#0a1020] p-5 text-left transition hover:-translate-y-1 hover:border-purple-500/30 hover:bg-[#0c1324]"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-500/20">

                  <Settings size={21} />

                </div>


                <div>

                  <h3 className="font-semibold text-white">
                    Account Settings
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Manage your account preferences
                  </p>

                </div>

              </div>


              <ChevronRight
                size={19}
                className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-purple-400"
              />

            </button>

          </div>

        </div>


        {/* =========================
            ACCOUNT INFO
        ========================= */}

        <div className="mt-6 rounded-2xl border border-white/[0.07] bg-[#0a1020] p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">

              <User
                size={18}
                className="text-blue-400"
              />

            </div>

            <div>

              <h2 className="font-semibold text-white">
                Account Information
              </h2>

              <p className="mt-1 text-xs text-gray-600">
                Your ShopEase account details
              </p>

            </div>

          </div>


          <div className="mt-6 grid gap-5 sm:grid-cols-2">

            {/* FIRST NAME */}

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-600">
                First Name
              </p>

              <p className="mt-2 text-sm text-gray-300">
                {user?.firstName || "Not available"}
              </p>

            </div>


            {/* LAST NAME */}

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-600">
                Last Name
              </p>

              <p className="mt-2 text-sm text-gray-300">
                {user?.lastName || "Not available"}
              </p>

            </div>


            {/* EMAIL */}

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-600">
                Email Address
              </p>

              <p className="mt-2 text-sm text-gray-300">
                {user?.email || "Not available"}
              </p>

            </div>


            {/* PHONE */}

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-600">
                Phone Number
              </p>

              <p className="mt-2 text-sm text-gray-300">
                {user?.phone || "Not added yet"}
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Account;