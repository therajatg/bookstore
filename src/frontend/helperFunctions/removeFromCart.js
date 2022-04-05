import axios from "axios";

const removeFromCart = async (id, setCartItems, token) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });
    setCartItems(response.data.cart);
  } catch (err) {
    console.log(err);
  }
};

export { removeFromCart };
