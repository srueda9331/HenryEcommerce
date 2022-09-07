import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCard from '../ItemCard/ItemCard';
import './OrderCard.css';

function OrderCard({ id, status, date, order }) {
  const year = date.slice(0, 4);
  const mm = date.slice(5, 7);
  const day = date.slice(8, 10);
  return (

    <div className="order_container col-12">
      <Card>
        <Card.Body>
          <div>
            <Card.Title>
              <p>
                <strong>Número de Compra:</strong> {id}
              </p>
            </Card.Title>
          </div>
          <Card.Title>
            <p>
              <strong>Fecha:</strong> {day}/{mm}/{year}
            </p>
          </Card.Title>

          <Card.Title>
            <p>
              <strong>Estado:</strong>
              {status === 'Pendiente' ? (
                <p className="pending">{status}</p>
              ) : (
                <p className="ready">{status}</p>
              )}
            </p>
          </Card.Title>
          <ItemCard order={order} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default OrderCard;
