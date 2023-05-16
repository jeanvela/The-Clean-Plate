import "./App.css";
import Home from "../src/components/views/Home";
import FormProdutcs from "./components/formProducts/FormProducts";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/products/Cards";
import CardDetail from "./components/products/CardDetail";
import Categories from "./components/categories/Categories";
import ProductByCategory from "./components/products/ProductByCategory";
import Cart from "./components/NavBar/cart/Cart";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createproduct" element={<FormProdutcs />} />
          <Route path="/categories/products" element={<Cards />} />
          <Route path="/categories/products/:id" element={<CardDetail />} />
          <Route path="/categories/:id" element={<ProductByCategory />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
