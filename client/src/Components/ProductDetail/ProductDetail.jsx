import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { clearState, getProductById } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { TbPlant } from 'react-icons/tb';
import { CgSize } from 'react-icons/cg';
import Loading from '../Loading/Loading';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const producto = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(getProductById(id));
    return () => {
      dispatch(clearState());
    };
  }, [dispatch, id]);

  return (
    <div>
      <Container className="productDetail__container">
        <hr />
        {producto.length === 0 ? (
          <Loading />
        ) : (
          <Row>
            <Col lg={6} sm={12} className="mb-2">
              <h1 className="productDetail__tittle">{producto.name}</h1>
              <img
                src={producto.image}
                className="productDetail__img img-fluid"
                alt="imagen del producto"
              />
            </Col>
            <Col lg={6} sm={12}>
              <section className="productDetail__map__container">
                <h2>Descripción:</h2>
                {producto.description}
                <p>
                  <TbPlant />
                  Brand: {producto.brands}
                </p>

                {producto.ram && (
                  <p>
                    <CgSize />
                    ram: {producto.ram} gb
                  </p>
                )}
                {producto.storage && (
                  <p>
                    <CgSize />
                    storage: {producto.storage} gb
                  </p>
                )}
                {producto.weight && (
                  <p>
                    <CgSize />
                    weight: {producto.weight} gr
                  </p>
                )}
                {producto.batery && (
                  <p>
                    <CgSize />
                    battery: {producto.batery} mAh
                  </p>
                )}
                 {producto.height && (
                  <p>
                    <CgSize />
                    display: {producto.display} ''
                  </p>
                )}

                <p>
                  <strong>Precio: $ {producto.price}</strong>
                </p>
              </section>
            </Col>
          </Row>
        )}

        <hr />
        <Button as={Link} to="/menu" className="mt-3 mb-5">
          Volver al Menú
        </Button>
      </Container>
    </div>
  );
}

export default ProductDetail;
