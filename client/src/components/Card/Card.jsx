import { IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../../redux/actions/actionTypes";
import "./Card.css";

function Card({ id, name, image, brand, price }) {

  const dispatch = useDispatch();

  const addToKart = () => {
     dispatch({
      type: ADD_TO_CART,
      payload: {
        id: id,
        name: name,
        image: image,
        price: price
      }
      
    })
  }

  return (
    <div>
      <Link to={"/phone/" + id}>
        {/* <h2>{name.length > 8 ? name.slice(8) : name}</h2>
        <img
          style={{ height: "250px", width: "250px" }}
          src={image}
          alt="imagen-cel"
        />
        <h5>{brand}</h5>
        <p>{price}</p> */}

        <div className="page-wrapper">
          <div className="page-inner">
            <div className="row">
              <div className="el-wrapper">
                <div className="box-up">
                  <img className="img-card" src={image} alt="" />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">
                        {name.length > 10
                          ? name[0].toUpperCase() + name.slice(1, 30)
                          : name}
                      </span>
                    </div>
                    <div className="a-size">
                      <span className="size">{brand}</span>
                    </div>
                  </div>
                </div>

                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>

                  <p className="cart" href="#">
                    <span className="price">${price}</span>
                    <span className="add-to-cart">
                      <span className="txt">Add to cart:
                        <IconButton onClick={addToKart}>
                          <AddShoppingCart style={{color: 'white'}}/>
                        </IconButton>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
