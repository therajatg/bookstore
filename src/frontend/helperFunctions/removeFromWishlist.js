import axios from "axios";

const removeFromWishlist = async (id, setWishlist, token) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    setWishlist(response.data.wishlist);
  } catch (err) {
    console.log(err);
  }
};

export { removeFromWishlist };
