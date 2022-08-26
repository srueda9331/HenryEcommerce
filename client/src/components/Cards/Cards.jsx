import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "../../redux/actions/actionCreators";
import Card from "../Card/Card.jsx";
import "./Cards.css";

// export default function Cards() {
export default function Cards({currentPhones}) {

  const dispatch = useDispatch();
  const allPhones = useSelector((state) => state.phones);

  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);

  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "row",
    //   flexWrap: "wrap",
    //   justifyContent: "center",
    // }}
    // className="container"
    >
      <div className="card-container">
        {/* {allPhones.map((product) => { */}
        {currentPhones.map((product) => {

          return (
            // <div>
            //   {/* <Card name={p.name} image={p.image} /> */}
            //   <h2>{p.name.length > 8 ? p.name.slice(8) : p.name}</h2>
            //   <img
            //     style={{ height: "250px", width: "250px" }}
            //     src={p.image}
            //     alt="imagen-cel"
            //   />
            //   <h5>{p.brand}</h5>
            //   <p>{p.price}</p>
            // </div>
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              brand={product.brand}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}