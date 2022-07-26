import axios from "axios";
import { toast } from "react-toastify";

const getWishlist = async (token) => {
  try {
    const response = await axios.get(`/api/user/wishlist`, {
      headers: { authorization: token },
    });
    return response.data.wishlist;
  } catch {
    toast.error("Error! unable to fetch wishlist");
  }
};

const addToWishlist = async (product, setWishlist, token) => {
  try {
    const response = await axios.post(
      `/api/user/wishlist`,
      {
        product,
      },
      {
        headers: { authorization: token },
      }
    );
    toast.success("Added to wishlist");
    setWishlist(response.data.wishlist);
  } catch (err) {
    toast.error("Error! unable to add to wishlist");
  }
};

const removeFromWishlist = async (id, setWishlist, token) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    toast.success("Removed from wishlist");
    setWishlist(response.data.wishlist);
  } catch (err) {
    toast.error("Error! unable to add to wishlist");
  }
};

export { getWishlist, addToWishlist, removeFromWishlist };
