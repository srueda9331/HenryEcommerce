import { GET_ALL_PHONES } from "../actions/actionTypes";

const initialState = {
  phones: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PHONES:
      return {
        ...state,
        phones: action.payload,
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;
