import { configureStore } from "@reduxjs/toolkit";
import PlaylistsReducer from "./playlists/playlistsSlice";
import videoReducer from "./videos/videosSlice";

const store = configureStore({
  reducer: {
    playlists: PlaylistsReducer,
    videos: videoReducer,
  },
});

export default store;
