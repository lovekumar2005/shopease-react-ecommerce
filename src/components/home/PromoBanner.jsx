import { ArrowRight, Clock3, Sparkles } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#030712] px-6 py-20">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute left-1/2 top-1/2 h-125 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[140px]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.7) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================= BANNER ================= */}

      <div className="relative mx-auto max-w-350">

        <div className="relative min-h-107.5 overflow-hidden rounded-3xl border border-blue-500/20 bg-linear-to-br from-[#0a1428] via-[#08101f] to-[#050a14] shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

          {/* Blue glow */}

          <div className="absolute -right-20 top-1/2 h-112.5 w-112.5 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="absolute -bottom-32 left-[35%] h-75 w-75 rounded-full bg-cyan-500/10 blur-[100px]" />


          {/* ================= CONTENT ================= */}

          <div className="relative z-10 flex min-h-107.5 items-center px-8 py-12 md:px-14 lg:px-20">

            <div className="max-w-xl">

              {/* Label */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">

                <Sparkles
                  size={15}
                  className="text-blue-400"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Special Offer
                </span>

              </div>


              {/* Heading */}

              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">

                Upgrade Your
                <span className="block bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Everyday.
                </span>

              </h2>


              {/* Description */}

              <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 md:text-lg">
                Discover premium products at incredible prices.
                Get up to <span className="font-semibold text-white">40% off </span>
                selected products for a limited time.
              </p>


              {/* ================= BUTTON ================= */}

              <button className="group mt-8 flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_40px_rgba(37,99,235,0.35)]">

                Shop the Sale

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>


              {/* ================= COUNTDOWN ================= */}

              <div className="mt-9 flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/3">
                  <Clock3
                    size={18}
                    className="text-blue-400"
                  />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Offer ends in
                  </p>

                  <p className="mt-1 font-mono text-sm font-semibold text-gray-300">
                    02 : 14 : 36 : 21
                  </p>

                </div>

              </div>

            </div>


            {/* ================= RIGHT SIDE ================= */}

            <div className="absolute -right-7.5 top-1/2 hidden h-95 w-95 -translate-y-1/2 items-center justify-center md:flex lg:right-[7%]">

              {/* Circle */}

              <div className="absolute h-82.5 w-82.5 rounded-full border border-blue-500/20 bg-blue-500/3 shadow-[0_0_80px_rgba(37,99,235,0.15)]" />

              <div className="absolute h-62.5 w-62.5 rounded-full border border-blue-500/10" />


              {/* Discount */}

              <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full border border-blue-400/30 bg-[#0a1428]/90 shadow-[0_0_60px_rgba(37,99,235,0.2)] backdrop-blur-xl">

                <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                  Up To
                </span>

                <span className="mt-1 text-5xl font-extrabold text-white">
                  40%
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                  OFF
                </span>

              </div>


              {/* Floating badge */}

              <div className="absolute right-2 top-5 rounded-xl border border-blue-500/20 bg-[#0b1426]/90 px-4 py-3 shadow-xl backdrop-blur-xl">

                <p className="text-xs text-gray-500">
                  Limited
                </p>

                <p className="font-semibold text-white">
                  Time Deal
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PromoBanner;