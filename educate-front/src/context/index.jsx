import React from "react";
import SearchProvider from "./SearchContext";
import BasketProvider from "./BasketContext";
import WishlistProvider from "./WishlistContext";

const MainProvider = ({ children }) => {
  return (
    <>
      <SearchProvider>
        <BasketProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </BasketProvider>
      </SearchProvider>
    </>
  );
};

export default MainProvider;
