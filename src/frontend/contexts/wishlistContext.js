import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const encodedToken = localStorage.getItem("token");
const wishlistContext = createContext();
const useWishlist = () => useContext(wishlistContext);

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/wishlist", {
          headers: { authorization: encodedToken },
        });
        setWishlist(response.data.wishlist);
      } catch (error) {
        console.log(error);
      }
    })();
  });
  return (
    <wishlistContext.Provider value={{ wishlist }}>
      {children}
    </wishlistContext.Provider>
  );
}

export { WishlistProvider, useWishlist };
