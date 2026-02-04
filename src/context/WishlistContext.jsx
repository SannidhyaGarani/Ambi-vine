import React, { createContext, useContext, useEffect, useState } from 'react';

const WishlistContext = createContext();

const STORAGE_KEY = 'ambi_wishlist';

export const WishlistProvider = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState([]);

  // Load from localStorage once
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setWishlistIds(parsed);
        }
      }
    } catch {
      // fail silently – keep wishlist empty
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch {
      // ignore write errors
    }
  }, [wishlistIds]);

  const toggleWishlist = (id) => {
    setWishlistIds((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id]
    );
  };

  const isInWishlist = (id) => wishlistIds.includes(id);

  const value = {
    wishlistIds,
    toggleWishlist,
    isInWishlist,
    count: wishlistIds.length,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return ctx;
};


