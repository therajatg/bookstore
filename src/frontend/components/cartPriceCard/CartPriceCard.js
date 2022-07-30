import { useCart, useUserContext } from "../../contexts/index";
import styles from "./cartPriceCard.module.css";
import { loadScript } from "../../helperFunctions/index";
import { toast } from "react-toastify";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

export function CartPriceCard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { cartItems, setCartItems } = useCart();
  const { deliveryAddress } = useUserContext();
  const totalOldPrice = cartItems.reduce(
    (acc, current) => acc + current.oldPrice * current.qty,
    0
  );

  const totalPrice = cartItems.reduce(
    (acc, current) => acc + current.price * current.qty,
    0
  );

  const totalDiscount = totalOldPrice - totalPrice;

  async function displayRazorpay(e) {
    e.preventDefault();
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_oyvCmMe5rvfpA6",
      currency: "INR",
      amount: totalPrice * 100,
      name: "Kitab",
      description: "Thank you for trusting us",
      image: "",
      handler: async (response) => {
        const { razorpay_payment_id } = await response;
        const orderData = {
          orderAmount: totalPrice,
          razorpayId: razorpay_payment_id,
        };
        toast.success("Order Placed, Continue Shopping");
        navigate("/home");
        setCartItems([]);
      },
      prefill: {
        name: "Kitab",
        email: "payments@kitab.com",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      toast.error("Payment Cancelled");
    });
    paymentObject.open();
  }
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
        {pathname === "/cart/checkout" && (
          <div>
            <button
              className="button-contained add-to-cart-button margin-one font-size-s btn-no-border-no-color"
              onClick={displayRazorpay}
            >
              Buy
            </button>
            <Outlet />
          </div>
        )}

        {pathname === "/cart" && (
          <button
            className="button-contained add-to-cart-button margin-one font-size-s btn-no-border-no-color"
            onClick={() => navigate("/deliveryAddress")}
          >
            Place Order
          </button>
        )}
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
