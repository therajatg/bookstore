import { useUserContext } from "../../contexts/index";
import styles from "./checkout.module.css";

export function Checkout() {
  const { deliveryAddress } = useUserContext();
  return (
    <div className={styles.address}>
      <span>{deliveryAddress.name}</span>
      <br />
      <span>{deliveryAddress.area}</span>
      <br />
      <span>{deliveryAddress.locality}</span>
      <br />
      <span>
        {deliveryAddress.city}, {deliveryAddress.state} -{" "}
        {deliveryAddress.pincode}
      </span>
      <br />
      <span>Contact: {deliveryAddress.mobile}</span>
    </div>
  );
}
