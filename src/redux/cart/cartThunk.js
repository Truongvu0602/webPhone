import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizedRequest } from "../../../helper/authorizedRequest";

// Thêm vào giỏ hàng
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity }, thunkAPI) => {
    return await authorizedRequest(
      "post",
      "/cart/cart",
      { productId, quantity },
      thunkAPI
    );
  }
);

// Lấy danh sách giỏ hàng
export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  return await authorizedRequest("get", "/cart/cart", null, thunkAPI);
});

// Xóa sản phẩm khỏi giỏ hàng
export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (id, thunkAPI) => {
    return await authorizedRequest(
      "delete",
      `/cart/cart/${id}`,
      null,
      thunkAPI
    );
  }
);

// Cập nhật số lượng sản phẩm
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ id, type }, thunkAPI) => {
    return await authorizedRequest(
      "put",
      `/cart/cart/${id}/quantity`,
      { type },
      thunkAPI
    );
  }
);
