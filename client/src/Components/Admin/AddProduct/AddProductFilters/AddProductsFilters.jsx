import { React, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate, Link } from 'react-router-dom';
import { getProduct } from '../../../../Redux/actions/actions';
import { useDispatch } from 'react-redux';

import './AddProductFilters.css';

function AddProductsFilters({ setFilter, filters }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  function filter(e) {
    const value = e.target.value;
    let st = '';
    let isDeleted = '';
    if (value === 'true') {
      isDeleted = true;
    } else if (value === 'false') {
      isDeleted = '';
    }
    dispatch(getProduct(st, isDeleted));
  }

  const creaproduct = () => {
    navigate('/adminCreate');
  };

  return (
    <Container>
      <div className="m-3 order__container">
        <Button
          onClick={creaproduct}
          variant="secondary"
          className="productFilters__btnModal"
        >
          CREAR PRODUCTOS
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Crear:</Modal.Title>
          </Modal.Header>
          <div className="btn__modal__container">
            <Button
              onClick={creaproduct}
              className="btn__modal__create"
              variant="secondary"
            >
              Product
            </Button>
          </div>
        </Modal>
      </div>
      <hr />
      <div className="">
        <ButtonGroup
          aria-label="Filter Buttons"
          className="me-2 filter__btn"
          size="sm"
        >
          <Button
            onClick={filter}
            name="isDeleted"
            value="false"
            className={
              filters.isDeleted === 'true'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Activos
          </Button>
          <Button
            onClick={filter}
            name="isDeleted"
            value="true"
            className={
              filters.isDeleted === 'false'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Inactivos
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default AddProductsFilters;
