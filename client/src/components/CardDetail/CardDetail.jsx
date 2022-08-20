import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemCount from "../ItemCount/ItemCount";
import "./CardDetail.css";
import { getPhoneDetail } from "../../redux/actions/actionCreators";

function CardDetail({ name }) {
  // const { id } = useParams();
  // console.log(id);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPhoneDetail(id));
  // }, [id, dispatch]);

  // const phone = useSelector((state) => state.detail);
  // console.log(phone);
  // console.log(phone[0]);
  // const { name, image } = phone[0];

  // const [itemTotal, setItemTotal] = useState();

  // function onAddItem(newItemCount) {
  //   setItemTotal(newItemCount);
  // }

  return (
    <div className="container card">
      {/* <div className="card_left">
        <img src={phone[0].image} alt="" />
      </div> */}
      {/* <div className="card_right">
        <h3 className="title-product">{phone[0].name}</h3>
        <p className="product-description">{phone[0].description}</p>
        <p className="product-description">{phone[0].weight}</p>
        <p className="product-description">{phone[0].rating}</p>
        <p className="product-description">{phone[0].review}</p>
        <div className="card_footer">
          <span className="price">{phone[0].price} $</span>
        </div>
        <div>
          {!itemTotal ? (
            <ItemCount
              stock={phone[0].quantity}
              initial={1}
              onAdd={onAddItem}
            />
          ) : (
            <Link to="/cart">
              <button className="addTo"> Go to Cart</button>
            </Link>
          )}
        </div>
      </div> */}
      <div>ESTE ES EL CARD DETAIL</div>
      <div>{name}</div>
    </div>
  );
}

export default CardDetail;
