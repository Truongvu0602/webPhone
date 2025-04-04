import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  deleteCart,
  getCart,
  updateCartQuantity,
} from "../cartThunk";

const initialState = {
  cartAll: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        console.log(action.payload);
        state.cartAll = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        console.log(action.payload);
        state.cartAll.push(action.payload);
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        console.log(action.payload);
        state.cartAll = action.payload;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        const index = state.cartAll.findIndex(
          (item) => item.id === updatedItem.id
        );
        if (index !== -1) {
          state.cartAll[index] = updatedItem;
        }
      });
  },
});

export default cartSlice.reducer;
