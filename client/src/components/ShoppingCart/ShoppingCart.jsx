// import { useReducer } from "react";
// import {
//   ADD_TO_CART,
//   CLEAR_CART,
//   REMOVE_ALL_FROM_CART,
//   REMOVE_ONE_FROM_CART,
// } from "../../redux/actions/actionTypes";
// import rootReducer, { initialState } from "../../redux/reducer";
// import CartItem from "../CartItem/CartItem";

// export function ShoppingCart() {
//   const [state, dispatch] = useReducer(rootReducer, initialState);

//   const { phones, cart } = state;

//   const addToCart = () => {
//     dispatch({ type: ADD_TO_CART, payload: id });
//   };
//   const delFromCart = (id, all = false) => {
//     if (all) {
//       dispatch({ type: REMOVE_ALL_FROM_CART, payload: id });
//     } else {
//       dispatch({ type: REMOVE_ONE_FROM_CART, payload: id });
//     }
//   };

//   const clearCart = () => {
//     dispatch({ type: CLEAR_CART });
//   };

//   return (
//     <div>
//       <h2>Carrito de compras</h2>
//       <h3>Carrito</h3>
//       <article>
//         <button onClick={clearCart}>Limpiar Carrito</button>
//         {cart.map((phone, index) => (
//           <CartItem
//             key={index}
//             name={phone.name}
//             image={phone.image}
//             brand={phone.brand}
//             price={phone.price}
//             delFromCart={delFromCart}
//           />
//         ))}
//       </article>
//     </div>
//   );
// }

// export default ShoppingCart;
