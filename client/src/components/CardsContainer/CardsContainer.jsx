import React from "react";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import "./CardsContainer.css";

function CardsContainer() {
  return (
    <div>
      <div className="cardscontainer">
        <Filters />
      </div>
      <Cards />;
    </div>
  );
}

export default CardsContainer;
