import { createSlice } from "@reduxjs/toolkit";

export const addItems = ( state, action) => {
    console.log(action.payload);
    state.push(action.payload);
}

const items = createSlice({

  name         : "items",
  initialState : [],
  reducers     : {

    addItems : addItems

  }
  
});

export const getItems = (state) => state.items;

export default items;