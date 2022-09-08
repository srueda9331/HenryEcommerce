import React from 'react';
import Card from 'react-bootstrap/Card';
import './DefaultReviewcard.css';

function DefaultReviewCard() {
  return (
    <div>
      <Card className="defaultreviews__mainCardAlternative">
        <div className="defaultreviews__mainCard__headerContainer">
          <Card.Header className="defaultreviews__mainCard__title">
            <h2>
              5 <span>★</span>{' '}
            </h2>
          </Card.Header>
        </div>
        <Card.Body className="defaultreviews__mainCard__body">
          <Card.Text>
            La mejor página para comprar, super rápidos y confiables un placer
            haberlos encontrado!
          </Card.Text>
        </Card.Body>
        <p className="divider__reviewCard">________________________</p>
        <Card.Footer
          className="defaultreviews__mainCard__footer"
          style={{ borderRadius: '18px' }}
        >
          Nicolás Ala
        </Card.Footer>
      </Card>
    </div>
  );
}

export default DefaultReviewCard;
