import Swal from 'sweetalert2';

/* payload es el id, array de products, y el array de carrito */
export const addItem = (id, allProducts, cart) => {
  /* busco en "todos" (que en realidad es lo filtrado)"
    /* sino */
  /* busco en el carrito */
  //console.log(id.iduser);

  const newProduct =
    allProducts.find((p) => p.id === id.idtelefono) ||
    cart.find((p) => p.id === id.idtelefono);

  // if (id.user !== undefined) {
  //   newProduct['iduser'] = id.iduser;
  // }
  newProduct['iduser'] = id?.iduser;
  //console.log(typeof newProduct);
  if (!newProduct) {
    return [...cart];
  }
  //console.log(newProduct);
  const productExist = cart.find(
    (item) =>
      item.id === newProduct.id &&
      (item.iduser === newProduct.iduser || item.iduser === undefined)
  );

  // console.log(newProduct);
  //console.log(cart);
  if (!productExist) {
    //si no hay un elemento igual en el carrito
    return [...cart, { ...newProduct, cantidad: 1 }];
  } else {
    //si ya hay un elemento en el carrito igual se suma + cantidad
    // console.log(
    //   cart.map((e) =>
    //     //  e.id === newProduct.id ? { ...e, cantidad: e.cantidad + 1 } : e
    //     e.id === newProduct.id
    //       ? [...cart, { ...newProduct, cantidad: e.cantidad + 1 }]
    //       : e
    //   )
    // );

    //console.log(productExist);

    //return [...cart, { ...newProduct, cantidad: 1 }];

    return cart.map((e) =>
      e.id === newProduct.id &&
      (e.iduser === newProduct.iduser || e.iduser === undefined)
        ? { ...e, cantidad: e.cantidad + 1 }
        : e
    );
  }
};

export const deleteItem = (payload, cart) => {
  // console.log(cart);
  // console.log(payload);
  const itemToDelete = cart.find(
    (item) => item.id === payload.idtelefono && item.iduser === payload.iduser
  );
  return itemToDelete.cantidad > 1
    ? cart.map((item) =>
        item.id === payload.idtelefono && item.iduser === payload.iduser
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    : cart.filter((item) => item.id !== payload.idtelefono);
};

export const deleteAllItem = (cart, id) => {
  return cart.filter((item) => item.id !== id);
};

export const deleteCarritoUser = (cart, loginState) => {
  //console.log(loginState);
  if (loginState === null) {
    return cart.filter((e) => e.iduser !== undefined);
  } else {
    return cart.filter(
      (e) => e.iduser !== loginState?.id && e.iduser !== undefined
    );
  }
};

export const addItemCustom = (cart, burgerCustom) => {
  if (!burgerCustom) {
    return [...cart];
  }

  return [...cart, burgerCustom];
};

export const addFav = (id, allProducts, favorites) => {
  const newFavorite = allProducts.find((p) => p.id === id);

  if (!favorites.map((item) => item.id).includes(newFavorite.id)) {
    return [...favorites, newFavorite];
  }

  if (favorites.map((item) => item.id).includes(id)) {
    Swal.fire({
      customClass: {
        confirmButton: 'confirmBtnSwal',
      },
      title: 'Oops...',
      text: `${newFavorite.name} ya existe en tus favoritos`,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnvPIJL73oS-sZ4ZYA2Fw9DyS0vRp5RJGvQ&usqp=CAU',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Logo henrys',
    });
  }

  return favorites;
};

export const subsFav = (id, favorites) => {
  return favorites.filter((item) => item.id !== id);
};
