import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-[#02050c]">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute left-1/2 top-0 h-75 w-175 -translate-x-1/2 rounded-full bg-blue-600/4 blur-[120px]" />


      {/* ================= MAIN FOOTER ================= */}

      <div className="relative mx-auto max-w-350 px-6">

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">


          {/* ================================================= */}
          {/* BRAND */}
          {/* ================================================= */}

          <div className="lg:col-span-2">

            {/* Logo */}

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.25)]">

                <span className="text-lg font-bold text-white">
                  S
                </span>

              </div>

              <span className="text-xl font-bold tracking-tight text-white">

                Shop
                <span className="text-blue-500">
                  Ease
                </span>

              </span>

            </div>


            {/* Description */}

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-500">

              Discover premium products, exceptional quality,
              and an effortless shopping experience — all in
              one place.

            </p>


            {/* ================= CONTACT ================= */}

            <div className="mt-7 space-y-3">

              {/* Email */}

              <div className="flex items-center gap-3 text-sm text-gray-500">

                <Mail
                  size={16}
                  className="text-blue-500"
                />

                support@shopease.com

              </div>


              {/* Phone */}

              <div className="flex items-center gap-3 text-sm text-gray-500">

                <Phone
                  size={16}
                  className="text-blue-500"
                />

                +1 (800) 123-4567

              </div>


              {/* Location */}

              <div className="flex items-center gap-3 text-sm text-gray-500">

                <MapPin
                  size={16}
                  className="text-blue-500"
                />

                New York, United States

              </div>

            </div>


            {/* ================= SOCIAL ICONS ================= */}

            <div className="mt-7 flex items-center gap-3">

              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2 text-gray-500 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              >

                <FaFacebookF size={14} />

              </a>


              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2 text-gray-500 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              >

                <FaInstagram size={15} />

              </a>


              {/* X */}

              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2 text-gray-500 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              >

                <FaXTwitter size={14} />

              </a>


              {/* Github */}

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2 text-gray-500 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
              >

                <FaGithub size={15} />

              </a>

            </div>

          </div>


          {/* ================================================= */}
          {/* QUICK LINKS */}
          {/* ================================================= */}

          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>


            <ul className="space-y-4">

              {[
                "Home",
                "Products",
                "Categories",
                "About Us",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="group flex items-center gap-1 text-sm text-gray-500 transition-colors duration-300 hover:text-blue-400"
                  >

                    {item}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />

                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* ================================================= */}
          {/* CUSTOMER SERVICE */}
          {/* ================================================= */}

          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Customer Service
            </h3>


            <ul className="space-y-4">

              {[
                "My Account",
                "Orders",
                "Wishlist",
                "Shipping & Delivery",
                "Returns & Refunds",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="group flex items-center gap-1 text-sm text-gray-500 transition-colors duration-300 hover:text-blue-400"
                  >

                    {item}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />

                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* ================================================= */}
          {/* CATEGORIES */}
          {/* ================================================= */}

          <div>

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Categories
            </h3>


            <ul className="space-y-4">

              {[
                "Electronics",
                "Fashion",
                "Shoes",
                "Watches",
                "Accessories",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="group flex items-center gap-1 text-sm text-gray-500 transition-colors duration-300 hover:text-blue-400"
                  >

                    {item}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />

                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>


        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <div className="h-px bg-white/6" />


        {/* ================================================= */}
        {/* BOTTOM FOOTER */}
        {/* ================================================= */}

        <div className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}

          <p className="text-xs text-gray-600">

            © 2026 ShopEase.
            All rights reserved.

          </p>


          {/* Legal Links */}

          <div className="flex flex-wrap items-center gap-6">

            <a
              href="#"
              className="text-xs text-gray-600 transition-colors hover:text-gray-300"
            >
              Privacy Policy
            </a>


            <a
              href="#"
              className="text-xs text-gray-600 transition-colors hover:text-gray-300"
            >
              Terms & Conditions
            </a>


            <a
              href="#"
              className="text-xs text-gray-600 transition-colors hover:text-gray-300"
            >
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;