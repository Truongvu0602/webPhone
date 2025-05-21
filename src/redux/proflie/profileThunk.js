import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizedRequest } from "../../../helper/authorizedRequest";

// 📌 Lấy thông tin người dùng
export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (_, thunkAPI) => {
    try {
      const response = await authorizedRequest(
        "get",
        "/profile/getProfile",
        null,
        thunkAPI
      );
      console.log("📄 Thông tin người dùng:", response);
      return response;
    } catch (error) {
      console.error("❌ Lỗi khi lấy thông tin người dùng:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (profileData, thunkAPI) => {
    try {
      const response = await authorizedRequest(
        "put",
        "/profile/updateProfile",
        profileData,
        thunkAPI
      );
      console.log("✅ Cập nhật profile thành công:", response);
      return response;
    } catch (error) {
      console.error("❌ Lỗi cập nhật profile:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
