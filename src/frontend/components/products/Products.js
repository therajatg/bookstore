import styles from "./products.module.css";
import { useFilter } from "../../contexts/filterContext";
import { useCart } from "../../contexts/cartContext";
import { useEffect } from "react";
import axios from "axios";

export function Products() {
  const encodedToken = localStorage.getItem("token");
  const { finalProductList } = useFilter();
  const { setCartItems, cartItems } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post("/api/user/cart", {
          headers: { authorization: encodedToken },
        });
        setCartItems(response.data.cart);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [cartItems]);

  function cartItemHandler(_id) {
    setCartItems((cartItems) => [
      ...cartItems,
      ...finalProductList.filter((item) => item._id === _id),
    ]);
    console.log(cartItems);
  }

  return (
    <div className={styles.productGrid}>
      {finalProductList.map(
        ({ _id, img, title, author, rating, fastDelivery, price }) => (
          <div className={`card-container ${styles.cardContainer}`} key={_id}>
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
            <button
              className="button-contained add-to-cart-button margin-one font-size-s"
              onClick={(_id) => cartItemHandler(_id)}
            >
              Add To Cart
            </button>
          </div>
        )
      )}
    </div>
  );
}
