import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./index";

const cartContext = createContext();
const useCart = () => useContext(cartContext);

function CartProvider({ children }) {
  const { authState } = useAuth();
  const { token } = authState;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await axios.get(`/api/user/cart`, {
            headers: { authorization: token },
          });
          if (response.status === 200) {
            setCartItems(response.data.cart);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setCartItems([]);
    }
  }, [token]);

  return (
    <cartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </cartContext.Provider>
  );
}

export { CartProvider, useCart };
