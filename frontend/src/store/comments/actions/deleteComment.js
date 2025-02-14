import { createAsyncThunk } from "@reduxjs/toolkit";
import BaseURL from "../../../apis/BaseURL";

const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await BaseURL.delete(`/comments/${commentId}`);
      return { commentId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default deleteComment;
