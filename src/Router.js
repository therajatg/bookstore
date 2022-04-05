import {
  Landing,
  Home,
  Cart,
  Wishlist,
  Login,
  Signup,
} from "./frontend/pages/index";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/test-api" element={<Mockman />} />
    </Routes>
  );
}

export { Router };
