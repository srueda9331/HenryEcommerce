import axios from 'axios';
import { GET_ALL_PHONES } from "./actionTypes";

export function getAllPhones(){
  return async function(dispatch){
    try {
      let getAll = axios.get('http://localhost:3001/phones')
      return dispatch({
        type: GET_ALL_PHONES,
        payload: getAll.data
      })
    } catch (error) {
      console.log(error);
    }
  }  
}
