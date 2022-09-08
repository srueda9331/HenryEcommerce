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
  const user = useSelector((state) => state.loginState);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const addToCart = (id) => {
    let payload = {};
    if (user === undefined) {
      payload = {
        idtelefono: id,
      };
    }
    if (user === null) {
      payload = {
        idtelefono: id,
      };
    }
    if (user != null) {
      payload = {
        idtelefono: id,
        iduser: user.id,
      };
    }
    dispatch(addCartProduct(payload));
    Swal.fire({
      position: 'top-end',
      imageUrl:
        'https://res.cloudinary.com/dc8w6pspj/image/upload/v1662498810/sucess_otelvh.png',
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

  // function setScrollToTop() {
  //   window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  //   dispatch(changePagina(1));
  // }

  useEffect(() => {
    dispatch(getProductById(id));
    scrollToTop();
    return () => {
      dispatch(clearState());
    };
  }, [dispatch, id]);

  return (
    <div>
      <Container className="productDetail__container">
        <hr />
        {producto?.length === 0 ? (
          <Loading />
        ) : (
          <Row>
            <Col lg={5} sm={12} className="mb-2">
              <h1 className="productDetail__tittle">{producto?.name}</h1>
              <img
                src={producto?.image}
                className="productDetail__img img-fluid"
                alt="imagen del producto"
              />
            </Col>
            <Col lg={7} sm={12}>
              <section className="productDetail__map__container">
                <div className="price__container">
                  <h3>
                    <strong>Precio: $ {producto?.price}</strong>
                  </h3>

                  <Button
                    as={Link}
                    to="/cart"
                    className="mt-3 mb-5 button--cart"
                    onClick={() => addToCart(id)}
                  >
                    Añadir al carrito
                  </Button>
                </div>
                <div className="container--description">
                  <h2>Descripción:</h2>
                  {producto?.description}
                </div>
                <div className="item__container--item_all">
                  <div className="item__container_first">
                    <div className="item__container--item">
                      <p>
                        <strong>Brand:</strong>
                      </p>
                      <p>{producto?.brands}</p>
                    </div>
                    <div className="item__container--item">
                      <p>
                        <strong>Ram:</strong>
                      </p>
                      <p>{producto?.ram} gb</p>
                    </div>
                    <div className="item__container--item">
                      <p>
                        <strong>Storage:</strong>
                      </p>
                      <p>{producto?.storage} gb</p>
                    </div>
                    <div className="item__container--item item__container--item__right ">
                      <p>
                        <strong>Camera:</strong>
                      </p>
                      <p>{producto?.camera} Mpx</p>
                    </div>
                  </div>
                </div>
                <div className="item__container--item_all">
                  <div className="item__container_first">
                    <div className="item__container--item">
                      <p>
                        <strong>Weight:</strong>
                      </p>
                      <p>{producto?.weight} gr</p>
                    </div>
                    <div className="item__container--item">
                      <p>
                        <strong>Display:</strong>
                      </p>
                      <p>{producto?.display}''</p>
                    </div>
                    <div className="item__container--item item__container--item__right ">
                      <p>
                        <strong>Battery:</strong>
                      </p>
                      <p>{producto?.batery} mAh</p>
                    </div>
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
