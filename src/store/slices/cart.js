import { createSlice } from "@reduxjs/toolkit";


const cart = createSlice({

  name         : "cart",
  initialState : 0,
  reducers     : {

    added: state => state + 1,
    deleted: state => state - 1

  }
  
});

export const getCart = (state) => state.cart;

export default cart;