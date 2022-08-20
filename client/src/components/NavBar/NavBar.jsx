import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuItems } from "./Menuitems";
import CartWidget from "../CartWidget.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./NavBar.css";

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
      <button>Sign Up</button>
    </nav>
  );
}

export default NavBar;
