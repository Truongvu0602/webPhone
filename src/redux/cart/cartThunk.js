import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../helper/server"; // Axios instance của bạn

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }, thunkAPI) => {
    try {
      // Lấy token từ localStorage
      const token = localStorage.getItem("token");
      // Kiểm tra nếu không có token thì reject
      if (!token) {
        return thunkAPI.rejectWithValue("Không có token, vui lòng đăng nhập");
      }
      // Thực hiện request API để thêm sản phẩm vào giỏ hàng
      const res = await instance.post(
        "http://localhost:3000/cart",
        { productId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Log dữ liệu trả về từ API sau khi có kết quả
      console.log("Dữ liệu trả về từ API:", res.data);

      return res.data;
    } catch (error) {
      // Log lỗi nếu có
      console.error("Lỗi khi thêm vào giỏ hàng:", error);

      // Return lỗi thông qua rejectWithValue
      return thunkAPI.rejectWithValue(error.message || "Có lỗi xảy ra");
    }
  }
);

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  try {
    // Lấy token từ localStorage
    const token = localStorage.getItem("token");

    // Kiểm tra nếu không có token thì reject
    if (!token) {
      return thunkAPI.rejectWithValue("Không có token, vui lòng đăng nhập");
    }

    // Gửi token trong headers khi gọi API
    const res = await instance.get("/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Data received:", res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
