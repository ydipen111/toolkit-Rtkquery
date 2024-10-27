import { configureStore } from "@reduxjs/toolkit";
import { drinksApi } from "../Features/Drinks/allDrinks.js";
import { recepieApi } from "../Pages/recepie.js";
import { postSlice } from "../Features/PostSlice.js/postSlice.js";


export const store = configureStore({
  reducer: {
    [postSlice.name]: postSlice.reducer,
    [drinksApi.reducerPath]: drinksApi.reducer,
    [recepieApi.reducerPath]: recepieApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(drinksApi.middleware,
      recepieApi.middleware
    )
  }
})