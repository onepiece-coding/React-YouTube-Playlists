import { configureStore } from "@reduxjs/toolkit";
import PlaylistsReducer from "./playlists/playlistsSlice";
import videoReducer from "./videos/videosSlice";
import commentsReducer from "./comments/commentsSlice";

const store = configureStore({
  reducer: {
    playlists: PlaylistsReducer,
    videos: videoReducer,
    comments: commentsReducer,
  },
});

export default store;
