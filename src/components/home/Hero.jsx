import heroProduct from "../../assets/hero-product.png";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#030712]">

      {/* ================= BACKGROUND ================= */}

      {/* Main blue glow */}
      <div className="absolute right-[12%] top-1/2 h-150 w-150 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[150px]" />

      {/* Cyan glow */}
      <div className="absolute right-[0%] top-[5%] h-87.5 w-87.5 rounded-full bg-cyan-500/10 blur-[130px]" />

      {/* Small left glow */}
      <div className="absolute left-37.5 bottom-37.5 h-100 w-100 rounded-full bg-blue-600/10 blur-[130px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-350 items-center px-8">

        {/* ================= LEFT CONTENT ================= */}

        <div className="relative z-20 w-[52%]">

          {/* New Collection */}

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/6 px-5 py-2.5 shadow-[0_0_30px_rgba(37,99,235,0.12)] backdrop-blur-sm">

            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />

            <span className="text-sm font-medium tracking-[0.18em] text-blue-400">
              NEW COLLECTION
            </span>

          </div>


          {/* ================= HEADING ================= */}

          <h1 className="text-6xl font-extrabold leading-[1.03] tracking-[-0.03em] text-white xl:text-7xl">

            Discover Products

            <span className="mt-2 block bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              You'll Love.
            </span>

          </h1>


          {/* Heading underline glow */}

          <div className="mt-5 h-0.5 w-24 rounded-full bg-linear-to-r from-blue-500 to-transparent opacity-80" />


          {/* ================= DESCRIPTION ================= */}

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Explore our latest collection of premium quality products
            designed to make your life easier and better.
          </p>


          {/* ================= BUTTONS ================= */}

          <div className="mt-9 flex items-center gap-4">

            {/* Shop Now */}

            <button className="group relative flex items-center gap-4 overflow-hidden rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_15px_45px_rgba(37,99,235,0.4)]">

              {/* Shine */}

              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">
                Shop Now
              </span>

              <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </button>


            {/* Explore */}

            <button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/2 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-500/6">

              <span>
                Explore Categories
              </span>

              <span className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </button>

          </div>


          {/* ================= FEATURES ================= */}

          <div className="mt-14 flex items-center gap-4">

            {/* Free Shipping */}

            <div className="group flex items-center gap-3 rounded-xl border border-white/6 bg-white/2 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/[0.07] transition group-hover:border-blue-500/50">

                <span className="text-xl text-blue-500">
                  ♧
                </span>

              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Free Shipping
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  On orders over $50
                </p>
              </div>

            </div>


            {/* Secure Payment */}

            <div className="group flex items-center gap-3 rounded-xl border border-white/6 bg-white/2 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/[0.07] transition group-hover:border-blue-500/50">

                <span className="text-xl text-blue-500">
                  ♢
                </span>

              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Secure Payment
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  100% protected
                </p>
              </div>

            </div>


            {/* Support */}

            <div className="group flex items-center gap-3 rounded-xl border border-white/6 bg-white/2 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/20 hover:bg-blue-500/6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/[0.07] transition group-hover:border-blue-500/50">

                <span className="text-xl text-blue-500">
                  ♧
                </span>

              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  24/7 Support
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Dedicated support
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= RIGHT PRODUCT ================= */}

        <div className="absolute right-[2%] top-1/2 z-10 w-[49%] -translate-y-1/2">

          {/* Large ambient glow */}

          <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />


          {/* Outer circle */}

          <div className="absolute left-1/2 top-1/2 h-142.5 w-142.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20 shadow-[0_0_80px_rgba(37,99,235,0.12)]" />


          {/* Inner circle */}

          <div className="absolute left-1/2 top-1/2 h-112.5 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10" />


          {/* Product glow */}

          <div className="absolute bottom-[15%] left-1/2 h-25 w-105 -translate-x-1/2 rounded-full bg-blue-500/30 blur-[70px]" />


          {/* Product */}

          <img
            src={heroProduct}
            alt="Featured products"
            className="relative z-10 mx-auto w-[88%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-transform duration-700 hover:scale-[1.02]"
          />


          {/* ================= QUALITY CARD ================= */}

          <div className="absolute bottom-[6%] right-[2%] z-20 rounded-2xl border border-blue-500/20 bg-[#0b1120]/80 px-5 py-4 shadow-[0_15px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">

                <span className="text-xl text-blue-400">
                  ✦
                </span>

              </div>

              <div>

                <p className="text-sm font-semibold text-white">
                  Best Quality
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Premium products
                </p>

              </div>

            </div>

          </div>


          {/* Floating blue dots */}

          <div className="absolute right-[5%] top-[20%] grid grid-cols-4 gap-2 opacity-40">

            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-1 w-1 rounded-full bg-blue-400"
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;