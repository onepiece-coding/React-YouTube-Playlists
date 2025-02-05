/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";

const VideoDetails = memo(({ videoSelected }) => {
  return (
    <section>
      <div className="border border-2 rounded p-2">
        <iframe
          width="100%"
          height="315"
          src={videoSelected.embed_video}
          title={videoSelected.title}
          className="rounded"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="border border-2 rounded p-2 mt-2">
        <h3 className="fs-6 mb-2">{videoSelected.title}</h3>
        <p className="m-0">{videoSelected.description}</p>
      </div>
    </section>
  );
});

export default VideoDetails;
