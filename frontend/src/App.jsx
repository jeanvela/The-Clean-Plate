import "./App.css";
import Home from "../src/components/views/Home";
import FormProdutcs from "./components/formProducts/FormProducts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createproduct" element={<FormProdutcs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
