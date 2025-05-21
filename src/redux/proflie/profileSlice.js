import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "./profileThunk";

const initialState = {
  getProfileList: [],
};

export const profileListSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, actions) => {
      state.getProfileList = actions.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = profileListSlice.actions;

export default profileListSlice.reducer;
