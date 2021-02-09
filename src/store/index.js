import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";
import itemSlice from "./slices/items";

const store = configureStore({

    reducer: {
  
        cart       : cartSlice.reducer,
        items       : itemSlice.reducer

    }
  
  });
  
  export default store;  