import { useCart, useAuth } from "../../contexts/index";
// import { useState } from "react";
import styles from "../../components/products/products.module.css";
import sty from "./cart.module.css";
import axios from "axios";

export function Cart() {
  const { setCartItems, cartItems } = useCart();
  const { token } = useAuth();
  const encodedToken = localStorage.getItem("token");

  const removeFromCartHandler = async (id) => {
    try {
      const response = await axios.delete(`/api/user/cart/${id}`, {
        headers: { authorization: encodedToken },
      });
      setCartItems(response.data.cart);
      console.log(token);
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
            ({ img, title, author, rating, fastDelivery, price, _id, qty }) => (
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
                  <del className="margin-one gray-text">
                    &#8377;{price + 368}
                  </del>
                  <span className={`${styles.off} font-size-xs`}>
                    {Math.round((368 * 100) / price)}%off
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
                  onClick={() => removeFromCartHandler(_id)}
                >
                  Remove
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className={sty.priceDetails}>
        <div>
          <p>Price (2 items)</p>
          <p>Discount</p>
          <p>Delivery Charges</p>
          <h3>Total Amount</h3>
          <p>You will save ₹2,974 on this order</p>
        </div>
        <div>
          <p>3997</p>
          <p>2899</p>
          <p>FREE</p>
          <h3>1023</h3>
        </div>
      </div>
    </div>
  );
}

{
  /* <h2>
                  <button
                    className={`${sty.btn} font-size-m round-corner`}
                    onClick={(_id, qty) =>
                      numberOfItemsInCart(_id, qty, "minus")
                    }
                  >
                    -
                  </button>
                  <input type="number" value={qty} />
                  <button
                    className={`${sty.btn} font-size-m round-corner`}
                    onClick={(_id, qty) =>
                      numberOfItemsInCart(_id, qty, "plus")
                    }
                  >
                    +
                  </button>
                </h2> */
}
