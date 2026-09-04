import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LogIn,
  Eye,
  EyeOff,
  Lock,
  Mail,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
  // LOGIN
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("shopEaseUser");

    // No account
    if (!savedUser) {
      setError(
        "No account found. Please create an account first."
      );
      return;
    }

    let user;

    try {
      user = JSON.parse(savedUser);
    } catch (error) {
      setError("Something went wrong. Please create your account again.");
      return;
    }


    // Check credentials

    if (
      user.email !== formData.email ||
      user.password !== formData.password
    ) {
      setError("Invalid email or password.");
      return;
    }


    // Login through AuthContext

    login(user);


    // If user was redirected to login
    // from a protected page, go back there.

    const redirectPath =
      location.state?.from?.pathname || "/";

    navigate(redirectPath, {
      replace: true,
    });
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
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Login to continue shopping with ShopEase.
          </p>

        </div>


        {/* =========================
            LOGIN CARD
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
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#030712] pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                />

              </div>

            </div>


            {/* =========================
                PASSWORD
            ========================= */}

            <div>

              <div className="mb-2 flex items-center justify-between">

                <label className="text-sm text-gray-400">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs text-blue-400 transition hover:text-blue-300"
                >
                  Forgot Password?
                </button>

              </div>


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
                  className="h-12 w-full rounded-xl border border-white/10 bg-[#030712] pl-11 pr-12 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
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
                REMEMBER ME
            ========================= */}

            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-500">

              <input
                type="checkbox"
                className="accent-blue-600"
              />

              Remember me

            </label>


            {/* =========================
                LOGIN BUTTON
            ========================= */}

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >

              <LogIn size={18} />

              Login

            </button>

          </form>


          {/* =========================
              SIGNUP
          ========================= */}

          <div className="mt-7 border-t border-white/[0.07] pt-6 text-center">

            <p className="text-sm text-gray-500">
              Don't have an account?
            </p>

            <Link
              to="/signup"
              className="mt-2 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Create an account
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Login;