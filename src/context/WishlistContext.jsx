import React, {createContext, useContext, useState,} from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // =========================
  // ADD / REMOVE WISHLIST
  // =========================

  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return prev.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prev, product];
    });
  };


  // =========================
  // CHECK WISHLIST
  // =========================

  const isInWishlist = (productId) => {
    return wishlistItems.some(
      (item) => item.id === productId
    );
  };


  // =========================
  // REMOVE
  // =========================

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) =>
      prev.filter(
        (item) => item.id !== productId
      )
    );
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };


  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};


export const useWishlist = () => {
  return useContext(WishlistContext);
};