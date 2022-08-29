import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterBrand,
  filterDisplay,
  getProduct,
  orderPrice,
  filterRam,
  filterByCamera
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

  let size = useSelector(state => state.products.map(el => el.display))
  console.log(size);

  const handleOrder = (e) => {
    console.log(e.target.value);
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

  return (
    <Container>
      <div className="m-3 order__container">
        <Button as={Link} to="/addProduct" className="createBurger__btn">
          Add Product
        </Button>

        <select
          name="order"
          onChange={handleOnChange}
          onClick={(e) => handleOrder(e)}
          className="select__order"
        >
          <option value="All">Todos</option>
          <option value="Max">Mayor a menor precio</option>
          <option value="Min">Menor a mayor precio</option>
        </select>

        <label>
          Filtrar por marca:
          <select onClick={(e) => handleFilter(e)}>
            <option value="All">All</option>
            <option value="Samsung">Samsung</option>
            <option value="Huawei">Huawei</option>
            <option value="Apple">Apple</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Asus">Asus</option>

          </select>
        </label>
        <label>
          Filtrar por tamaño de pantalla:
          <select onClick={(e) => handleDisplay(e)}>
            <option value="menor-display">Menor a 6.3 ''</option>
            <option value="entre-display">Entre 6.3 a 6.5 ''</option>
            <option value="mayor-display">Mayor a 6.5 ''</option>

          </select>
        </label>
      </div>
      <div className="filter">
        <label>
          Filtrar por memoria RAM:
          <select onClick={(e) => handleRam(e)}>
            <option value="All">All</option>
            <option value="2">2GB</option>
            <option value="3">3 GB</option>
            <option value="4">4 GB</option>
            <option value="6">6 GB</option>
            <option value="8">8 GB</option>
            <option value="12">12 GB</option>
            <option value="16">16 GB</option>
            <option value="18">18 GB</option>
          </select>
        </label>
      </div>
      <div className="filter">
        <label>
          Filtrar por Camara:
          <select onClick={(e) => handleCamera(e)}>
            <option value="All">All</option>
            <option value="8">8 Mpx</option>
            <option value="12">12 Mpx</option>
            <option value="13">13 Mpx</option>
            <option value="24">24 Mpx</option>
            <option value="40">40 Mpx</option>
            <option value="48">48 Mpx</option>
            <option value="50">50 Mpx</option>
            <option value="64">64 Mpx</option>
            <option value="108">108 Mpx</option>
          </select>
        </label>
      </div>
      <div className="filters__btn__container">
        {/* <ButtonGroup
          aria-label="Filter Buttons"
          className="me-2 filter__btn"
          size="sm"
        >
          <Button
            name="category"
            value=""
            onClick={handleOnChange}
            className={
              filters.category === '' ? 'filter__btn activeBtn' : 'filter__btn'
            }
          >
            Todo
          </Button>
          <Button
            name="category"
            value="burgers"
            onClick={handleOnChange}
            className={
              filters.category === 'burgers'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Hamburguesas
          </Button>
          <Button
            name="category"
            value="combos"
            onClick={handleOnChange}
            className={
              filters.category === 'combos'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Combos
          </Button>
          <Button
            name="category"
            value="beverages"
            onClick={handleOnChange}
            className={
              filters.category === 'beverages'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Bebidas
          </Button>
          <Button
            name="category"
            value="fries"
            onClick={handleOnChange}
            className={
              filters.category === 'fries'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Papas
          </Button>

          <Button
            name="isVeggie"
            value="true"
            onClick={handleOnChange}
            className={
              filters.isVeggie === 'true'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Veggie
          </Button>
        </ButtonGroup> */}
      </div>
    </Container>
  );
}

export default FiltersMenu;
