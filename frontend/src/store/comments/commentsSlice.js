import { createSlice } from "@reduxjs/toolkit";
import getComments from "./actions/gatComments";
import addComment from "./actions/addComment";
import deleteComment from "./actions/deleteComment";

const initialState = {
  loading: "idle",
  error: null,
  records: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Comments
    builder.addCase(getComments.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(getComments.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });

    // Add Comment
    builder.addCase(addComment.pending, (state) => {
      state.error = null;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.records = [...state.records, action.payload];
    });
    builder.addCase(addComment.rejected, (state, action) => {
      state.error = action.payload;
    });
    // Delete Comment
    builder.addCase(deleteComment.pending, (state) => {
      state.error = null;
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.records = state.records.filter(
        (record) => action.payload.commentId !== record.id
      );
    });
    builder.addCase(deleteComment.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export { getComments, addComment, deleteComment };
export default commentsSlice.reducer;
