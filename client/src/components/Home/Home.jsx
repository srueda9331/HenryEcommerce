import "./Home.css";
import React from "react";
import Cards from "../Cards/Cards";



function Home() {
  

  return (
    <div className="intro-logo">
      <h3>Your Place to buy</h3>
      <Cards />
      <div className="intro-button"></div>
      {/* <span> change your phone Now!</span> */}
     
    </div>
  );
}

export default Home;