import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCart } from "../cartThunk";

const initialState = {
  cartItems: [],
  cartAll: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cartItems.push(action.payload);
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      console.log(action.payload);

      state.cartAll = action.payload;
    });
  },
});

export default cartSlice.reducer;
