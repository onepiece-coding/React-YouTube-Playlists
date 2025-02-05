/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";

const ActiveVideoStyles = {
  backgroundColor: "#f6f6f6",
  borderRadius: "0.375rem",
};

const VideoItem = memo(
  ({ video, onChangeVideoHandler, activeVideo, setActiveVideo }) => {
    return (
      <div
        className={"d-flex align-items-center gap-2"}
        style={
          activeVideo === video.id
            ? { ...ActiveVideoStyles }
            : { cursor: "pointer" }
        }
        onClick={() => {
          if (activeVideo !== video.id) {
            onChangeVideoHandler(video);
            setActiveVideo(video.id);
          }
        }}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="rounded"
          style={{ maxWidth: "180px" }}
        />
        <div>
          <h3 className="fs-6" style={{ lineHeight: "1.4" }}>
            {video.title}
          </h3>
          <h4 style={{ fontSize: "14px" }}>{video.auteur.name}</h4>
          <h5 style={{ fontSize: "12px" }}>
            {video.views} . {video.date}
          </h5>
        </div>
      </div>
    );
  }
);

export default VideoItem;
