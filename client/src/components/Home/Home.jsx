import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
// import Cards from "../Cards/Cards";
// import Filters from "../Filters/Filters";

function Home() {
  return (
    <div className="container-home">
      <div className="intro-logo">
        <h3>Your Place to buy</h3>
        {/* <Filters /> */}
        {/* <Cards /> */}
        <span className="small-description"> change your phone Now!</span>
      </div>
    </div>
  );
}

export default Home;
