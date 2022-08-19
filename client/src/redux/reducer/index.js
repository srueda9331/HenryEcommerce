import { FILTER_BRAND, GET_PHONES } from "../actions/actionTypes";

const initialState = {
  phones: [],

  phonesOne: []
}

function rootReducer(state = initialState, action){
  switch(action.type){
    case GET_PHONES:
      return {
        ...state,
        phones: action.payload,
        phonesOne: action.payload
      }
    case FILTER_BRAND:
      const allPhones = state.phonesOne;
      const filteredBrands = action.payload === 'All'? allPhones : allPhones.filter(p => p.brand === action.payload)
      return {
        ...state,
        phones: filteredBrands
      }

    default:
      return state
   }
  


export default rootReducer;
