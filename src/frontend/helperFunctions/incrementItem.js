import axios from "axios";

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

export { incrementItem };
