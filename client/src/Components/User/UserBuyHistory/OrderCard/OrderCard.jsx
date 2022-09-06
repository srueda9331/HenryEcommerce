import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function OrderCard({
  id,
  status,
  date,
  title,
  price,
  quantity,
  image,
  productid,
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{status}</Card.Title>
        <Card.Text>
          {date} , {price}0,{quantity},{image},{productid}
        </Card.Text>
        .
        <Link to={`/detalle/${productid}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default OrderCard;
