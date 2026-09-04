import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Verified Customer",
      review:
        "The quality is honestly better than I expected. The product arrived quickly and the whole shopping experience was smooth.",
      rating: 5,
      initials: "AM",
    },
    {
      name: "Sophia Williams",
      role: "Verified Customer",
      review:
        "I really love the design and the quality of the products. The website is easy to use and checkout was super simple.",
      rating: 5,
      initials: "SW",
    },
    {
      name: "Daniel Carter",
      role: "Verified Customer",
      review:
        "Great products, fast delivery and excellent customer support. I'll definitely be shopping here again.",
      rating: 5,
      initials: "DC",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#030712] px-6 py-28">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute left-1/2 top-1/2 h-125 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[150px]" />

      <div
        className="absolute inset-0 opacity-[0.02]"
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

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2">

            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Customer Reviews
            </span>

          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">

            Loved by{" "}

            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Our Customers
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-500">
            See what our customers have to say about their shopping
            experience with ShopEase.
          </p>

        </div>


        {/* ================= TESTIMONIALS ================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a1020] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >

              {/* Glow */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-600/5 blur-[60px] transition-all duration-500 group-hover:bg-blue-500/12" />


              {/* Quote */}

              <div className="relative flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[0.07]">

                  <Quote
                    size={20}
                    className="text-blue-400"
                  />

                </div>

                <span className="text-5xl font-serif leading-none text-blue-500/12">
                  "
                </span>

              </div>


              {/* Stars */}

              <div className="relative mt-6 flex gap-1">

                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>


              {/* Review */}

              <p className="relative mt-5 min-h-27.5 text-sm leading-7 text-gray-400">
                "{testimonial.review}"
              </p>


              {/* Divider */}

              <div className="my-6 h-px bg-white/6" />


              {/* Customer */}

              <div className="relative flex items-center gap-4">

                {/* Avatar */}

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/20 bg-linear-to-br from-blue-600/20 to-cyan-500/10 text-sm font-semibold text-blue-400">
                  {testimonial.initials}
                </div>


                <div>

                  <h3 className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-600">
                    {testimonial.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* ================= RATING SUMMARY ================= */}

        <div className="mx-auto mt-14 flex max-w-md items-center justify-center gap-5 rounded-2xl border border-white/[0.07] bg-white/2 px-7 py-5">

          <div className="text-center">

            <p className="text-3xl font-bold text-white">
              4.9
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Average Rating
            </p>

          </div>


          <div className="h-10 w-px bg-white/10" />


          <div>

            <div className="flex gap-1">

              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

            </div>

            <p className="mt-1 text-xs text-gray-600">
              From 2,000+ happy customers
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;