import { configureStore } from "@reduxjs/toolkit";
import productStore from "./product/slice/productSlice";
import cartStore from "./cart/slice/cartSlice";

export const store = configureStore({
  reducer: {
    product: productStore,
    cart: cartStore,
  },
});
