import {
  Landing,
  Home,
  Cart,
  Wishlist,
  Login,
  Signup,
  PageNotFound,
  ProductDetail,
  Profile,
  DeliveryAddress,
} from "../pages/index";
import { BasicInfo, Address, Checkout } from "../components/index";
import { RequiresAuth } from "./RequiresAuth";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        }
      >
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequiresAuth>
            <Profile />
          </RequiresAuth>
        }
      >
        <Route path="/profile" element={<BasicInfo />} />
        <Route path="/profile/address" element={<Address />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/deliveryAddress" element={<DeliveryAddress />} />
      <Route path="/productDetail/:productId" element={<ProductDetail />} />
      <Route path="/test-api" element={<Mockman />} />
    </Routes>
  );
}

export { Router };
