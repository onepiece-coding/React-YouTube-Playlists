import { Container } from "react-bootstrap";
import useApp from "./useApp";
import Playlists from "./components/Playlists/Playlists/Playlists";
import Videos from "./components/Videos/videos/Videos";

function App() {
  const { onChangePlaylistHandler, selectedPlaylist } = useApp();

  return (
    <Container className="py-5">
      <Playlists onChangePlaylistHandler={onChangePlaylistHandler} />
      <Videos selectedPlaylist={selectedPlaylist} />
    </Container>
  );
}

export default App;
