import axios from "axios";

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
    setWishlist(response.data.wishlist);
  } catch (err) {
    console.log(err);
  }
};

export { addToWishlist };
