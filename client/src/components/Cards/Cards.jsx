import React from "react";
import Card from "../Card/Card";


export default function AllPhones({allPhones}){

  {
    allPhones && allPhones.map(phone => {
      return <Card 
        key={phone.id}
        name={phone.name}
        image={phone.image}
        price={phone.price}
        description={phone.description}
      />      
    })
  }

}