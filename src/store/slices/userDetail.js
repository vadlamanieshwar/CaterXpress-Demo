import { createSlice } from "@reduxjs/toolkit";

const addUserDetail = ( state, action ) =>{
    state.username = action.payload;
}


const userDetail = createSlice({

  name         : "userDetail",
  initialState : {
    username: ""
  },
  reducers     : {

    addUserDetail : addUserDetail,
    removeUserDetail : () => {return {
      username: ""
    }}

  }
  
});

export const getUserDetail = (state) => state.userDetail;

export default userDetail;