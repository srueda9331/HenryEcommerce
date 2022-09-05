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

  newProduct['iduser'] = id.iduser;
  //console.log(typeof newProduct);
  if (!newProduct) {
    return [...cart];
  }
  console.log(newProduct);
  const productExist = cart.find((item) => item.id === newProduct.id);

  if (!productExist) {
    //si no hay un elemento igual en el carrito
    return [...cart, { ...newProduct, cantidad: 1 }];
  } else {
    //si ya hay un elemento en el carrito igual se suma + cantidad
    return cart.map((e) =>
      e.id === newProduct.id ? { ...e, cantidad: e.cantidad + 1 } : e
    );
  }
};

export const deleteItem = (cart, id) => {
  const itemToDelete = cart.find((item) => item.id === id);
  return itemToDelete.cantidad > 1
    ? cart.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    : cart.filter((item) => item.id !== id);
};

export const deleteAllItem = (cart, id) => {
  return cart.filter((item) => item.id !== id);
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
