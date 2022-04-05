import styles from "./wishlistProducts.module.css";
import { useWishlist, useCart, useAuth } from "../../contexts/index";
import {
  addToCart,
  removeFromWishlist,
  incrementItem,
} from "../../helperFunctions";
import { ImCancelCircle } from "react-icons/im";

function WishlistProducts() {
  const { wishlist, setWishlist } = useWishlist();
  const { cartItems, setCartItems } = useCart();
  const encodedToken = localStorage.getItem("token");

  return (
    <div className={styles.allProductsContainer}>
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
          oldPrice,
        }) => (
          <div className={styles.cardContainer}>
            <img className={styles.imgDimension} src={img} />

            <div className={styles.textContainer}>
              <ImCancelCircle
                className={styles.cancelIcon}
                onClick={() =>
                  removeFromWishlist(_id, setWishlist, encodedToken)
                }
              />
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

              <a
                href="#"
                className="button-contained add-to-cart-button"
                onClick={() => {
                  removeFromWishlist(_id, setWishlist, encodedToken);
                  cartItems.find((item) => item._id === _id)
                    ? incrementItem(_id, setCartItems, encodedToken)
                    : addToCart(
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
                        setCartItems,
                        encodedToken
                      );
                }}
              >
                Move To Cart
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export { WishlistProducts };
