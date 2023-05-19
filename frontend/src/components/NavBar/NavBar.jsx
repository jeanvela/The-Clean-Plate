import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
//import "./navBar.css"

function NavBar() {
  let { logout, isAuthenticated, loginWithPopup, user } = useAuth0();
  const [email, setEmail] = useState("");
  const { amount } = useSelector((state) => state.cart);
  // let data = user.email

  // const handleSubmitData = async () => {
  //   if (!isAuthenticated) {
  //     await loginWithPopup()
  //   }
  //   const data = user? user.email : "xd"
  //   console.log(data)

  // };

  // useEffect(() => {
  //   const getUserEmail = async () => {
  //     if (isAuthenticated && user) {
  //      setEmail(user.email)
  //     }
  //   }
  //   getUserEmail()
  //   console.log(email)
  // },[isAuthenticated,user])

  // const handleLogin = async () => {
  //   await loginWithPopup()
  // }
  useEffect(() => {
    const getUserEmail = async () => {
      if (isAuthenticated && user) {
        setEmail(user.email);
      }
    };

    getUserEmail();
  }, [isAuthenticated, user]);

  useEffect(() => {
    console.log(email);
    if (isAuthenticated) {
      axios
        .post("http://localhost:3001/auth", { username: email })
        .then((response) => console.log(response))
        .catch((error) => consoel.log(error));
    }
  }, [email]);

  const handleLogin = async () => {
    await loginWithPopup();
  };

  // if (isAuthenticated) {
  //   return axios.post('http://localhost:3001/auth',email)
  // }

  return (
    <>
      <div className="flex flex-row  justify-between items-center  bg-yellow-900 py-6 text-yellow-400 ">
        <Link to="/">
          <h2 className="font-normal text-2xl ml-4">The Clean Plate</h2>
        </Link>

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
          {
            // ! si esta authenticado que muestre el boton de logout sino el boton de login
            isAuthenticated ? (
              <button onClick={() => logout()}>Logout</button>
            ) : (
              <button onClick={() => handleLogin()}>Login</button>
            )
          }
        </div>
      </div>
    </>
  );
}

export default NavBar;
