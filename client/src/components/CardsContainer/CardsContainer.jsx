import React from "react";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import "./CardsContainer.css";

function CardsContainer() {
  return (
    <div className="cards-container">
      <div className="filters-container">
        <Filters />
      </div>
      <Cards />;
    </div>
  );
}

export default CardsContainer;
