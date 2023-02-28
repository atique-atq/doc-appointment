import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvier/AuthProvider";


const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      <li className="font-bold ml-3">
        <Link to="/">Home</Link>
        <Link to="/appointment">Get Appointment</Link>
      </li>
      {user?.email ? (
        <>
          <li className="font-bold ">
            <button
              onClick={handleLogOut}
              className="text-info  border border-info rounded-lg border-1 py-0 px-2 lg:mx-4"
            >
              Sign Out
            </button>
          </li>
          <li className="font-semibold">
            <button
              className="btn btn-ghost border-0 hover:bg-green-200 py-0 px-2"
              title={user?.displayName}
            >
              <div className="avatar">
                <div className="w-8 rounded-full">
                  {user?.photoURL ? <img src={user?.photoURL} alt="" /> : ""}
                </div>
              </div>
            </button>
          </li>
        </>
      ) : (
        <li className="font-bold text-info py-0 border border-info rounded-3xl border-1 lg:ml-10">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar px-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="ml-2 md:ml-20 text-xl font-semibold font-mono text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-pink-600">
            DocAppointmentBD
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
