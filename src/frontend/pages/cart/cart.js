import { useCart, useWishlist, useAuth } from "../../contexts/index";
import styles from "../../components/products/products.module.css";
import sty from "./cart.module.css";
import axios from "axios";

export function Cart() {
  const { setCartItems, cartItems } = useCart();
  const { setWishlist, wishlist } = useWishlist();
  const encodedToken = localStorage.getItem("token");

  const totalOldPrice = cartItems.reduce(
    (acc, current) => acc + current.oldPrice * current.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (acc, current) => acc + current.price * current.qty,
    0
  );

  const totalDiscount = totalOldPrice - totalPrice;

  const removeFromCart = async (id) => {
    try {
      const response = await axios.delete(`/api/user/cart/${id}`, {
        headers: { authorization: encodedToken },
      });
      setCartItems(response.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: encodedToken },
      });
      setWishlist(response.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  };

  const addToWishlist = async (product) => {
    try {
      const response = await axios.post(
        `/api/user/wishlist`,
        {
          product,
        },
        {
          headers: { authorization: encodedToken },
        }
      );
      setWishlist(response.data.wishlist);
    } catch (err) {
      console.log(err);
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

  const decrementItem = async (id, qty) => {
    if (qty > 3) {
      try {
        const response = await axios.post(
          `/api/user/cart/${id}`,
          {
            action: { type: "decrement" },
          },
          {
            headers: { authorization: encodedToken },
          }
        );
        setCartItems(response.data.cart);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className={sty.cartAndPriceDetails}>
      <div>
        <div className={`${styles.productGrid} ${sty.productGrid}`}>
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
              <div className={`${styles.cardContainer} card-container`}>
                <img className={styles.imgDimension} src={img} />
                <h3 className="margin-zero">{title}</h3>
                <h6 className="margin-one">by {author}</h6>
                <p className={`${styles.rating} margin-one`}>
                  Rating: {rating}
                </p>
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
                <h2>
                  <button
                    className={`${sty.btn} font-size-m round-corner`}
                    onClick={() => decrementItem(_id, qty)}
                  >
                    -
                  </button>
                  <input type="number" value={qty} />
                  <button
                    className={`${sty.btn} font-size-m round-corner`}
                    onClick={() => incrementItem(_id, qty)}
                  >
                    +
                  </button>
                </h2>
                <div
                  className="button-contained delete-button"
                  onClick={() => removeFromCart(_id)}
                >
                  Remove
                </div>

                {wishlist.find((item) => item._id === _id) ? (
                  <div
                    className="button-contained delete-button"
                    onClick={() => removeFromWishlist(_id)}
                  >
                    Remove From Wishlist
                  </div>
                ) : (
                  <div
                    className="button-contained delete-button"
                    onClick={() => {
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
                      });
                      removeFromCart(_id);
                    }}
                  >
                    Move To Wishlist
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
      <div className={sty.priceDetails}>
        <div>
          <p>{`Price ${cartItems.length} items)`}</p>
          <p>Discount</p>
          <p>Delivery Charges</p>
          <h3>Total Amount</h3>
          <p>{`You will save ₹${totalDiscount} on this order`}</p>
        </div>
        <div>
          <p>{totalOldPrice}</p>
          <p>{totalDiscount}</p>
          <p>FREE</p>
          <h3>{totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}
