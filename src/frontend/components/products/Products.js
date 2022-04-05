import styles from "./products.module.css";
import { useFilter, useAuth, useCart, useWishlist } from "../../contexts/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

export function Products() {
  const navigate = useNavigate();
  const { finalProductList } = useFilter();
  const { authState } = useAuth();
  const { token } = authState;
  const { setCartItems, cartItems } = useCart();
  const { setWishlist, wishlist } = useWishlist();

  const addToCart = async (product) => {
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

  const addToWishlist = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        {
          headers: { authorization: token },
        }
      );
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: token },
      });

      setWishlist(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

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
                className={`${styles.position} ${styles.redColor} icon-size-small`}
                onClick={() => removeFromWishlist(_id)}
              />
            ) : (
              <AiFillHeart
                className={`${styles.position} ${styles.whiteColor} icon-size-small`}
                onClick={() =>
                  addToWishlist({
                    img,
                    title,
                    author,
                    rating,
                    fastDelivery,
                    price,
                    _id,
                    categoryName,
                    oldPrice,
                  })
                }
              />
            )}

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
              <del className="margin-one gray-text">&#8377;{oldPrice}</del>
              <span className={`${styles.off} font-size-xs`}>
                {Math.round(((oldPrice - price) * 100) / oldPrice)}
                %off
              </span>
            </span>
            {cartItems.find((item) => item._id === _id) ? (
              <button
                className="button-contained add-to-cart-button margin-one font-size-s"
                onClick={() => navigate("/cart")}
              >
                Go To Cart
              </button>
            ) : (
              <button
                className="button-contained add-to-cart-button margin-one font-size-s"
                onClick={() => {
                  token
                    ? addToCart({
                        img,
                        title,
                        author,
                        rating,
                        fastDelivery,
                        oldPrice,
                        price,
                        _id,
                        categoryName,
                      })
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
