import axios from "axios";

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

export { decrementItem };
