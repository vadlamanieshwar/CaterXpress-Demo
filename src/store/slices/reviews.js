import { createSlice } from "@reduxjs/toolkit";

const addReviews = ( state, action ) =>{
    state.reviews = action.payload;
}

const reviews = createSlice({

  name         : "reviews",
  initialState : {},
  reducers     : {

    addReviews : addReviews

  }
  
});

export const getReviews = (state) => state.reviews;

export default reviews;