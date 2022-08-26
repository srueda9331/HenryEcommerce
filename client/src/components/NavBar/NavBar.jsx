import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuItems } from "./Menuitems";
import { Button } from "../Button";
import CartWidget from "../CartWidget.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./NavBar.css";
import { auth } from "../../firebase";
import UserLoggedIn from "../UserLoggedIn/UserLoggedIn";

function NavBar() {
  const [clicked, setClicked] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);
  const [init, setInit] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const userListener = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      if (init) {
        setInit(false);
      }
    });

    return userListener;
  }, [init]);
  return (
    <nav className="NavbarItems">
      <Link to="/">
        <h1 className="navbar-logo">
          E-commerce Name
          <i className="fa fa-heart"></i>
        </h1>
      </Link>
      <Link to='/create'>Sube un celular</Link>
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
      
      <Button>
        <Link to="/login">Sign Up</Link>
      </Button>
      {user ? <UserLoggedIn /> : null}
    </nav>
  );
}

export default NavBar;
