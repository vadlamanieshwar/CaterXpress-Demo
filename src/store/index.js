import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";
import itemSlice from "./slices/items";
import restMenuSlice from "./slices/restMenu";
import filterSlice from "./slices/filter";
import reviewsSlice from "./slices/reviews";
import selectedSlice from "./slices/selected";
import userDetailSlice from "./slices/userDetail";
import userSlice from "./slices/user";

const store = configureStore({

    reducer: {
  
        cart       : cartSlice.reducer,
        restMenu   : restMenuSlice.reducer,
        items      : itemSlice.reducer,
        filter      : filterSlice.reducer,
        userDetail      : userDetailSlice.reducer,
        reviews      : reviewsSlice.reducer,
        selected      : selectedSlice.reducer,
        user          : userSlice.reducer,

    }
  
  });
  
  export default store;  