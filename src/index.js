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
  UserProvider,
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
              <UserProvider>
                <App />
              </UserProvider>
            </WishlistProvider>
          </CartProvider>
        </FilterProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
