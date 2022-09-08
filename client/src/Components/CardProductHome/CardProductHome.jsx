import { React } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../Assets/Images/Logoblanco.png';
import './CardProductHome.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CardProductHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAll = () => {
    navigate('/menu');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };
  return (
    <Container>
      <Row className="sectionproduct mb-5 mt-5">
        <Col col={4} sm={6} md={5} lg={4} xl={3}>
          <div className="cardProductHome">
            <div className="cardProductHome__img__container__todos">
              <img
                src={logo}
                alt="imagen"
                className="cardProductHome__img img-fluid"
              />
            </div>
            <h1 className="cardProductsHome__tittle">Todo</h1>
            <div className="cardProductHome--overlay">
              <div className="cardProuctHome__Text">
                <h1 className="cardProductsHome__tittle">Todo</h1>
                <p className="hidden hide-text">
                  Visita todo lo que tenemos para ofrecerte.
                </p>

                <Button
                  onClick={handleAll}
                  className="productCard__content__box__h2"
                >
                  Ver mas
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CardProductHome;
