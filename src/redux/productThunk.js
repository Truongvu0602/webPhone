import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../helper/server";

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
// export const fetchStatusThunk = createAsyncThunk(
//   "todos/fetchStatusThunk",
//   //
//   async (params, thunkAPI) => {
//     try {
//       const res = await instance.get("/status");
//       const data = res.data;
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchProductThunk = createAsyncThunk(
//   "todos/fetchProductThunk",
//   async (params, thunkAPI) => {
//     try {
//       const res = await instance.get("/products");

//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchProductFilterThunk = createAsyncThunk(
//   "todos/fetchProductFilterThunk",
//   async (params, thunkAPI) => {
//     try {
//       const res = await instance.get("/products", {
//         params: params,
//       });
//       console.log(params);

//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// //
// export const fetchProductAddThunk = createAsyncThunk(
//   "todos/fetchProductAddThunk",
//   async (item, thunkAPI) => {
//     try {
//       const res = await instance.post("/products/new", item);
//       console.log(item);

//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchProductEditThunk = createAsyncThunk(
//   "todos/fetchProductAddThunk",
//   async ({ item }, thunkAPI) => {
//     try {
//       const res = await instance.patch(`/products/${item.id}`, item);
//       console.log(item);

//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
