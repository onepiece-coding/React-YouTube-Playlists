/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";
import { Nav } from "react-bootstrap";

const PlaylistItem = memo(
  ({
    playlist,
    onChangePlaylistHandler,
    activePlaylist,
    activePlaylistHandler,
  }) => {
    return (
      <Nav.Item
        key={playlist.id}
        onClick={() => {
          if (activePlaylist !== playlist.id) {
            onChangePlaylistHandler(playlist.prefix);
            activePlaylistHandler(playlist.id);
          }
        }}
      >
        <Nav.Link
          eventKey={playlist.title}
          className={activePlaylist === playlist.id && "active"}
        >
          {playlist.title}
        </Nav.Link>
      </Nav.Item>
    );
  }
);

export default PlaylistItem;
