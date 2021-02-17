import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";
import itemSlice from "./slices/items";
import restMenuSlice from "./slices/restMenu";

const store = configureStore({

    reducer: {
  
        cart       : cartSlice.reducer,
        restMenu   : restMenuSlice.reducer,
        items      : itemSlice.reducer

    }
  
  });
  
  export default store;  