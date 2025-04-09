import { instance } from "./server";

export const authorizedRequest = async (method, url, data = null, thunkAPI) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return thunkAPI.rejectWithValue("Không có token, vui lòng đăng nhập");
  }

  try {
    const config = {
      method,
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (data) {
      config.data = data;
    }

    const response = await instance(config);
    return response.data;
  } catch (error) {
    console.error("Lỗi từ authorizedRequest:", error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
};
