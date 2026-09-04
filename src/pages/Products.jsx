import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/products/ProductCard";

const Products = () => {
  // =========================
  // URL PARAMETERS
  // =========================

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromURL = searchParams.get("category") || "All";


  // =========================
  // STATES
  // =========================

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categoryFromURL);
  const [maxPrice, setMaxPrice] = useState(200);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("default");

  // =========================
  // SYNC URL → CATEGORY STATE
  // =========================

  useEffect(() => {
    setCategory(categoryFromURL);
    setCurrentPage(1);
  }, [categoryFromURL]);

  // =========================
  // CONSTANTS
  // =========================

  const productsPerPage = 8;

  // =========================
  // CATEGORIES
  // =========================

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesPrice = product.price <= maxPrice;

    const matchesRating = product.rating >= minRating;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesRating
    );
  });

  // =========================
  // SORT PRODUCTS
  // =========================

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-low") {
      return a.price - b.price;
    }

    if (sort === "price-high") {
      return b.price - a.price;
    }

    if (sort === "rating") {
      return b.rating - a.rating;
    }

    if (sort === "newest") {
      return Number(b.isNew) - Number(a.isNew);
    }

    return 0;
  });

  // =========================
  // PAGINATION
  // =========================

  const totalPages = Math.ceil(
    sortedProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );


  // RESET FILTERS
  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setMaxPrice(200);
    setMinRating(0);
    setSort("default");
    setCurrentPage(1);
  };

  // =========================
  // PAGINATION FUNCTIONS
  // =========================

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // =========================
  // JSX
  // =========================

  return (
    <section className="min-h-screen bg-[#030712] px-6 py-24">

      {/* =========================
          HEADER
      ========================= */}

      <div className="mx-auto max-w-7xl text-center">

        <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
          Home → Products
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Explore Our Products
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Discover premium products carefully selected for quality,
          style and everyday use.
        </p>

      </div>


      {/* =========================
          FILTER SECTION
      ========================= */}

      <div className="mx-auto mt-14 max-w-7xl">

        <div className="rounded-2xl border border-white/10 bg-[#0b0f19] p-5 md:p-6">

          {/* FILTER HEADER */}

          <div className="mb-6 flex flex-col gap-3 border-b border-white/6 pb-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-base font-semibold text-white">
                Filter Products
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Find the perfect product for you
              </p>

            </div>


            <div className="flex items-center gap-4">

              <p className="text-sm text-gray-500">

                <span className="font-medium text-white">
                  {sortedProducts.length}
                </span>{" "}

                {sortedProducts.length === 1
                  ? "product"
                  : "products"}

              </p>

              //RESET FILTERS 
              <button
                onClick={resetFilters}
                className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-400 transition hover:border-blue-500/40 hover:text-white"
              >
                Reset Filters
              </button>

            </div>

          </div>


          {/* =========================
              FILTER CONTROLS
          ========================= */}

          <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr_1fr]">


            {/* SEARCH */}

            <div>

              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                Search
              </label>


              <div className="relative">

                {/* Search Icon */}

                <svg
                  className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                  />
                </svg>


                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="h-11 w-full rounded-xl border border-white/10 bg-[#030712] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                />

              </div>

            </div>


            {/* CATEGORY */}

            <div>

              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                Category
              </label>


              <select
                value={category}
                onChange={(e) => {
                  const selectedCategory = e.target.value;
                
                  setCategory(selectedCategory);
                  setCurrentPage(1);
                
                  if (selectedCategory === "All") {
                    setSearchParams({});
                  } else {
                    setSearchParams({
                      category: selectedCategory,
                    });
                  }
                }}
                className="h-11 w-full cursor-pointer rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-gray-300 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
              >

                {categories.map((cat) => (
                  <option
                    key={cat}
                    value={cat}
                    className="bg-[#030712]"
                  >
                    {cat}
                  </option>
                ))}

              </select>

            </div>


            {/* RATING */}

            <div>

              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                Rating
              </label>


              <select
                value={minRating}
                onChange={(e) => {
                  setMinRating(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="h-11 w-full cursor-pointer rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-gray-300 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
              >

                <option value="0" className="bg-[#030712]">
                  All Ratings
                </option>

                <option value="4" className="bg-[#030712]">
                  ★ 4.0 & above
                </option>

                <option value="4.5" className="bg-[#030712]">
                  ★ 4.5 & above
                </option>

                <option value="4.8" className="bg-[#030712]">
                  ★ 4.8 & above
                </option>

              </select>

            </div>


            {/* SORT */}

            <div>

              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                Sort By
              </label>


              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setCurrentPage(1);
                }}
                className="h-11 w-full cursor-pointer rounded-xl border border-white/10 bg-[#030712] px-4 text-sm text-gray-300 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
              >

                <option value="default" className="bg-[#030712]">
                  Default
                </option>

                <option value="price-low" className="bg-[#030712]">
                  Price: Low to High
                </option>

                <option value="price-high" className="bg-[#030712]">
                  Price: High to Low
                </option>

                <option value="rating" className="bg-[#030712]">
                  Highest Rated
                </option>

                <option value="newest" className="bg-[#030712]">
                  Newest
                </option>

              </select>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          PRODUCTS
      ========================= */}

      <div className="mx-auto mt-12 max-w-7xl">

        {/* PRODUCTS HEADER */}

        {currentProducts.length > 0 && (

          <div className="mb-6 flex items-center justify-between">

            <p className="text-sm text-gray-500">

              Showing{" "}

              <span className="font-medium text-white">
                {startIndex + 1}
              </span>

              {" – "}

              <span className="font-medium text-white">
                {Math.min(
                  startIndex + productsPerPage,
                  sortedProducts.length
                )}
              </span>

              {" of "}

              <span className="font-medium text-white">
                {sortedProducts.length}
              </span>

            </p>


            <p className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </p>

          </div>

        )}


        {/* =========================
            PRODUCT GRID
        ========================= */}

        {currentProducts.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {currentProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        ) : (

          /* =========================
              NO PRODUCTS
          ========================= */

          <div className="rounded-2xl border border-white/10 bg-[#0b0f19] py-20 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/5">

              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>

            </div>


            <h2 className="mt-5 text-xl font-semibold text-white">
              No Products Found
            </h2>


            <p className="mt-2 text-sm text-gray-500">
              Try changing your search or filters.
            </p>


            <button
              onClick={resetFilters}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Reset Filters
            </button>

          </div>

        )}


        {/* =========================
            PAGINATION
        ========================= */}

        {totalPages > 1 && (

          <div className="mt-12 flex items-center justify-center gap-2">


            {/* PREVIOUS */}

            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="flex h-10 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm text-gray-400 transition hover:border-blue-500/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >

              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>

              <span className="hidden sm:inline">
                Previous
              </span>

            </button>


            {/* PAGE NUMBERS */}

            <div className="flex items-center gap-2">

              {Array.from({ length: totalPages }).map(
                (_, index) => {

                  const pageNumber = index + 1;

                  return (

                    <button
                      key={pageNumber}
                      onClick={() =>
                        setCurrentPage(pageNumber)
                      }
                      className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition ${
                        currentPage === pageNumber
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                          : "border border-white/10 text-gray-500 hover:border-blue-500/40 hover:text-white"
                      }`}
                    >
                      {pageNumber}
                    </button>

                  );

                }
              )}

            </div>


            {/* NEXT */}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="flex h-10 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm text-gray-400 transition hover:border-blue-500/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >

              <span className="hidden sm:inline">
                Next
              </span>

              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>

            </button>

          </div>

        )}

      </div>

    </section>
  );
};

export default Products;