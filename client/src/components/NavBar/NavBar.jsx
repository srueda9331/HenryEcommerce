import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuItems } from "./Menuitems";
import { useSelector } from "react-redux";
import CartWidget from "../CartWidget.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./NavBar.css";
import UserLoggedIn from "../UserLoggedIn/UserLoggedIn";
import { auth } from "../../firebase";

function NavBar() {
  const [clicked, setClicked] = useState(true);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <Link to="/">
        <h1 className="navbar-logo">
          E-commerce Name
          <i className="fa fa-heart"></i>
        </h1>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={!clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <SearchBar className="SearchBar" />
      <ul className={!clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className={item.cName} to={item.url}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <CartWidget />
      {/* {user.photoURL ? (
        <div>
          <img src={photoURL} alt="" />
          <h3>{displayName}</h3>
        </div>
      ) : (
        <Link to="/login">
          <button className="btn-login">Log In</button>
        </Link>
      )} */}
    </nav>
  );
}

export default NavBar;
