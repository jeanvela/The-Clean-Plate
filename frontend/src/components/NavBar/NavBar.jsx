import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
//import "./navBar.css"
function NavBar() {
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

          <Link to="/about">
            <a className="mr-4 text-decoration-none rounded-lg hover:bg-yellow-700 ">
              About
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
        </div>
      </div>
    </>
  );
}

export default NavBar;
