import { useCart } from "../../contexts/index";
import styles from "./cartPriceCard.module.css";

function CartPriceCard() {
  const { cartItems } = useCart();

  const totalOldPrice = cartItems.reduce(
    (acc, current) => acc + current.oldPrice * current.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (acc, current) => acc + current.price * current.qty,
    0
  );

  const totalDiscount = totalOldPrice - totalPrice;
  return (
    <div className={styles.priceDetails}>
      <div>
        <p>{`Price (${cartItems.length} items)`}</p>
        <p>Discount</p>
        <p>Delivery Charges</p>
        <h3>Total Amount</h3>
        <p
          className={styles.green}
        >{`You will save ₹${totalDiscount} on this order`}</p>
        <button className="button-contained add-to-cart-button margin-one font-size-s btn-no-border-no-color">
          Place Order
        </button>
      </div>
      <div>
        <p>{totalOldPrice}</p>
        <p>{totalDiscount}</p>
        <p>FREE</p>
        <h3>{totalPrice}</h3>
      </div>
    </div>
  );
}

export { CartPriceCard };
