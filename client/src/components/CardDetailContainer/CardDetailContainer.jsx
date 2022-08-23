import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPhoneDetail } from "../../redux/actions/actionCreators";
import CardDetail from "../CardDetail/CardDetail";
import "./CardDetailContainer.css";

function CardDetailContainer() {
  return (
    <div className="next-logo">
      {/* CardDetail */}
      <CardDetail />
    </div>
  );
}

export default CardDetailContainer;
