import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productsApi";
import NavBar from "../src/components/NavBar/NavBar";
import productName from "./features/productsByNameSilce";
import Footer from "./components/views/Footer.jsx";

const store = configureStore({
  reducer: { [productsApi.reducerPath]: productsApi.reducer, productName },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <App />
        <Footer/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
