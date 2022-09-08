/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../../Assets/Images/logofinal.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setOrders } from '../../../Redux/actions/actions';
import {
  HouseFill,
  PeopleFill,
  BagCheckFill,
  EnvelopePaperFill,
  BoxArrowLeft,
  ClipboardDataFill,
  FileSpreadsheetFill,
} from 'react-bootstrap-icons';

import './AdminNavBar.css';

function AdminNavBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => dispatch(setOrders()), 15000);
    dispatch(setOrders());

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      <Navbar bg="light" expand={false} className="mb-3 adminNavBar">
        <Container>
          <Navbar.Brand as={Link} to="/adminhome">
            <img src={logo} alt="logo henrys" className="adminNavBar__logo" />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>3Jota Admin</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  to={'/adminhome'}
                  className="adminNavBar__link"
                >
                  <HouseFill />
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={'/adminusers'}
                  className="adminNavBar__link"
                >
                  <PeopleFill /> Usuarios
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={'/adminproducts'}
                  className="adminNavBar__link"
                >
                  <ClipboardDataFill /> Productos
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={'/admincupon'}
                  className="adminNavBar__link"
                >
                  <FileSpreadsheetFill /> Cupones
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={'/admindashboard'}
                  className="adminNavBar__link"
                >
                  <BagCheckFill /> Ventas
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={'/adminnewsletter'}
                  className="adminNavBar__link"
                >
                  <EnvelopePaperFill /> Novedades
                </Nav.Link>
                <Nav.Link as={Link} to={'/'} className="adminNavBar__link">
                  <BoxArrowLeft />
                  Salir
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavBar;
