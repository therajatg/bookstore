import { WishlistProducts } from "../../components/index";
import { useWishlist } from "../../contexts";
import styles from "./wishlist.module.css";

export function Wishlist() {
  const { wishlist } = useWishlist();
  return (
    <div className="paddingTop">
      {wishlist.length > 0 ? (
        <WishlistProducts />
      ) : (
        <div className={styles.emptyWishlist}>
          <h1>Your wishlist is empty</h1>
          <h3>Please add books to wishlist</h3>
        </div>
      )}
    </div>
  );
}
