/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";
import usePlaylistsList from "./usePlaylistsList";
import PlaylistItem from "../PlaylistItem/PlaylistItem";

const PlaylistsList = memo(({ playlists, onChangePlaylistHandler }) => {
  const { activePlaylist, activePlaylistHandler } = usePlaylistsList();

  const playlistsList = playlists.map((playlist) => {
    return (
      <PlaylistItem
        key={playlist.id}
        playlist={playlist}
        onChangePlaylistHandler={onChangePlaylistHandler}
        activePlaylist={activePlaylist}
        activePlaylistHandler={activePlaylistHandler}
      />
    );
  });
  return <>{playlistsList}</>;
});

export default PlaylistsList;
