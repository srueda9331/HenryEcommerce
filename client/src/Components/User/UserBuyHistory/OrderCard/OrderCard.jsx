import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCard from '../ItemCard/ItemCard';

function OrderCard({ id, status, date, order }) {
  return (
<<<<<<< Updated upstream
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{date}</Card.Title>
        <Card.Title>{status}</Card.Title>
        <ItemCard order={order} />
      </Card.Body>
    </Card>
=======
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
>>>>>>> Stashed changes
  );
}

export default OrderCard;
