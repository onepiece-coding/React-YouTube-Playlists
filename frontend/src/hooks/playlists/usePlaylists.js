import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylists } from "../../store/playlists/playlistsSlice";

const usePlaylists = () => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.playlists);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  return { loading, error, records };
};

export default usePlaylists;
