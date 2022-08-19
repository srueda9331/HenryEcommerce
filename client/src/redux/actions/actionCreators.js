import axios from 'axios';
import { FILTER_BRAND, GET_PHONES } from "./actionTypes";


export function getPhones(){
  return async function(dispatch){
    try {
      let all = await axios.get('http://localhost:3001/phones/')
      return dispatch({type: GET_PHONES, payload: all.data})

    } catch (error) {
      console.log(error);
    }
  }
}


export function filterBrand(payload){
  return {
    type: FILTER_BRAND,
    payload
  }
}