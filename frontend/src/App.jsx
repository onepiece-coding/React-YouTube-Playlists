import { Container } from "react-bootstrap";
import Playlists from "./components/Playlists/Playlists";
import Videos from "./components/Videos/Videos";
import useApp from "./hooks/useApp";

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
