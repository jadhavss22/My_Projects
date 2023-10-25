import React from "react";
import { useState, useEffect } from "react";
import { LOGO_URL } from "../../Utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");

  // useEffect(() => {
  //   console.log("useEffect Called");
  // }, []); //  This is render when our component renders every time
  return (
    <div className="Header">
      <div className="LogoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="NavItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link>Cart</Link></li>
          <button
            className="login-button"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
              console.log("bntName", btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
