import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import ItemCount from "../ItemCount/ItemCount";
import "./CardDetail.css";
import {
  cleanDetail,
  getPhoneDetail,
} from "../../redux/actions/actionCreators";

function CardDetail(props) {
  // const { id } = useParams();
  // console.log(id);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPhoneDetail(props.match.params.id));
  // }, [dispatch]);

  // const phone = useSelector((state) => state.detail);
  // console.log(phone);
  // console.log(phone[0]);
  // const { name, image } = phone[0];

  // const [itemTotal, setItemTotal] = useState();

  // function onAddItem(newItemCount) {
  //   setItemTotal(newItemCount);
  // }
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoneDetail(id));
    return () => dispatch(cleanDetail());
  }, [id, dispatch]);

  const phone = useSelector((state) => state.detail);
  console.log(phone[0]);

  return (
    <div>
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
      {phone[0] ? (
        // <div>
        //   <h1>Name: {phone[0].name}</h1>
        //   <img src={phone[0].image} alt="" />
        //   <h3>Price: {phone[0].price}</h3>
        //   {/* <h2> Brand: {phone[0].brand}</h2> */}
        //   <p>
        //     <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
        //     {phone[0].description}
        //   </p>
        //   <h4>Height: {phone[0].height}</h4>
        //   <h4>Weight: {phone[0].weight}</h4>
        //   <h4>Rating: {phone[0].rating}</h4>
        //   {phone[0].quantity > 0 ? <h3>Stock: True</h3> : <h3>Stock: false</h3>}
        //   <h4>Review : {phone[0].review}</h4>
        // </div>

        <div className="container">
          <div className="card_left">
            <img src={phone[0].image} alt="" />
          </div>
          <div className="card_right">
            <h3 className="title-product">{phone[0].name}</h3>
            <p className="product-description">{phone[0].description}</p>

            <div className="detail-container">
              <div className="cont">
                <strong>Weight:</strong>
                <h4 className="detail-description">{phone[0].weight}</h4>
              </div>
              <div className="cont">
                <strong>Raiting:</strong>
                <h4 className="detail-description">{phone[0].rating}</h4>
              </div>
              <div className="cont">
                <strong>Review:</strong>
                <h4 className="detail-description">{phone[0].review}</h4>
              </div>
            </div>

            <div className="card_footer">
              <span className="price">{phone[0].price} $</span>
            </div>
          </div>
        </div>
      ) : (
        <h1>{`LO SENTIMOS, NO EXISTE NINGÚN CELULAR CON ID "${id}"`}</h1>
      )}
    </div>
  );
}

export default CardDetail;
