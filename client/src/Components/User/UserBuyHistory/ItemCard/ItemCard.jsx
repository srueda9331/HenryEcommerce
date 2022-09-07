import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ItemCard({ order }) {
  console.log(order);
  return (
    <div>
      {order.data.additional_info.items.map((item) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.picture_url} />
            <Card.Body>
              <Card.Text>
                {item.unit_price}0,{item.quantity},{item.title}
              </Card.Text>
              .
              <Link to={`/detalle/${item.id}`}>
                <Button variant="primary">Ver detalle</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default ItemCard;
