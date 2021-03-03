import { createSlice } from "@reduxjs/toolkit";

const addSelected = ( state, action ) =>{
    state.selected = {...state.selected,filter:action.payload.filter,sel:action.payload.sel};
    // console.log(state.selected.filter)
}
const removeSelected = ( state, action ) =>{
  state.selected = {filter:"",sel:false};
  // console.log(state.selected.filter)
}

const initialState = {
    filter:"",
    sel:false
};

const selected = createSlice({

  name         : "selected",
  initialState : {
    filter:"",
    sel:false
  },
  reducers     : {

    addSelected : addSelected,
    removeSelected : removeSelected

  }
  
});

export const getSelected = (state) => {
 return state.selected.selected;
}

export default selected;