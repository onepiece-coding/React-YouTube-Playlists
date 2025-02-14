import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseURL from "../../../apis/BaseURL";

const addComment = createAsyncThunk(
  "comments/addComment",
  async ({ videoId, comment }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await BaseURL.post(`/comments`, {
        videoId,
        comment,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default addComment;
