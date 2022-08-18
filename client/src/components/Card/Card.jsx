import React from "react";


export default function Card(props){
  const { id, name, image, price, description } = props;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt='phone-image' />
      <h3>{price}</h3>
      <p>{description}</p>
    </div>

  )

}