import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <h1 className="app-name">HungerHub</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="login"
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
