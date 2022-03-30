import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const encodedToken = localStorage.getItem("token");
const cartContext = createContext();
const useCart = () => useContext(cartContext);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/cart", {
          headers: { authorization: encodedToken },
        });
        setCartItems(response.data.cart);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <cartContext.Provider value={{ cartItems }}>
      {children}
    </cartContext.Provider>
  );
}

export { CartProvider, useCart };
