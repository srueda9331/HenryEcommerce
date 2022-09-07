import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterBrand,
  filterDisplay,
  getProduct,
  orderPrice,
  filterRam,
  filterByCamera,
  filterBattery,
} from '../../Redux/actions/actions';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import './FiltersMenu.css';

function FiltersMenu({ setFilter, filters }) {
  const handleOnChange = (e) => {
    setFilter(e.target.name, e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  let size = useSelector((state) => state.products?.map((el) => el.batery));

  //console.log(size);

  const handleOrder = (e) => {
    //console.log(e.target.value);
    dispatch(orderPrice(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterBrand(e.target.value));
  };

  const handleDisplay = (e) => {
    dispatch(filterDisplay(e.target.value));
  };

  const handleRam = (e) => {
    dispatch(filterRam(e.target.value));
  };

  const handleCamera = (e) => {
    dispatch(filterByCamera(e.target.value));
  };

  const handleBattery = (e) => {
    dispatch(filterBattery(e.target.value));
  };

  return (
    <Container>
      <div className="m-3 order__container">
        <div className="filter">
          <h4 className="filter__tittle">Ordenar:</h4>
          <select
            name="order"
            onChange={handleOnChange}
            onClick={(e) => handleOrder(e)}
            className="select__order"
          >
            <option value="Max">Mayor a menor precio</option>
            <option value="Min">Menor a mayor precio</option>
          </select>
        </div>
        <br />
        <br />
        <h4 className="filter__tittle">Filtrar por:</h4>
        <div className="filter">
          <label>
            Por marca:
            <br />
            <select onClick={(e) => handleFilter(e)} className="filter">
              <option value="All">All</option>
              <option value="Samsung">Samsung</option>
              <option value="Huawei">Huawei</option>
              <option value="Apple">Apple</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Asus">Asus</option>
            </select>
          </label>
        </div>
        <br />
        <div>
          <label>
            Tamaño de pantalla:
            <br />
            <select onClick={(e) => handleDisplay(e)} className="filter">
              <option value="All">All</option>
              <option value="menor-display">Menor a 6.3 ''</option>
              <option value="entre-display">Entre 6.3 y 6.5 ''</option>
              <option value="mayor-display">Mayor a 6.5 ''</option>
            </select>
          </label>
        </div>
        <br />
        <div>
          <label>
            Memoria RAM:
            <br />
            <select onClick={(e) => handleRam(e)} className="filter">
              <option value="All">All</option>
              <option value="4">Menor a 3.99 GB</option>
              <option value="6">Entre 4 y 6.99 GB</option>
              <option value="8">Entre 7 y 9 GB</option>
              <option value="12">Mayor a 9 GB</option>
            </select>
          </label>
        </div>
        <br />
        <div>
          <label>
            Por Camara:
            <br />
            <select onClick={(e) => handleCamera(e)} className="filter">
              <option value="All">All</option>
              <option value="12">Menor a 12.99 Mpx</option>
              <option value="13">Entre 13 Mpx y 24.99 Mpx</option>
              <option value="25">Entre 25 Mpx y 49 Mpx</option>
              <option value="40">Mayor a 49 Mpx</option>
            </select>
          </label>
        </div>
        <br />
        <div>
          <label>
            Por Batería:
            <br />
            <select onClick={(e) => handleBattery(e)} className="filter">
              <option value="All">All</option>
              <option value="3750">Menor a 3750 mAh</option>
              <option value="4100">Entre 3750 y 4100 mAh</option>
              <option value="4600">Entre 4101 y 4600 mAh</option>
              <option value="4800">Mayor a 4600 mAh</option>
            </select>
          </label>
        </div>
        <div className="filters__btn__container"></div>
      </div>
    </Container>
  );
}

export default FiltersMenu;
