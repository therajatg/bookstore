import axios from "axios";
import { toast } from "react-toastify";

const getCart = async (token) => {
  try {
    const response = await axios.get("/api/user/cart", {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      return response.data.cart;
    }
  } catch {
    toast.error("Error! unable to load cart items");
  }
};

const addToCart = async (product, setCartItems, token) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: { authorization: token },
      }
    );
    toast.success("Added to cart");
    setCartItems(response.data.cart);
  } catch (error) {
    toast.error("Error! unable to add to cart");
  }
};

const removeFromCart = async (id, setCartItems, token) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });
    toast.success("Removed from cart");
    setCartItems(response.data.cart);
  } catch (err) {
    toast.error("Error! unable to remove from cart");
  }
};

const decrementItem = async (id, qty, setCartItems, token) => {
  if (qty > 1) {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: { type: "decrement" },
        },
        {
          headers: { authorization: token },
        }
      );
      setCartItems(response.data.cart);
    } catch (err) {
      console.log(err);
    }
  }
};

const incrementItem = async (id, setCartItems, token) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: { type: "increment" },
      },
      {
        headers: { authorization: token },
      }
    );
    setCartItems(response.data.cart);
  } catch (err) {
    console.log(err);
  }
};

export { getCart, addToCart, removeFromCart, decrementItem, incrementItem };
