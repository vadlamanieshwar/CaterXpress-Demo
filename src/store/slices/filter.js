import { createSlice } from "@reduxjs/toolkit";

const addFilter = ( state, action ) =>{
    state.filter = action.payload;
}

const initialState = {};

const filter = createSlice({

  name         : "filter",
  initialState : {},
  reducers     : {

    addFilter : addFilter,
    removeFilter : () => {return initialState}

  }
  
});

export const getFilter = (state) => state.filter;

export default filter;