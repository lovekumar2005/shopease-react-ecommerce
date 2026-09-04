import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserPlus,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");


  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };


  // =========================
  // SIGNUP
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault();


    // Password length

    if (formData.password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );

      return;
    }


    // Confirm password

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match.");

      return;
    }


    // Check existing account

    const existingUser =
      localStorage.getItem("shopEaseUser");


    if (existingUser) {

      try {

        const user = JSON.parse(existingUser);

        if (
          user.email.toLowerCase() ===
          formData.email.toLowerCase()
        ) {
          setError(
            "An account with this email already exists."
          );

          return;
        }

      } catch (error) {
        // Ignore invalid old data
      }
    }


    // =========================
    // CREATE USER
    // =========================

    const user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,

      // Extra account information
      phone: "",
      city: "",

      // Useful later
      createdAt: new Date().toISOString(),
    };


    // Login immediately after signup

    login(user);


    // Go home

    navigate("/");
  };


  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030712] px-6 py-16">

      <div className="w-full max-w-md">

        {/* =========================
            LOGO
        ========================= */}

        <div className="mb-8 text-center">

          <Link
            to="/"
            className="inline-flex items-center gap-3"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
              <span className="text-2xl">
                🛍️
              </span>
            </div>

            <h1 className="text-2xl font-bold text-white">
              Shop
              <span className="text-blue-500">
                Ease
              </span>
            </h1>

          </Link>


          <h2 className="mt-8 text-3xl font-bold text-white">
            Create an Account
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Join ShopEase and start shopping smarter.
          </p>

        </div>


        {/* =========================
            SIGNUP CARD
        ========================= */}

        <div className="rounded-2xl border border-white/[0.07] bg-[#0a1020] p-6 sm:p-8">

          {/* ERROR */}

          {error && (
            <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}


          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* =========================
                NAME
            ========================= */}

            <div className="grid gap-4 sm:grid-cols-2">

              {/* FIRST NAME */}

              <div>

                <label className="mb-2 block text-sm text-gray-400">
                  First Name
                </label>

                <div className="relative">

                  <User
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                    className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60"
                  />

                </div>

              </div>


              {/* LAST NAME */}

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
                  placeholder="Doe"
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60"
                />

              </div>

            </div>


            {/* =========================
                EMAIL
            ========================= */}

            <div>

              <label className="mb-2 block text-sm text-gray-400">
                Email
              </label>

              <div className="relative">

                <Mail
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60"
                />

              </div>

            </div>


            {/* =========================
                PASSWORD
            ========================= */}

            <div>

              <label className="mb-2 block text-sm text-gray-400">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] pl-11 pr-12 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60"
                />


                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 transition hover:text-gray-300"
                >

                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}

                </button>

              </div>

            </div>


            {/* =========================
                CONFIRM PASSWORD
            ========================= */}

            <div>

              <label className="mb-2 block text-sm text-gray-400">
                Confirm Password
              </label>

              <div className="relative">

                <Lock
                  size={17}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] pl-11 pr-12 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60"
                />


                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 transition hover:text-gray-300"
                >

                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}

                </button>

              </div>

            </div>


            {/* =========================
                CREATE ACCOUNT
            ========================= */}

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >

              <UserPlus size={18} />

              Create Account

            </button>

          </form>


          {/* =========================
              LOGIN
          ========================= */}

          <div className="mt-7 border-t border-white/[0.07] pt-6 text-center">

            <p className="text-sm text-gray-500">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="mt-2 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Login to your account
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Signup;