import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "../../redux/actions/actionCreators";
import CheckoutCard from "./CheckoutCard";
import "../Cards/Cards.css";
import { Link } from "react-router-dom";
import SumTotal from "../SumTotal/SumTotal";

// export default function Cards() {
export default function CheckoutPage() {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1 style={{marginLeft: '540px'}}>Shopping Cart</h1>
      </div>
    
      <div className="card-container">
        {cart?.map((product) => {

          return (
            
            <CheckoutCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              brand={product.brand}
              price={product.price}
              
            />
          );
        })}
      <SumTotal />

      </div>
      <Link to='/'>
        <button className="checkout-volver-boton">REGRESAR</button>
      </Link>
    </div>
  );
}

