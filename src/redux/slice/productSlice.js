import { createSlice } from "@reduxjs/toolkit";
import { fetchDataThunk, fetchDetailBottonThunk } from "../productThunk";
import { fetchCategoryDataThunk } from "../productThunk";
import { fetchDetailThunk } from "../productThunk";

const initialState = {
  productList: [],
  detailList: [],
};

export const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.fulfilled, (state, actions) => {
        state.productList = actions.payload;
      })
      .addCase(fetchCategoryDataThunk.fulfilled, (state, actions) => {
        console.log(actions.payload);
        state.productList = actions.payload;
      })
      .addCase(fetchDetailThunk.fulfilled, (state, actions) => {
        // console.log(actions.payload);
        state.detailList = actions.payload;
      })
      .addCase(fetchDetailBottonThunk.fulfilled, (state, actions) => {
        // console.log(actions.payload);
        state.detailList = actions.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
