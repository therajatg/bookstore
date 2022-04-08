import styles from "./cartProducts.module.css";
import { useCart, useWishlist, useAuth } from "../../contexts/index";
import {
  addToWishlist,
  removeFromWishlist,
  removeFromCart,
  incrementItem,
  decrementItem,
} from "../../helperFunctions/index";

function CartProducts() {
  const { setCartItems, cartItems } = useCart();
  const { setWishlist, wishlist } = useWishlist();
  const encodedToken = localStorage.getItem("token");

  return (
    <div className={styles.allProductsContainer}>
      {cartItems.map(
        ({
          img,
          title,
          author,
          rating,
          fastDelivery,
          oldPrice,
          price,
          _id,
          qty,
          categoryName,
        }) => (
          <div className={styles.cardContainer}>
            <img
              className={styles.imgDimension}
              src={img}
              alt="product-image"
            />
            <div>
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
                <del className="margin-one gray-text">&#8377;{oldPrice}</del>
                <span className={`${styles.off} font-size-xs`}>
                  {Math.round(((oldPrice - price) * 100) / oldPrice)}%off
                </span>
              </span>
              <div className="line"></div>
              <div className={styles.quantity}>
                <button
                  className={`${styles.btn} font-size-m round-corner`}
                  onClick={() =>
                    decrementItem(_id, qty, setCartItems, encodedToken)
                  }
                >
                  -
                </button>
                <input type="number" value={qty} className="font-size-m" />
                <button
                  className={`${styles.btn} font-size-m round-corner`}
                  onClick={() => incrementItem(_id, setCartItems, encodedToken)}
                >
                  +
                </button>
              </div>
              <div
                className={`${styles.button} marginTwo`}
                onClick={() => removeFromCart(_id, setCartItems, encodedToken)}
              >
                Remove
              </div>

              {wishlist.find((item) => item._id === _id) ? (
                <div
                  className={`${styles.button} marginTwo`}
                  onClick={() =>
                    removeFromWishlist(_id, setWishlist, encodedToken)
                  }
                >
                  Remove From Wishlist
                </div>
              ) : (
                <div
                  className={`${styles.button} marginTwo`}
                  onClick={() => {
                    addToWishlist(
                      {
                        img,
                        title,
                        author,
                        rating,
                        fastDelivery,
                        price,
                        _id,
                        categoryName,
                        oldPrice,
                      },
                      setWishlist,
                      encodedToken
                    );
                    removeFromCart(_id, setCartItems, encodedToken);
                  }}
                >
                  Move To Wishlist
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export { CartProducts };
