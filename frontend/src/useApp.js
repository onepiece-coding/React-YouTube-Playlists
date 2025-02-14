import { useCallback, useState } from "react";

const useApp = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState("web_development");

  const onChangePlaylistHandler = useCallback((playlistTitle) => {
    setSelectedPlaylist(playlistTitle);
  }, []);

  return { selectedPlaylist, onChangePlaylistHandler };
};

export default useApp;
