import "./App.css";
import Home from "../src/components/views/Home";
import FormProdutcs from "./components/formProducts/FormProducts";
import { Route, Routes } from "react-router-dom";
import Cards from "./components/products/Cards";
import CardDetail from "./components/products/CardDetail";
import Categories from "./components/categories/Categories";
import ProductByCategory from "./components/products/ProductByCategory";
import Cart from "./components/NavBar/cart/Cart";
import ContactUs from "./components/views/ContactUs";
import ChechOutSuccess from "./components/NavBar/cart/ChechOutSuccess";
import Dashboard from "./components/views/Dashboard";
import ProductsDashboard from "../src/components/Dashboard/Products";
import UsersDashboard from "../src/components/Dashboard/Users";
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import { useEffect, useState } from "react";
import PageNotFound from "./components/views/PageNotFound";
import OrderDashboard from "../src/components/Dashboard/Order";

function App () {
  const userRole = useSelector((state) => state.user.role);
  const [enabled, setEnabled] = useState(false);

  let {user} = useAuth0();

  console.log(user)

  useEffect(() => {
    const checkEnable = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/auth/enable?email=${user.email}`);
        const data = response.data;
        setEnabled(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user && user.email) {
      checkEnable();
    }
  }, [user]);

  console.log(userRole);

  return (
    <>
      <div>
        <Routes>
         
        
          <Route  path="/" element={<Home />} />

          { enabled === true && (
            <>
          <Route path="/categories/products" element={<Cards />} />
          <Route path="/categories/products/:id" element={<CardDetail />} />
          <Route path="/categories/:id" element={<ProductByCategory />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/CheckoutSuccess" element={<ChechOutSuccess />} />

          </>
          )}
       

          <Route path="*" element={<PageNotFound />} />
          {userRole === "admin" && (
            <>
              <Route exact path="/createproduct" element={<FormProdutcs />} />
              <Route exact path="/Dashboard" element={<Dashboard />} />
              <Route exact path="/Dashboard/products" element={<ProductsDashboard />} />
              <Route exact path="/Dashboard/users" element={<UsersDashboard />} />
              <Route exact path="/Dashboard/ordes" element={<OrderDashboard/>} />
            </>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
