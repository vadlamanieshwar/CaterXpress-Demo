import { createSlice } from "@reduxjs/toolkit";

const addMenu = ( state, action ) =>{
    state.restMenu = action.payload;
}

const restMenu = createSlice({

  name         : "restMenu",
  initialState : {},
  reducers     : {

    addMenu : addMenu

  }
  
});

export const getRestMenu = (state) => state.restMenu;

export default restMenu;