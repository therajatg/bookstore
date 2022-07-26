import axios from "axios";
import { toast } from "react-toastify";

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

    setCartItems(response.data.cart);
    toast.success("Added To Cart");
  } catch (error) {
    toast.error("Error! while adding to cart, please try again later.");
  }
};

const removeFromCart = async (id, setCartItems, token) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });
    setCartItems(response.data.cart);
    toast.success("Removed From Cart");
  } catch (err) {
    toast.error("Error! while removing from cart, please try again later.");
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
      toast.success("Book Decremented By 1");
    } catch (err) {
      toast.success("Error! Unable to decrement. Please try again later.");
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
    toast.success("Book Incremented by 1");
  } catch (err) {
    toast.success("Error! Unable to increment. Please try again later.");
  }
};

export { addToCart, removeFromCart, decrementItem, incrementItem };
