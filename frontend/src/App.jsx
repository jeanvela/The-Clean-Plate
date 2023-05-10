import "./App.css";
import Home from "../src/components/views/Home";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/products/Cards";
import CardDetail from "./components/products/CardDetail";
import Categories from "./components/categories/Categories";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/categories/products" element={<Cards />} />
          <Route path="/categories/products/:id" element={<CardDetail />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
