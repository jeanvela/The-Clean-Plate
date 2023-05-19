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
      <div className="flex flex-row  justify-between items-center  bg-yellow-900 py-6 text-yellow-400 ">
        <Link to="/">
          <h2 className="font-normal text-2xl">The Clean Plate</h2>
        </Link>

        <SearchBar />

        <div className="container-links flex flex-row-">
          <Link to="/">
            <div className="flex mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              Home
            </div>
          </Link>

          <Link to="/categories">
            <div className="flex mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              Categories
            </div>
          </Link>

          <Link to="categories/products">
            <div className="mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              Products
            </div>
          </Link>

          <Link to="/contact">
            <div className="mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              Contact
            </div>
          </Link>

          <Link to="/createproduct">
            <div className="mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              Form
            </div>
          </Link>
          <Link to="/cart">
            <div className=" mr-4 block relative">
              <BsCart4 className=" h-7 w-6" />
              <div>
                <p className=" absolute  -top-3 -right-2 w-7 h-7  text-black rounded-full  bg-opacity-50 flex items-center justify-center bg-gray-200 ">
                  {amount}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
