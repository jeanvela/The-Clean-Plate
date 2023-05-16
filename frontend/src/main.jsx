import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productsApi";
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "./components/views/Footer.jsx";
import categories from "./features/categorySlice";
import products from "./features/productsSlice";
import { Auth0Provider } from '@auth0/auth0-react'

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products,
    categories,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider domain="dev-kpcb1xpi7aaypegd.us.auth0.com" clientId="PTbYBGwYv0xFnKTDvp2VkKS0P6ZB6JVB" redirectUri={window.location.origin}>
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
          <App />
          <Footer />
        </Provider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
