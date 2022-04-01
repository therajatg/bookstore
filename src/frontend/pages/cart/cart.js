// import { useFilter } from "../../contexts/filterContext";
import { useCart } from "../../contexts/index";
import styles from "../../components/products/products.module.css";
import sty from "./cart.module.css";

export function Cart() {
  // const { finalProductList } = useFilter();
  const { cartItems } = useCart();
  console.log(cartItems);

  return (
    <div className={sty.cartAndPriceDetails}>
      <div>
        <div className={`${styles.productGrid} ${sty.productGrid}`}>
          {cartItems.map(
            ({ img, title, author, rating, fastDelivery, price }) => (
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
                  <button className={`${sty.btn} font-size-m round-corner`}>
                    -
                  </button>
                  <button className={`${sty.btn} font-size-m`}>1</button>
                  <button className={`${sty.btn} font-size-m round-corner`}>
                    +
                  </button>
                </h2>
                <a href="#" className="button-contained delete-button">
                  Remove
                </a>
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
