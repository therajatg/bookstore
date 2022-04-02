import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./index";

const wishlistContext = createContext();
const useWishlist = () => useContext(wishlistContext);

function WishlistProvider({ children }) {
  const { token } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: { authorization: token },
          });
          setWishlist(response.data.wishlist);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setWishlist([]);
    }
  }, [token]);
  return (
    <wishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
}

export { WishlistProvider, useWishlist };
