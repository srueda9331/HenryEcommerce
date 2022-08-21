import {
  FILTER_BRAND,
  GET_PHONE_DETAIL,
  GET_PHONES,
  ORDER_PRICE,
  CLEAN_DETAIL,
  POST_PHONE,
  GET_BRANDS,
  GET_PHONE_BY_NAME,
} from "../actions/actionTypes";

const initialState = {
  phones: [],
  phonesOne: [],
  detail: [],
  brands: [],
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
    default:
      return state;
  }
}

export default rootReducer;
