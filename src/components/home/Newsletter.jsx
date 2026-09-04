import { ArrowRight, Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden bg-[#030712] px-6 py-20">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-100 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/6 blur-[140px]" />

      <div className="relative mx-auto max-w-300">

        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-linear-to-br from-[#0b162b] via-[#081120] to-[#050a14] px-8 py-14 md:px-16">

          {/* Decorative Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[80px]" />

          <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-cyan-500/6 blur-[70px]" />


          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">

            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/6 px-4 py-2">

              <Mail
                size={14}
                className="text-blue-400"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Stay Updated
              </span>

            </div>


            {/* Heading */}
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">

              Get the Latest{" "}

              <span className="bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Deals & Updates
              </span>

            </h2>


            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
              Subscribe to our newsletter and be the first to know about
              new products, exclusive offers, and special discounts.
            </p>


            {/* Email Form */}
            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">

              <div className="relative flex-1">

                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/3"
                />

              </div>


              <button
                type="submit"
                className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(37,99,235,0.2)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
              >

                Subscribe

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </form>


            {/* Small Text */}
            <p className="mt-4 text-xs text-gray-700">
              No spam. Unsubscribe anytime.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;