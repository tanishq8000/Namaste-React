import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to store using a selector in redux
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-red-50 fixed w-full z-50 top-0 left-0">
      <div>
        <img className="w-30" src={LOGO_URL}></img>
      </div>
      <h1 className="cursor-pointer text-red-500 font-bold text-3xl -ml-150">
        <Link to="/">HungerHub</Link>
      </h1>
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
          <li className="px-4 relative">
            <Link to="/cart">
              <span className="text-2xl cursor-pointer">🛒</span>
            </Link>

            <span className="absolute -top-1 -right-0 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          </li>
          <li className="px-4">
            <button
              className={`
    cursor-pointer rounded-sm px-2 border
    ${
      logBtn === "Login"
        ? "bg-gray-200 border-black-100" // Classes when not logged in
        : "bg-green-700 text-white"
    } // Classes when logged in
  `}
            >
              {loggedInUser}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
