import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartProduct, getFavorites } from '../../Redux/actions/actions';
import CardProductMenu from '../CardProductMenu/CardProductMenu';
import Container from 'react-bootstrap/Container';
import './ProductsContainerMenu.css';
import Swal from 'sweetalert2';

function ProductsContainerMenu({ currentProduct, user }) {
  const dispatch = useDispatch();
  //const msg = useState('');
  let itemsToCart = useSelector((state) => state.cart);
  const [mount, setMount] = useState(true);

  const isSession = useSelector((state) => state.loginState);

  useEffect(() => {
    if (!mount) {
      if (itemsToCart && itemsToCart.length) {
        // console.log(user);
        // let devolver = itemsToCart.filter((e) => {
        //   return e.iduser === user.id;
        // });

        //console.log(devolver);
        // console.log(
        //   itemsToCart.map((e) => {
        //     return e.iduser;
        //   })
        // );
        // if (devolver.length) {
        //   window.localStorage.setItem('carrito', JSON.stringify(devolver));
        // }
        window.localStorage.setItem('carrito', JSON.stringify(itemsToCart));
      } else {
        window.localStorage.removeItem('carrito');
      }
    } else {
      setMount(false);
    }
  }, [dispatch, itemsToCart, mount]);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (isSession && user) {
      dispatch(getFavorites(user.id));
    }
  }, [dispatch, isSession]);

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

  console.log(currentProduct);

  return (
    <div>
      <Container className="products__container__menu mt-3">
        {/* MUESTRA CELULARES */}
        {currentProduct.length ? (
          currentProduct.map((item) => (
            <CardProductMenu
              id={item.id}
              name={item.name}
              price={item.price}
              imgUri={item.image}
              brands={item.brands}
              key={item.name}
              addToCart={addToCart}
            />
          ))
        ) : (
          <h2>LO SENTIMOS</h2>
        )}
      </Container>
    </div>
  );
}

export default ProductsContainerMenu;
