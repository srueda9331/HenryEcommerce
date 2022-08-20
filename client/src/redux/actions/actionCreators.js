import axios from "axios";
import {
  FILTER_BRAND,
  GET_PHONES,
  ORDER_PRICE,
  GET_PHONE_DETAIL,
  CLEAN_DETAIL,
} from "./actionTypes";

export function getPhones() {
  return async function (dispatch) {
    try {
      let all = await axios.get("http://localhost:3001/phones/");
      return dispatch({ type: GET_PHONES, payload: all.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function orderPrice(payload) {
  return {
    type: ORDER_PRICE,
    payload,
  };
}

export function filterBrand(payload) {
  return {
    type: FILTER_BRAND,
    payload,
  };
}

export function getPhoneDetail(id) {
  return async function (dispatch) {
    try {
      let detail = await axios.get(`http://localhost:3001/phones/${id}`);
      console.log(detail.data);
      return dispatch({
        type: GET_PHONE_DETAIL,
        payload: detail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function cleanDetail(){
  return {
    type: CLEAN_DETAIL,
    payload: []
  }
}
