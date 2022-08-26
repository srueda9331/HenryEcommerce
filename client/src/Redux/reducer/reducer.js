import {
  GET_PRODUCT,
  GET_PRODUCT_BY_ID,
  ADD_TO_CART,
  CLEAR_CART,
  DELETE_ONE_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  LOCAL_STORAGE,
  ADD_FAVORITES,
  ADD_TO_LOCAL,
  CLEAR_STATE,
  SET_LOGIN_STATE,
  POST_MP,
  GET_FAVORITES,
  REMOVE_FAVORITES,
  GET_REVIEWS,
  GET_COUPONS,
  GET_USERS,
  GET_PURCHASE,
  DELETE_PRODUCT,
  RESTORE_PRODUCT,
  SET_ORDERS,
  ORDER_PRICE,
  FILTER_BRAND,
  POST_PRODUCT,
} from '../actions/actions';

import { addFav, addItem, deleteAllItem, deleteItem, subsFav } from './utils';

const initialState = {
  products: [],
  allProducts: [],
  productDetail: [],
  cart: [],
  favorites: [],
  loginState: JSON.parse(window.localStorage.getItem('user')),
  mercaDopago: '',
  reviews: [],
  coupons: undefined,
  users: [],
  purchaseInfo: undefined,
  orders: [],
};

const rootReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        productDetail: action.payload,
      };
    case CLEAR_STATE:
      return {
        ...state,
        productDetail: [],
      };
    case ORDER_PRICE:
      const sortPrices =
        action.payload === 'Max'
          ? state.products.sort((a, b) => {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
            })
          : state.products.sort((a, b) => {
              if (a.price > b.price) return -1;
              if (b.price > a.price) return -1;
              return 0;
            });
      return {
        ...state,
        phones: action.payload === 'All' ? state.products : [...sortPrices],
      };
    case FILTER_BRAND:
      const allPhones = state.allProducts;
      const filteredBrands =
        action.payload === 'All'
          ? allPhones
          : allPhones.filter((p) => p.brand === action.payload);
      return {
        ...state,
        products: filteredBrands,
      };
    case ADD_TO_CART:
      /* payload es el id, array de products, y el array de carrito */
      return {
        ...state,
        cart: addItem(action.payload, state.products, state.cart),
      };
    case DELETE_ONE_PRODUCT_CART:
      return {
        ...state,
        cart: deleteItem(state.cart, action.payload),
      };
    case DELETE_PRODUCT_CART:
      return {
        ...state,
        cart: deleteAllItem(state.cart, action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case LOCAL_STORAGE:
      return {
        ...state,
        cart: action.payload,
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case ADD_TO_LOCAL:
      return {
        ...state,
        favorites: action.payload,
      };
    case POST_PRODUCT:
      return {
        ...state,
      };
    case SET_LOGIN_STATE:
      return {
        ...state,
        loginState: action.payload,
      };
    case POST_MP:
      return {
        ...state,
        mercaDopago: action.payload,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case GET_COUPONS:
      return {
        ...state,
        coupons: action.payload,
      };
    case GET_PURCHASE:
      return {
        ...state,
        purchaseInfo: action.payload,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    case RESTORE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
