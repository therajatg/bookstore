import {
  Landing,
  Home,
  Cart,
  Wishlist,
  Login,
  Signup,
  PageNotFound,
  ProductDetail,
} from "../frontend/pages/index";
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
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/test-api" element={<Mockman />} />
    </Routes>
  );
}

export { Router };
