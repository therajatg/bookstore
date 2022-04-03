import styles from "../../components/products/products.module.css";
import sty from "../cart/cart.module.css";
import wishlistStyle from "./wishlist.module.css";
import { useWishlist, useCart, useAuth } from "../../contexts/index";
import { ImCancelCircle } from "react-icons/im";
import axios from "axios";

function Wishlist() {
  const { wishlist, setWishlist } = useWishlist();
  const { cartItems, setCartItems } = useCart();
  const { token } = useAuth();
  const encodedToken = localStorage.getItem("token");

  const removeFromWishlist = async (id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: encodedToken },
      });
      setWishlist(response.data.wishlist);
    } catch (err) {
      console.log(err);
      console.log(encodedToken);
    }
  };

  const incrementItem = async (id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: { type: "increment" },
        },
        {
          headers: { authorization: encodedToken },
        }
      );
      setCartItems(response.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          product,
        },
        {
          headers: { authorization: encodedToken },
        }
      );
      if (response.status === 201) {
        setCartItems(response.data.cart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${styles.productGrid} ${sty.productGrid} ${wishlistStyle.productGrid}`}
    >
      {wishlist.map(
        ({
          img,
          title,
          author,
          rating,
          fastDelivery,
          price,
          _id,
          categoryName,
        }) => (
          <div className={`${styles.cardContainer} card-container`}>
            <ImCancelCircle className={styles.position} />
            <img className={styles.imgDimension} src={img} />
            <h3 className="margin-zero">{title}</h3>
            <h6 className="margin-one">by {author}</h6>
            <p className={`${styles.rating} margin-one`}>Rating: {rating}</p>
            <h4 className="margin-one">
              {fastDelivery
                ? "Superfast delivery (within 24 hours)"
                : "Standard Delivery"}
            </h4>
            <span className={`margin-one ${styles.flexSpaceBetween}`}>
              <span className={styles.fontPrice}>&#8377;{price}</span>
              <del className="margin-one gray-text">&#8377;{price + 368}</del>
              <span className={`${styles.off} font-size-xs`}>
                {Math.round((368 * 100) / price)}%off
              </span>
            </span>
            <a
              href="#"
              className="button-contained delete-button"
              onClick={() => removeFromWishlist(_id)}
            >
              Remove From Wishlist
            </a>
            <a
              href="#"
              className="button-contained delete-button"
              onClick={() => {
                removeFromWishlist(_id);
                cartItems.find((item) => item._id === _id)
                  ? incrementItem(_id)
                  : addToCart({
                      img,
                      title,
                      author,
                      rating,
                      fastDelivery,
                      price,
                      _id,
                      categoryName,
                    });
              }}
            >
              Move To Cart
            </a>
          </div>
        )
      )}
    </div>
  );
}

export { Wishlist };
