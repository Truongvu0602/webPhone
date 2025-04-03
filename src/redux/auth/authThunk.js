import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../helper/server";

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
