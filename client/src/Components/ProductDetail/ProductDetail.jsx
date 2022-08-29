import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { clearState, getProductById } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { addCartProduct } from '../../Redux/actions/actions';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const producto = useSelector((state) => state.productDetail);

  const addToCart = (id) => {
    dispatch(addCartProduct(id));
    Swal.fire({
      position: 'top-end',
      imageUrl:
        'https://www.pngitem.com/pimgs/m/423-4236284_png-images-success-icon-png-transparent-png-download.png',
      imageWidth: 80,
      imageHeight: 80,
      text: 'Producto agregado exitosamente',
      showConfirmButton: false,
      timer: 800,
      width: '12rem',
      height: '5rem',
      padding: '0.5rem',
    });
  };

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
                <p className="item__detail">
                  <strong>Brand:</strong> {producto.brands}
                </p>

                {producto.ram && (
                  <p>
                    {' '}
                    <strong>Ram:</strong> {producto.ram} gb
                  </p>
                )}
                {producto.storage && (
                  <p>
                    <strong>Storage:</strong> {producto.storage} gb
                  </p>
                )}
                {producto.camera && (
                  <p>
                    <strong>Camera:</strong> {producto.camera} Mpx
                  </p>
                )}
                {producto.weight && (
                  <p>
                    {' '}
                    <strong>Weight:</strong> {producto.weight} gr
                  </p>
                )}
                {producto.batery && (
                  <p>
                    <strong>Battery:</strong> {producto.batery} mAh
                  </p>
                )}

                <div className="productDetail__foot__container">
                  <div className="price__container">
                    <h3>
                      <strong>Precio: $ {producto.price}</strong>
                    </h3>
                  </div>
                  <div className="buttoncart__container">
                    <Button
                      as={Link}
                      to="/cart"
                      className="mt-3 mb-5"
                      onClick={() => addToCart(id)}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </div>
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
