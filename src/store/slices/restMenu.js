import { createSlice } from "@reduxjs/toolkit";

const addMenu = ( state, action ) =>{
    state.restMenu = action.payload;
}

const   initialState = {};

const restMenu = createSlice({

  name         : "restMenu",
  initialState : {},
  reducers     : {

    addMenu : addMenu,
    removeMenu : () => {return initialState}

  }
  
});

export const getRestMenu = (state) => state.restMenu;

export default restMenu;