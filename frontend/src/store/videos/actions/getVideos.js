import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseURL from "../../../apis/BaseURL";

const getVideos = createAsyncThunk(
  "videos/getVideos",
  async (prefix, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await BaseURL.get(`/videos?cat_prefix=${prefix}`);
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default getVideos;
