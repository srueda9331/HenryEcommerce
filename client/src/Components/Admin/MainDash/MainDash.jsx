import React from 'react';
import Cards from '../CardsDashboard/Cards';
import Table from '../Table/Table';
import RightSide from '../RigthSide/RightSide';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import orderReady from '../../../Assets/Images/Admin/ready.png';
import pendingdOrder from '../../../Assets/Images/Admin/pending.png';
import './MainDash.css';

const MainDash = () => {
  return (
    <Container className="mt-5">
      <h1>Gestioná tus ordenes</h1>
      <hr />
      {/* <Cards /> */}
      <div className="employeeHome__container">
        <div className="employee__cards__container">
          <Card style={{ width: '18rem' }} className="employee__card">
            <Card.Img
              variant="top"
              src={pendingdOrder}
              className="employee__card__img"
            />
            <Card.Body className="employee__cardBody">
              <Card.Title>
                <h3>Pedidos Pendientes</h3>
              </Card.Title>
              <Button variant="secondary" as={Link} to="/adminpendingorders">
                Ingresar
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="employee__card">
            <Card.Img
              variant="top"
              src={orderReady}
              className="employee__card__img"
            />
            <Card.Body className="employee__cardBody">
              <Card.Title>
                <h3>Pedidos Listos</h3>
              </Card.Title>
              <Button variant="secondary" as={Link} to="/adminordersready">
                Ingresar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default MainDash;
