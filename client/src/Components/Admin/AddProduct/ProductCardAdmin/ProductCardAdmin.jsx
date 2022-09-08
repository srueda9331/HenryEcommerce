import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PencilSquare, Trash, ArrowClockwise } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  deleteProduct,
  restoreProduct,
} from '../../../../Redux/actions/actions';
import { setImgProductHomeErr } from '../../../methods';

import './ProductCardAdmin.css';

function ProductCardAdmin({ data, isDeleted }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/admineditproducts/${data.id}`);
  };

  const onDelete = () => {
    dispatch(deleteProduct(data.id));
  };

  const onRestore = () => {
    dispatch(restoreProduct(data.id));
  };

  return (
    <Card style={{ width: '15rem' }} className="adminProductHome__card">
      <img
        // variant="top"
        src={data.image}
        className="adminProductHome__card__img img-card"
        alt="no img"
        onError={
          data.type === 'ingredients'
            ? (e) => (e) => setImgProductHomeErr(e)
            : null
        }
      />
      <Card.Body className="adminProductHome__cardBody">
        <Card.Title className="adminProductHome__cardTittle">
          {data.name}
        </Card.Title>
        <div className="productCard__buttons">
          <Button onClick={redirect} variant="secondary">
            <PencilSquare />
          </Button>

          <Button onClick={onDelete} variant="secondary">
            {<Trash />}
          </Button>

          <Button onClick={onRestore} variant="secondary">
            {<ArrowClockwise />}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCardAdmin;
