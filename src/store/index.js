import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";
import itemSlice from "./slices/items";
import restMenuSlice from "./slices/restMenu";
import filterSlice from "./slices/filter";
import reviewsSlice from "./slices/reviews";
import userDetailSlice from "./slices/userDetail";

const store = configureStore({

    reducer: {
  
        cart       : cartSlice.reducer,
        restMenu   : restMenuSlice.reducer,
        items      : itemSlice.reducer,
        filter      : filterSlice.reducer,
        userDetail      : userDetailSlice.reducer,
        reviews      : reviewsSlice.reducer

    }
  
  });
  
  export default store;  