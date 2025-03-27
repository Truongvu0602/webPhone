import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../helper/server";

// shopThunk
export const fetchDataThunk = createAsyncThunk(
  "product/fetchDataThunk",
  //
  async (params, thunkAPI) => {
    try {
      const res = await instance.get("/");
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
      const res = await instance.get(`/${category}`);
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
      const res = await instance.get(`/detail/${params}`);
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
      const res = await instance.get(`/detail/${params}`);
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
      const res = await instance.get("/");
      const data = res.data;
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//

export const fetchCartThunk = createAsyncThunk(
  "product/fetchCartThunk",
  async ({ id }, thunkAPI) => {
    try {
      const res = await instance.get(`/cart/${id}`);

      console.log(id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Đăng ký tài khoản
export const registerThunk = createAsyncThunk(
  "auth/registerThunk",
  async (userData, thunkAPI) => {
    try {
      console.log("Dữ liệu gửi đi từ frontend:", userData);

      const res = await instance.post("/auth/register", userData);

      console.log("Đăng ký thành công:", res.data);
      return res.data;
    } catch (error) {
      console.error("Lỗi đăng ký:", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
// Đăng nhập
export const loginThunk = createAsyncThunk(
  "auth/loginThunk",
  async (userData, thunkAPI) => {
    try {
      console.log("Dữ liệu gửi đi từ frontend:", userData);

      const res = await instance.post("/auth/login", userData);
      localStorage.setItem("token", res.data.token);
      console.log("Đăng nhập thành công:", res.data);
      return res.data;
    } catch (error) {
      console.error("Lỗi đăng nhập:", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
