import React from "react";
import { useSelector } from "react-redux";

export default function SumTotal(){

  const totalMoney = useSelector(state => state.cart.length > 0? state.cart.map(p => p.price) : 0) 
  const sumEachOne = totalMoney[0]? totalMoney.reduce((previousValue, currentValue) => previousValue + currentValue) : null

  return (

    <div>
      <h5>Cantidad: {totalMoney[0]?  totalMoney.length : '0'} </h5>
      <h4>Total: { totalMoney[0]? sumEachOne.toFixed(3) :'$ ' + totalMoney}</h4>
      <button style={{backgroundColor: 'green', border: 'none', padding: '5px', fontWeight: 'bold', borderRadius: '5px'}}>Confirmar</button>
    </div>
  )
}