import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseURL from "../../../apis/BaseURL";

const getComments = createAsyncThunk(
  "comments/getComments",
  async (videoId, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await BaseURL.get(`/comments?videoId=${videoId}`, {
        signal,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default getComments;
