// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SideBar = (props) => {
  const userRole = useSelector((state) => state.user.role);
  const { email } = props;
  const [isOpen, setIsOpen] = useState(false);
  const sideBarRef = useRef(null);
  let { logout, loginWithPopup, isAuthenticated } = useAuth0();



  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* <------------BOTON MENU----------> */}
      <button
        onClick={toggleSidebar}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className={`inline-flex items-center p-2 ml-1 text-sm rounded-lghover:bg-yellow-700-2 focus:ring-gray-200 text-yellow-100 hover:bg-yellow-700 `}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* <------------SIDE BAR----------> */}
      <aside
        ref={sideBarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          !isOpen ? "-translate-x-full" : "sm:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 bg-yellow-900">
          <div className="mt-2 mb-3 flex items-center">
            <div className="ml-1 mr-1 w-8 h-8">
              <div className=" w-full h-full rounded-full overflow-hidden">
                <img
                  className="object-cover w-full h-full overflow-hidden"
                  src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                  alt="user photo"
                />
              </div>
            </div>

            <div className=" py-3">
              <p className="text-sm  text-gray-100 ">
                {email ? (
                  email
                ) : (
                  <button
                    onClick={loginWithPopup}
                    className="-ml-1 text-base rounded-lg bg-yellow-700 text-yellow-400 pl-24 pr-24 pt-1 pb-1 -mb-1"
                  >
                    Login
                  </button>
                )}
              </p>
            </div>
          </div>

          <ul className="space-y-3 font-medium h-5/6">
            {userRole === "admin" && (
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center p-2  rounded-lg text-white  hover:bg-yellow-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 transition duration-75 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/profile"
                href="#"
                className="flex items-center p-2  rounded-lg text-white  hover:bg-yellow-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
  
              </Link>
            </li>
            <li>
              <Link to= '/Dashboard/ordes'
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-yellow-700"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Ordes</span>
              </Link>
            </li>
          </ul>
          
          <ul>
            {isAuthenticated && (
              <li className="mt-8">
                <button
                  onClick={handleLogout}
                  className="flex items-center p-2 pr-36 rounded-lg text-white  hover:bg-yellow-700"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6  text-gray-400 transform -scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    ></path>
                  </svg>

                  <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
