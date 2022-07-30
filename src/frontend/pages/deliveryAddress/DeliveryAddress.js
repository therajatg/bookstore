import { useUserContext } from "../../contexts/index";
import { Address } from "../../components/address/Address";
import style from "./deliveryAddress.module.css";

export function DeliveryAddress() {
  const {
    userState: { address },
  } = useUserContext();

  return (
    <div className={style.main}>
      <h2>Select Delivery Address</h2>
      <Address />
    </div>
  );
}
