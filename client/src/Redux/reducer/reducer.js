import {
  GET_PRODUCT,
  GET_PRODUCT_BY_ID,
  GET_USER_ORDER,
  ADD_TO_CART,
  ADD_TO_CART2,
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
  FILTER_DISPLAY,
  FILTER_BY_CAMERA,
  FILTER_MEMORY_RAM,
  FILTER_BATTERY,
  CLEAR_CART_UNDEFINED,
  CHANGE_PAGINA,
} from '../actions/actions';

import {
  addFav,
  addItem,
  addItem2,
  deleteAllItem,
  deleteItem,
  subsFav,
  deleteCarritoUser,
} from './utils';

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
  filteredProducts: [],
  cartStorage: [],
  pagina: 1,
};

const rootReducer = (state = initialState, action = {}) => {
  //console.log(action.payload);
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
      // const productsAgain = state.allProducts
      // console.log(productsAgain.map(e => e.price));
      const sortPrices =
        action.payload === 'Max'
          ? state.products.sort((a, b) => {
              if (a.price > b.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
            })
          : state.products.sort((a, b) => {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
            });
      return {
        ...state,
        products: action.payload === 'All' ? state.products : [...sortPrices],
      };
    case FILTER_BRAND:
      const allPhones =
        state.filteredProducts === 0
          ? state.filteredProducts
          : state.allProducts;
      //console.log(allPhones);
      const filteredBrands =
        action.payload === 'All'
          ? allPhones
          : allPhones.filter((p) => p.brands === action.payload);
      return {
        ...state,
        products: filteredBrands,
        filteredProducts: filteredBrands,
      };
    case FILTER_DISPLAY:
      let display = state.filteredProducts;
      //console.log(display);
      let size =
        action.payload === 'All'
          ? state.allProducts
          : action.payload === 'menor-display'
          ? display.filter((p) => p.display < 6.3)
          : action.payload === 'entre-display'
          ? display.filter((p) => p.display > 6.2 && p.display < 6.6)
          : display.filter((p) => p.display > 6.5);
      return {
        ...state,
        products: size,
        filteredProducts: size,
      };
    case FILTER_MEMORY_RAM:
      const memoryRam = state.filteredProducts;
      //(memoryRam);

      const filteredRam =
        action.payload === 'All'
          ? state.allProducts
          : action.payload === '4'
          ? memoryRam.filter((p) => p.ram < 4)
          : action.payload === '6'
          ? memoryRam.filter((p) => p.ram >= 4 && p.ram < 7)
          : action.payload === '8'
          ? memoryRam.filter((p) => p.ram >= 7 && p.ram <= 9)
          : memoryRam.filter((p) => p.ram > 9);
      return {
        ...state,
        products: filteredRam,
        filteredProducts: filteredRam,
      };
    case FILTER_BY_CAMERA:
      const cameras = state.filteredProducts;
      console.log(cameras);
      const filteredCameras =
        action.payload === 'All'
          ? state.allProducts
          : action.payload === '12'
          ? cameras.filter((p) => p.camera < 13)
          : action.payload === '13'
          ? cameras.filter((p) => p.camera >= 13 && p.camera < 25)
          : action.payload === '25'
          ? cameras.filter((p) => p.camera >= 25 && p.camera <= 49)
          : cameras.filter((p) => p.camera > 49);
      return {
        ...state,
        products: filteredCameras,
        filteredProducts: filteredCameras,
      };
    case FILTER_BATTERY:
      const batteries = state.filteredProducts;
      //console.log(batteries);
      const filteredBatteries =
        action.payload === 'All'
          ? state.allProducts
          : action.payload === '3750'
          ? batteries.filter((p) => p.batery < 3750)
          : action.payload === '4100'
          ? batteries.filter((p) => p.batery >= 3750 && p.batery <= 4100)
          : action.payload === '4600'
          ? batteries.filter((p) => p.batery > 4100 && p.batery <= 4600)
          : batteries.filter((p) => p.batery > 4600);
      return {
        ...state,
        products: filteredBatteries,
        filteredProducts: filteredBatteries,
      };
    case ADD_TO_CART:
      /* payload es el id, array de products, y el array de carrito */
      return {
        ...state,
        cart: addItem(action.payload, state.products, state.cart),
        cartStorage: addItem(action.payload, state.products, state.cart),
      };

    case DELETE_ONE_PRODUCT_CART:
      return {
        ...state,
        cart: deleteItem(action.payload, state.cart),
      };
    case DELETE_PRODUCT_CART:
      return {
        ...state,
        cart: deleteAllItem(state.cart, action.payload),
      };
    case CLEAR_CART:
      return {
        // ...state,
        cart: deleteCarritoUser(state.cart, state.loginState),
      };
    case CLEAR_CART_UNDEFINED:
      return {
        // ...state,
        cart: action.payload,
      };
    case LOCAL_STORAGE:
      return {
        ...state,
        cart: action.payload,
        cartStorage: action.payload,
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
    case GET_USER_ORDER:
      return {
        ...state,
        userorders: action.payload,
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
    case CHANGE_PAGINA:
      // console.log(action.payload);
      return {
        ...state,
        pagina: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
