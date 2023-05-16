import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
//import "./navBar.css"
function NavBar() {
  const { amount } = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex justify-between items-center flex-row bg-yellow-900 py-6 text-yellow-400 ">
        <Link to="/">
          <h2 className="font-normal text-2xl">The Clean Plate</h2>
        </Link>

        <SearchBar />

        <div className="container-links">
          <Link to="/">
            <a className="mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              Home
            </a>
          </Link>

          <Link to="/categories">
            <a className="mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              Categories
            </a>
          </Link>

          <Link to="categories/products">
            <a className="mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              Products
            </a>
          </Link>

          <Link to="/contact">
            <a className="mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              Contact
            </a>
          </Link>

          <Link to="/createproduct">
            <a className="mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              Form
            </a>
          </Link>
          <Link to="/cart">
            <BsCart4 className=" h-6 w-6 relative block" />
            <p className=" absolute flex ">{amount}</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
