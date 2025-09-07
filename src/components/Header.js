import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");

  return (
    <div className="flex justify-between items-center bg-red-50 fixed w-full z-50 top-0 left-0">
      <div>
        <img className="w-30" src={LOGO_URL}></img>
      </div>
      <h1 className="text-red-500 font-bold text-3xl -ml-150">HungerHub</h1>
      <div className="flex items-center">
        <ul className="flex p-6">
          <li className="px-4 hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-red-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-red-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-red-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-red-500">Cart</li>
          <li className="px-4">
            <button
              className="cursor-pointer bg-gray-200 rounded-sm px-2 border border-black-100"
              onClick={() =>
                logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login")
              }
            >
              {logBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
