import { useEffect, useState } from "react";

const useVideosList = (videos) => {
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    if (videos.length) {
      setActiveVideo(videos[0].id);
    }
  }, [videos]);

  return { activeVideo, setActiveVideo };
};

export default useVideosList;
