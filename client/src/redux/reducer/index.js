import {
  FILTER_BRAND,
  GET_PHONE_DETAIL,
  GET_PHONES,
  ORDER_PRICE,
  CLEAN_DETAIL,
  POST_PHONE,
  GET_BRANDS,
  GET_PHONE_BY_NAME,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART
} from "../actions/actionTypes";

export const initialState = {
  phones: [],
  phonesOne: [],
  detail: [],
  brands: [],
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state,
        phones: action.payload,
        phonesOne: action.payload,
      };
    case ORDER_PRICE:
      const sortPrices =
        action.payload === "Max"
          ? state.phones.sort((a, b) => {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
            })
          : state.phones.sort((a, b) => {
              if (a.price > b.price) return -1;
              if (b.price > a.price) return 1;
              return 0;
            });
      return {
        ...state,
        phones: action.payload === "All" ? state.phones : [...sortPrices],
      };
    case FILTER_BRAND:
      const allPhones = state.phonesOne;
      const filteredBrands =
        action.payload === "All"
          ? allPhones
          : allPhones.filter((p) => p.brand === action.payload);
      return {
        ...state,
        phones: filteredBrands,
      };
    case GET_PHONE_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case POST_PHONE:
      return {
        ...state,
      };
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };
    case GET_PHONE_BY_NAME:
      return {
        ...state,
        phones: action.payload,
      };
      case ADD_TO_CART: {
        let newPhone = state.phones.find((phone) => phone.id === action.payload)
        let phoneInCart = state.cart.find((phone) => phone.id === newPhone.id)
        return phoneInCart ? {
          ...state,
          cart: state.cart.map((phone) => phone.id === newPhone.id ? {...phone, quantity: phone.quantity+1} : phone)
        } : { ...state, cart: [...state.cart, {...newPhone, quantity: 1}] }
      }
      case REMOVE_ONE_FROM_CART:{
        let phoneToDelete = state.cart.find((phone) => phone.id === action.payload)
        return phoneToDelete.quantity > 1 ? {
          ...state,
          cart: state.cart.map((phone) => phone.id === action.payload ? {...phone, quantity: phone.quantity - 1} : phone )
        } : {
          ...state,
          cart: state.cart.filter((phone) => phone.id !== action.payload)
        }
      }
      case REMOVE_ALL_FROM_CART: {
        return{
        ...state,
          cart: state.cart.filter((phone) => phone.id !== action.payload)
        }
      }
      case CLEAR_CART: {
        return state 
      }
    default:
      return state;
  }
}

export default rootReducer;
