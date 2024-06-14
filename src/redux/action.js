import axios from "axios";
import {  DELETE, GET_ITEMS, SET_SEARCH } from "./actiontype";


export const handleGetItems = () => async (dispatch) => {
  try {
    const res = await axios.get("https://freetestapi.com/api/v1/destinations?limit=18");
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    alert("get error");
  }
};

export const handledelete=(ID) =>{
  return{
      type:DELETE,
      payload:ID,
  };
}

export const handlesearch=(pays) =>{
  return{
    type:SET_SEARCH,
    payload:pays,
  };
}