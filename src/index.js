import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  WishlistProvider,
  CartProvider,
  FilterProvider,
  AuthProvider,
} from "./frontend/contexts/index";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <FilterProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </FilterProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
