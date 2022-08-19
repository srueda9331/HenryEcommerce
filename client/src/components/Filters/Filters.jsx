import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBrand, getPhones, orderPrice } from "../../redux/actions/actionCreators";


export default function Filters(){
const dispatch = useDispatch()
const brandNames = useSelector(state => state.phones)
console.log(brandNames);

useEffect(() => {
  dispatch(getPhones())
}, [dispatch])

const handleOrder = (e) => {
  dispatch(orderPrice(e.target.value))
};

const handleFilter = (e) => {
  dispatch(filterBrand(e.target.value))
};

  return (
    <div>
      <label style={{color:'white'}}>Ordenar por precio:
        <select onClick={(e) => handleOrder(e)}>
          <option value='All'>Todos</option>
          <option value='Max'>Mayor a menor</option>
          <option value='Min'>Menor a mayor</option>
        </select>
      </label>
      <br />
      <label style={{color:'white'}}>Filtrar por marca: 
        <select onClick={(e) => handleFilter(e)}>
          <option value='All'>All</option>
          <option value='Samsung'>Samsung</option>
          <option value='Huawei'>Huawei</option>
          {/* <option value={brandNames[0].brand}>{brandNames[0].brand}</option> */}
        </select>
      </label>
     
      
    </div>
  )
}