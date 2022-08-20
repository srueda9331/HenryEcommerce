import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPhoneDetail } from "../../redux/actions/actionCreators";
import CardDetail from "../CardDetail/CardDetail";

function CardDetailContainer(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoneDetail(id));
  }, [id, dispatch]);

  const phone = useSelector((state) => state.detail);
  console.log(phone);

  return (
    <div>
      <div className="next-logo">
        <CardDetail name={phone.name} />
      </div>
    </div>
  );
}

export default CardDetailContainer;
