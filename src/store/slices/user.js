import { createSlice } from "@reduxjs/toolkit";

// const addUser = ( state, action ) =>{
//   console.log(action.payload);
//     state = action.payload;
//     console.log(state)
// }

// const initialState = false;

const user = createSlice({

  name         : "user",
  initialState : false,
  reducers     : {

    addUser: state => true,
    removeUser: state => false,

  }
  
});

export const getUser = (state) => state.user;

export default user;