import { CartProducts, CartPriceCard } from "../../components/index";
import styles from "./cart.module.css";
import { useCart } from "../../contexts/index";

export function Cart() {
  const { cartItems } = useCart();
  return (
    <div className="paddingTop">
      {cartItems.length > 0 ? (
        <div>
          <CartProducts />
          <CartPriceCard />
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <h1>Your cart is empty</h1>
          <h3>Please add books to cart</h3>
        </div>
      )}
    </div>
  );
}
