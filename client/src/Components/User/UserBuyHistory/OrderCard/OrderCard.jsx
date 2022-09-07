import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCard from '../ItemCard/ItemCard';

function OrderCard({ id, status, date, order }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{date}</Card.Title>
        <Card.Title>{status}</Card.Title>
        <ItemCard order={order} />
      </Card.Body>
    </Card>
  );
}

export default OrderCard;
