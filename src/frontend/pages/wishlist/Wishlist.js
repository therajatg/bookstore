import styles from "../../components/products/products.module.css";
import sty from "../cart/cart.module.css";
import wishlistStyle from "./wishlist.module.css";
import { useWishlist } from "../../contexts/index";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div
      className={`${styles.productGrid} ${sty.productGrid} ${wishlistStyle.productGrid}`}
    >
      {wishlist.map(({ img, title, author, rating, fastDelivery, price }) => (
        <div className={`${styles.cardContainer} card-container`}>
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
          <a href="#" className="button-contained delete-button">
            Remove
          </a>
        </div>
      ))}
    </div>
  );
}

export { Wishlist };
