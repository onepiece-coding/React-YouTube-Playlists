/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";
import useVideosList from "./useVideosList";
import VideoItem from "../VideoItem/VideoItem";

const VideosList = memo(({ videos, onChangeVideoHandler }) => {
  const { activeVideo, setActiveVideo } = useVideosList(videos);
  const videosList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id}
        video={video}
        onChangeVideoHandler={onChangeVideoHandler}
        activeVideo={activeVideo}
        setActiveVideo={setActiveVideo}
      />
    );
  });

  return (
    <section className="d-flex flex-column gap-2 border border-2 rounded p-2">
      {videosList}
    </section>
  );
});

export default VideosList;
