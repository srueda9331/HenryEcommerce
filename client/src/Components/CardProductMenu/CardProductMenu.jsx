/* eslint-disable no-unneeded-ternary */
import React from 'react';
import { addFavorites, removeFavorites } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, CartPlus, HeartFill } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './CardProductMenu.css';
import { setImgProductHomeErr } from '../methods';

function CardProductMenu({ id, name, price, imgUri, addToCart, brands }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSession = useSelector((state) => state.loginState);
  const favorites = useSelector((state) => state.favorites);

  const ClickFav = (id) => {
    if (!isSession) {
      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        confirmButtonText: 'Iniciar sesión',
        title: 'Opss...',
        text: 'Primero debes iniciar sesión!',
        imageUrl:
          'https://res.cloudinary.com/dc8w6pspj/image/upload/v1662498810/denied_anoxya.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo',
      }).then(function () {
        navigate('/userlogin');
      });
      // alert('es necesario estar logueado');
    } else if (favorites.includes(id)) {
      const userId = JSON.parse(window.localStorage.getItem('user')).id;
      dispatch(removeFavorites(userId, favorites, id));
    } else {
      const userId = JSON.parse(window.localStorage.getItem('user')).id;
      dispatch(addFavorites(userId, favorites, id));
    }
  };

  return (
    <div className="container__prduct-detail">
      <div className="page-wrapper">
        <div className="page-inner">
          <div className="favorite__button">
            <Button
              variant="outline"
              onClick={() => ClickFav(id)}
              className="cardMenu__favorite__link"
            >
              {!favorites?.includes(id) ? (
                <Heart className="cardMenu__favorite__Svg " />
              ) : (
                <HeartFill className="cardMenu__favorite__Svg " />
              )}
            </Button>
          </div>
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img-card" src={imgUri} alt="" />
                <Link to={`/detalle/${id}`}>
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">{name.toUpperCase()}</span>
                    </div>
                    <div className="a-size">
                      <span className="size">{brands}</span>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <p className="cart" href="#">
                  <span className="price">${price}</span>
                  <span className="add-to-cart">
                    <Link to="/cart">
                      <span className="txt" onClick={() => addToCart(id)}>
                        Añadir al carrito
                      </span>
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProductMenu;
