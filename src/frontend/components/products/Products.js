import styles from "./products.module.css";
import { useFilter, useAuth, useCart, useWishlist } from "../../contexts/index";
import {
  addToWishlist,
  removeFromWishlist,
  addToCart,
} from "../../helperFunctions/index";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

export function Products() {
  const navigate = useNavigate();
  const { finalProductList } = useFilter();
  const { authState } = useAuth();
  const { token } = authState;
  const { setCartItems, cartItems } = useCart();
  const { setWishlist, wishlist } = useWishlist();

  return (
    <div className={styles.productGrid}>
      {finalProductList.map(
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
          <div className={`card-container ${styles.cardContainer}`} key={_id}>
            {wishlist.find((item) => item._id === _id) ? (
              <AiFillHeart
                className={`heart-position ${styles.redColor} iconSizeSmall heart-hover`}
                onClick={() =>
                  token
                    ? removeFromWishlist(_id, setWishlist, token)
                    : navigate("/login")
                }
              />
            ) : (
              <AiFillHeart
                className={`heart-position ${styles.whiteColor} iconSizeSmall heart-hover`}
                onClick={() =>
                  token
                    ? addToWishlist(
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
                        token
                      )
                    : navigate("/login")
                }
              />
            )}

            <img
              className={styles.imgDimension}
              src={img}
              alt="product-image"
            />

            <h3 className="margin-one">{title}</h3>
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
                {Math.round(((oldPrice - price) * 100) / oldPrice)}
                %off
              </span>
            </span>
            {cartItems.find((item) => item._id === _id) ? (
              <button
                className="button-contained add-to-cart-button margin-one font-size-s btn-no-border-no-color"
                onClick={() => navigate("/cart")}
              >
                Go To Cart
              </button>
            ) : (
              <button
                className="button-contained add-to-cart-button margin-one font-size-s btn-no-border-no-color"
                onClick={() => {
                  token
                    ? addToCart(
                        {
                          img,
                          title,
                          author,
                          rating,
                          fastDelivery,
                          oldPrice,
                          price,
                          _id,
                          categoryName,
                        },
                        setCartItems,
                        token
                      )
                    : navigate("/login");
                }}
              >
                Add To Cart
              </button>
            )}
          </div>
        )
      )}
    </div>
  );
}
