import { createSlice } from "@reduxjs/toolkit";
import getVideos from "./actions/getVideos";

const initialState = {
  loading: "idle",
  error: null,
  records: [],
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Videos
    builder.addCase(getVideos.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.loading = "successed";
      state.records = action.payload;
    });
    builder.addCase(getVideos.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export { getVideos };
export default videosSlice.reducer;
