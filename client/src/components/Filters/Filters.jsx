import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBrand,
  getPhones,
  orderPrice,
} from "../../redux/actions/actionCreators";
import "./Filters.css";

export default function Filters() {
  const dispatch = useDispatch();
  const brandNames = useSelector((state) => state.brands);
  console.log(brandNames);

  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);

  const handleOrder = (e) => {
    dispatch(orderPrice(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterBrand(e.target.value));
  };

  return (
    <div className="filter-container">
      <div className="filter">
        <label>
          Ordenar por precio:
          <select onClick={(e) => handleOrder(e)}>
            <option value="All">Todos</option>
            <option value="Max">Menor a Mayor</option>
            <option value="Min">Mayor a Menor</option>
          </select>
        </label>
      </div>
      <div className="filter">
        <label>
          Filtrar por marca:
          <select onClick={(e) => handleFilter(e)}>
            <option value="All">All</option>
            <option value="Samsung">Samsung</option>
            <option value="Huawei">Huawei</option>
            {/* <option value={brandNames[0].brand}>{brandNames[0].brand}</option> */}
          </select>
        </label>
      </div>
    </div>
  );
}
