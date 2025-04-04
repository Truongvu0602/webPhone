import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../helper/server";

// shopThunk
export const fetchDataThunk = createAsyncThunk(
  "product/fetchDataThunk",
  //
  async (params, thunkAPI) => {
    try {
      const res = await instance.get("/product");
      const data = res.data;
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCategoryDataThunk = createAsyncThunk(
  "product/fetchCategoryDataThunk",
  async (category, thunkAPI) => {
    try {
      const res = await instance.get(`/product/${category}`);
      const data = res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchDetailThunk = createAsyncThunk(
  "product/fetchDetailThunk",
  //
  async (params, thunkAPI) => {
    try {
      const res = await instance.get(`/product/detail/${params}`);
      const data = res.data;
      // console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchDetailBottonThunk = createAsyncThunk(
  "product/fetchDetailBottonThunk",
  //
  async (params, thunkAPI) => {
    try {
      const res = await instance.get(`/product/detail/${params}`);
      const data = res.data;
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//

// homeThunk
export const fetchHomeDataThunk = createAsyncThunk(
  "product/fetchHomeDataThunk",
  //
  async (params, thunkAPI) => {
    try {
      const res = await instance.get("/product");
      const data = res.data;
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//
