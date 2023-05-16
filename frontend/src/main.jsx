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
import cart, { getTotal } from "./features/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products,
    categories,
    cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
store.dispatch(getTotal());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Provider store={store}>
        <NavBar />
        <App />
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
