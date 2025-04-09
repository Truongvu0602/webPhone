// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { instance } from "../../../helper/server";

// export const addToCart = createAsyncThunk(
//   "cart/addToCart",
//   async ({ productId, quantity }, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         return thunkAPI.rejectWithValue("Không có token, vui lòng đăng nhập");
//       }

//       const res = await instance.post(
//         "http://localhost:3000/cart/cart",
//         { productId, quantity },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Dữ liệu trả về từ API:", res.data);

//       return res.data;
//     } catch (error) {
//       console.error("Lỗi khi thêm vào giỏ hàng:", error);

//       return thunkAPI.rejectWithValue(error.message || "Có lỗi xảy ra");
//     }
//   }
// );

// export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
//   try {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       return thunkAPI.rejectWithValue("Không có token, vui lòng đăng nhập");
//     }

//     const res = await instance.get("/cart/cart", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     console.log("Data receivedcart get:", res.data);
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
// export const deleteCart = createAsyncThunk(
//   "cart/deleteCart",
//   async (id, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         return thunkAPI.rejectWithValue("Không có token, vui lòng đăng nhập");
//       }
//       const res = await instance.delete(`/cart/cart/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = res.data;
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.error("Lỗi khi xóa sản phẩm:", error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateCartQuantity = createAsyncThunk(
//   "cart/updateCartQuantity",
//   async ({ id, type }, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         return thunkAPI.rejectWithValue("Không có token, vui lòng đăng nhập");
//       }

//       const res = await instance.put(
//         `/cart/cart/${id}/quantity`,
//         { type },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(res.data);

//       return res.data;
//     } catch (err) {
//       console.error("Lỗi khi cập nhật số lượng:", err);
//       return thunkAPI.rejectWithValue(err.response?.data || err.message);
//     }
//   }
// );
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
