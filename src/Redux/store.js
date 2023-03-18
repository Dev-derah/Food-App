import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../features/modalSlice'
import orderReducer from "../features/orderSlice";
import productReducer from '../features/productSlice'

export const store = configureStore({
  reducer: {
    order:orderReducer,
    modal:modalReducer,
    product:productReducer
  },
});
