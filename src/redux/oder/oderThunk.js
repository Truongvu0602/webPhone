import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizedRequest } from "../../../helper/authorizedRequest";

export const getCartOder = createAsyncThunk(
  "order/getCartOder",
  async (_, thunkAPI) => {
    try {
      const response = await authorizedRequest(
        "get",
        "/order/getOder",
        null,
        thunkAPI
      );
      console.log("Dữ liệu giỏ hàng từ API:", response);
      return response;
    } catch (error) {
      console.error("Lỗi khi gọi API getOder:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData, thunkAPI) => {
    try {
      console.log("📦 Dữ liệu đơn hàng gửi lên:", orderData); // Log dữ liệu gửi

      const response = await authorizedRequest(
        "post",
        "/order/create",
        orderData,
        thunkAPI
      );

      console.log("✅ Phản hồi từ server sau khi tạo đơn:", response); // Log phản hồi từ server

      return response;
    } catch (error) {
      console.error(
        "❌ Lỗi khi gọi API create:",
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const getOrder = createAsyncThunk(
  "order/getOderProduct",
  async (_, thunkAPI) => {
    try {
      const response = await authorizedRequest(
        "get",
        "/order/getOderProduct",
        null,
        thunkAPI
      );
      console.log("Dữ liệu giỏ hàng từ API:", response);
      return response;
    } catch (error) {
      console.error("Lỗi khi gọi API getOder:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
