import { useCallback, useState } from "react";

const usePlaylistsList = () => {
  const [activePlaylist, setActivePlaylist] = useState("1");

  const activePlaylistHandler = useCallback((id) => {
    setActivePlaylist(id);
  }, []);

  return { activePlaylist, activePlaylistHandler };
};

export default usePlaylistsList;
