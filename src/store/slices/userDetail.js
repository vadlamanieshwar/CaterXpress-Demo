import { createSlice } from "@reduxjs/toolkit";

const addUserDetail = ( state, action ) =>{
    state.userDetail = action.payload;
}

const initialState = {};

const userDetail = createSlice({

  name         : "userDetail",
  initialState : {},
  reducers     : {

    addUserDetail : addUserDetail,
    removeuserDetail : () => {return initialState}

  }
  
});

export const getUserDetail = (state) => state.userDetail;

export default userDetail;