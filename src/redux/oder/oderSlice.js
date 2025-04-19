import { createSlice } from "@reduxjs/toolkit";
import { getCartOder, getOrder } from "./oderThunk";

const initialState = {
  orderList: [],
  orderedProduct: [],
};

export const orderListSlice = createSlice({
  name: "orderList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartOder.fulfilled, (state, actions) => {
        state.orderList = actions.payload;
      })
      .addCase(getOrder.fulfilled, (state, actions) => {
        state.orderedProduct = actions.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = orderListSlice.actions;

export default orderListSlice.reducer;
