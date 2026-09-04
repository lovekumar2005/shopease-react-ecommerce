import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center rounded-full border border-gray-800 bg-gray-900 px-4 py-2 transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
      
      <span className="mr-2 text-gray-500">
        ⌕
      </span>

      <input
        type="text"
        placeholder="Search products..."
        className="w-48 bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
      />

    </div>
  );
};

export default SearchBar;