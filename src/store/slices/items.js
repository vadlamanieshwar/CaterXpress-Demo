import { createSlice } from "@reduxjs/toolkit";

export const addItems = ( state, action) => {
    console.log(action.payload);
    state.push(action.payload);
}

const initialState = [];

const items = createSlice({

  name         : "items",
  initialState : [],
  reducers     : {

    addItems : addItems,
    removeItems : () => {return initialState}

  }
  
});

export const getItems = (state) => state.items;

export default items;