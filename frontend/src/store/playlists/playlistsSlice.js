import { createSlice } from "@reduxjs/toolkit";
import getPlaylists from "./actions/getPlaylists";

const initialState = {
  loading: "idle",
  error: null,
  records: [],
};

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlaylists.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getPlaylists.fulfilled, (state, action) => {
      state.loading = "successed";
      state.records = action.payload;
    });
    builder.addCase(getPlaylists.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export { getPlaylists };
export default playlistsSlice.reducer;
