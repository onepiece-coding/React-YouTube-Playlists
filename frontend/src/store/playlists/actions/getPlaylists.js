import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseURL from "../../../apis/BaseURL";

const getPlaylists = createAsyncThunk(
  "playlists/getPlaylists",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await BaseURL.get("/playlists", { signal });
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default getPlaylists;
