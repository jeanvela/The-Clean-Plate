import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useAuth0 } from "@auth0/auth0-react";
//import "./navBar.css"
function NavBar() {

  const {loginWithRedirect, logout, isAuthenticated} = useAuth0()

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
          { // ! si esta authenticado que muestre el boton de logout sino el boton de login
            isAuthenticated? <button onClick={() => logout()}>Logout</button> : <button onClick={() => loginWithRedirect()}>Login</button>
          }
          {/* <button onClick={() => loginWithRedirect()}>Login</button>
          <button onClick={() => logout()}>Logout</button> */}
        </div>
      </div>
    </>
  );
}

export default NavBar;
