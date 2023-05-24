import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { BsCart4 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { setUserRole } from "../../features/userSlice.js";
//import "./navBar.css"
import SideBar from "../sideBar/SideBar";

function NavBar() {
  let {
    logout,
    isAuthenticated,
    loginWithPopup,
    user,
    getAccessTokenSilently,
  } = useAuth0();
  const [email, setEmail] = useState("");
  const { amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.user.role);

  useEffect(() => {
    const getToken = (token) => {
      localStorage.setItem("access_token", token);
    };
    const getUserEmail = async () => {
      if (isAuthenticated && user) {
        const accesToken = await getAccessTokenSilently();
        setEmail(user.email);
        getToken(accesToken);
      }
    };
    getUserEmail();
  }, [isAuthenticated, user]);

  useEffect(() => {
    console.log(email);
    if (isAuthenticated) {
      const token = localStorage.getItem("access_token");
      axios
        .post(
          "http://localhost:3001/auth",
          { username: email },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          const role = response.data.roles[0].name;
          dispatch(setUserRole(role));
          console.log(role);
        })
        .catch((error) => console.log(error));
    }
  }, [email]);

  const handleLogin = async () => {
    await loginWithPopup();
  };

  return (
    <>
      <div className="flex flex-row  justify-between items-center  bg-yellow-900 py-6 text-yellow-400 ">
        <div className="flex items-center">
          <SideBar />
          <Link to="/">
            <h2 className="font-normal text-2xl ml-4">The Clean Plate</h2>
          </Link>
        </div>

        <SearchBar />

        <div className="container-links flex flex-row mr-4">
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
          {isAuthenticated ? (
            <button onClick={() => logout()}>Logout</button>
          ) : (
            <button onClick={() => handleLogin()}>Login</button>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
