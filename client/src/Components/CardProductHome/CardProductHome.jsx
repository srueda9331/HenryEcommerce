import { React } from 'react';
import hamburguesasMini from '../../Assets/Images/logofinal.png';
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

  const handleBurgers = () => {
    navigate('/menu');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleCombos = () => {
    navigate('/menu');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleBeverages = () => {
    navigate('/menu');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleAll = () => {
    navigate('/menu');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };
  return (
    <Container>
      <Row className="sectionproduct mb-5 mt-5">
        {/* <Col lg={3}>
          <div className="cardProductHome">
            <div className="cardProductHome__img__container">
              <img
                src={combitos}
                alt="imagen"
                className="cardProductHome__img img-fluid"
              />
            </div>
            <h1 className="cardProductsHome__tittle">Combos</h1>
            <div className="cardProductHome--overlay">
              <div className="cardProuctHome__Text">
                <h1>Combos</h1>
                <p>
                  Las mejores delicias en combos que se adaptan a tu estilo de
                  vida.
                </p>
                <Button
                  onClick={handleCombos}
                  className="productCard__content__box__h2"
                >
                  Ver mas
                </Button>
              </div>
            </div>
          </div>
        </Col> */}
        {/* <Col lg={3}>
          <div className="cardProductHome">
            <div className="cardProductHome__img__container">
              <img
                src={bebidas}
                alt="imagen"
                className="cardProductHome__img img-fluid"
              />
            </div>
            <h1 className="cardProductsHome__tittle">Bebidas</h1>
            <div className="cardProductHome--overlay">
              <div className="cardProuctHome__Text">
                <h1 className="cardProductsHome__tittle">Bebidas</h1>
                <p>
                  Bebidas a la temperatura perfecta para acompañar tu
                  hamburguesa
                </p>

                <Button
                  onClick={handleBeverages}
                  className="productCard__content__box__h2"
                >
                  Ver mas
                </Button>
              </div>
            </div>
          </div>
        </Col> */}
        <Col lg={3}>
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
