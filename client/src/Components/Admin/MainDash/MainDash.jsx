import React from "react";
import Cards from "../CardsDashboard/Cards";
import Table from "../Table/Table";
import RightSide from "../RigthSide/RightSide"
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h2>Panel de Ventas</h2>
        <hr />
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;