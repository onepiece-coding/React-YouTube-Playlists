/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { Nav } from "react-bootstrap";
import { memo } from "react";
import PlaylistsList from "./PlaylistsList";
import Loading from "../Loading/Loading";
import usePlaylists from "../../hooks/playlists/usePlaylists";

const Playlists = memo(({ onChangePlaylistHandler }) => {
  const { loading, error, records } = usePlaylists();

  return (
    <Loading status={loading} error={error} type={"playlists"}>
      <section className="mb-4 border border-2 rounded p-2">
        <Nav variant="tabs" defaultActiveKey="/">
          <PlaylistsList
            playlists={records}
            onChangePlaylistHandler={onChangePlaylistHandler}
          />
        </Nav>
      </section>
    </Loading>
  );
});

export default Playlists;
