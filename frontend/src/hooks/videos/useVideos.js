import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../store/videos/videosSlice";

const useVideos = (selectedPlaylist) => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.videos);
  const [videoSelected, setVideoSelected] = useState("");

  const onChangeVideoHandler = useCallback((video) => {
    setVideoSelected(video);
  }, []);

  useEffect(() => {
    const promise = dispatch(getVideos(selectedPlaylist));
    return () => {
      promise.abort();
    };
  }, [dispatch, selectedPlaylist]);

  useEffect(() => {
    if (records.length) {
      setVideoSelected(records[0]);
    }
  }, [records]);

  return { loading, error, videoSelected, records, onChangeVideoHandler };
};

export default useVideos;
