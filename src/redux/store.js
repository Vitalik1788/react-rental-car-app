import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./carsReducer";




export const store = configureStore({
  reducer: {
    cars: carsReducer,
  }
});