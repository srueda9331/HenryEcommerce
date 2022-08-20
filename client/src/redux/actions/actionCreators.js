import axios from "axios";
import {
  FILTER_BRAND,
  GET_PHONES,
  ORDER_PRICE,
  GET_PHONE_DETAIL,
  GET_PHONE_BY_NAME,
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
      return dispatch({
        type: GET_PHONE_DETAIL,
        payload: detail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPhoneName(name) {
  return async function (dispatch) {
    try {
      let phoneByName = await axios.get(
        "http://localhost:3001/phones?name=" + name
      );
      return dispatch({
        type: GET_PHONE_BY_NAME,
        payload: phoneByName.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
