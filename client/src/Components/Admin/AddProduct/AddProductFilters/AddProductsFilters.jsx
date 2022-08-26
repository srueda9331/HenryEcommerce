import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate, Link } from 'react-router-dom';

import './AddProductFilters.css';

function AddProductsFilters({ setFilter, filters }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (e) => {
    setFilter(e.target.name, e.target.value);
  };

  const creaproduct = () => {
    navigate('/adminCreate');
  };

  return (
    <Container>
      <div className="m-3 order__container">
        <Button
          onClick={handleShow}
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
            onClick={handleOnChange}
            name="isDeleted"
            value="true"
            className={
              filters.isDeleted === 'true'
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
