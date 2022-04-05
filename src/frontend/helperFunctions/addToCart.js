import axios from "axios";

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
    if (response.status === 201) {
      setCartItems(response.data.cart);
    }
  } catch (error) {
    console.log(error);
  }
};

export { addToCart };
