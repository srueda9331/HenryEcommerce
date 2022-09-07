import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ItemCard.css';

function ItemCard({ order }) {
  console.log(order);
  return (
    <div>
      {order.data.additional_info.items.map((item) => {
        return (
          <div className="container__itemcard">
            <div className="container__itemcard_item--img ">
              <Card.Img
                variant="top"
                src={item.picture_url}
                className="img__itemcard"
              />
            </div>
            <div className="container__itemcard_item ">
              <p>
                <strong>Precio:</strong>
              </p>
              <p>{Number(item.unit_price).toFixed(2)}</p>
            </div>
            <div className="container__itemcard_item ">
              <p>
                <strong>Cantidad:</strong>
              </p>
              <p>{item.quantity}</p>
            </div>
            <div className="container__itemcard_item ">
              <p>
                <strong>Nombre:</strong>
              </p>
              <p>{item.title}</p>
            </div>
            <div className="container__itemcard_item--button ">
              <Link to={`/detalle/${item.id}`}>
                <Button variant="primary">Ver detalle</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemCard;
