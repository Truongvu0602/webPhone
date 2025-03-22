import { configureStore } from "@reduxjs/toolkit";
import productStore from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    product: productStore,
  },
});
