import { createSlice } from "@reduxjs/toolkit";

const addFilter = ( state, action ) =>{
    state.filter = action.payload;
}

const filter = createSlice({

  name         : "filter",
  initialState : {},
  reducers     : {

    addFilter : addFilter

  }
  
});

export const getFilter = (state) => state.filter;

export default filter;