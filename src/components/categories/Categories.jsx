import {
  Cpu,
  Shirt,
  Footprints,
  Watch,
  Sparkles,
  Home,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      description: "Smart devices & gadgets",
      icon: Cpu,
    },
    {
      name: "Fashion",
      description: "Style for every occasion",
      icon: Shirt,
    },
    {
      name: "Shoes",
      description: "Step into something better",
      icon: Footprints,
    },
    {
      name: "Watches",
      description: "Time meets elegance",
      icon: Watch,
    },
    {
      name: "Accessories",
      description: "Complete your look",
      icon: Sparkles,
    },
    {
      name: "Home & Living",
      description: "Make your space better",
      icon: Home,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#030712] px-6 py-28">

      {/* ================= BACKGROUND ================= */}

      {/* Main glow */}

      <div className="absolute left-1/2 top-1/2 h-125 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/6 blur-[150px]" />


      {/* Top glow */}

      <div className="absolute left-[10%] top-0 h-62.5 w-62.5 rounded-full bg-blue-600/5 blur-[100px]" />


      {/* Subtle grid */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.7) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />


      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-350">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-16 max-w-2xl text-center">

          {/* Label */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2">

            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Explore
            </span>

          </div>


          {/* Heading */}

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">

            Shop by{" "}

            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Category
            </span>

          </h2>


          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-500">
            Discover products across our most popular categories,
            carefully selected to bring quality and style to your everyday life.
          </p>

        </div>


        {/* ================= CATEGORY GRID ================= */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category, index) => {

            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="group relative min-h-55 cursor-pointer overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a1020]/90 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-[#0c1426] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >

                {/* ================= CARD GLOW ================= */}

                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-600/6 blur-[60px] transition-all duration-500 group-hover:bg-blue-500/15" />


                {/* Bottom glow */}

                <div className="absolute -bottom-20 left-1/2 h-32 w-56 -translate-x-1/2 rounded-full bg-blue-600/4 blur-[60px] transition-all duration-500 group-hover:bg-blue-600/12" />


                {/* ================= NUMBER ================= */}

                <span className="absolute right-6 top-5 text-5xl font-bold text-white/2.5 transition-colors duration-500 group-hover:text-blue-500/8">
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* ================= ICON ================= */}

                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[0.07] transition-all duration-500 group-hover:border-blue-500/50 group-hover:bg-blue-500/12 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.18)]">

                  <Icon
                    size={25}
                    strokeWidth={1.7}
                    className="text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-300"
                  />

                </div>


                {/* ================= CONTENT ================= */}

                <div className="relative">

                  <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {category.name}
                  </h3>

                  <p className="mt-2 max-w-55 text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>

                </div>


                {/* ================= EXPLORE ================= */}

                <div className="relative mt-6 flex items-center gap-2 text-sm font-medium text-blue-500 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">

                  Explore

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </div>


                {/* ================= BOTTOM RIGHT ARROW ================= */}

                <div className="absolute right-6 bottom-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/2 text-gray-600 transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-400">

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-6"
                  />

                </div>

              </div>
            );
          })}

        </div>


        {/* ================= VIEW ALL BUTTON ================= */}

        <div className="mt-14 flex justify-center">

          <button className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/2 px-7 py-3.5 text-sm font-semibold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-white">

            {/* Button glow */}

            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-blue-500/8 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative">
              View All Categories
            </span>

            <ArrowRight
              size={17}
              className="relative text-blue-400 transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>

    </section>
  );
};

export default Categories;