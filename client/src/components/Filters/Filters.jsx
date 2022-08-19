import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBrand, getPhones } from "../../redux/actions/actionCreators";


export default function Filters(){
const dispatch = useDispatch()
const brandNames = useSelector(state => state.phones)
console.log(brandNames);

useEffect(() => {
  dispatch(getPhones())
}, [dispatch])

const handleSelect = (e) => {
  dispatch(filterBrand(e.target.value))
};

  return (
    <div>
      <select onClick={(e) => handleSelect(e)}>
        <option value='All'>All</option>
        <option value='Samsung'>Samsung</option>
        <option value='Huawei'>Huawei</option>
        {/* <option value={brandNames[0].brand}>{brandNames[0].brand}</option> */}
      </select>
    </div>
  )
}