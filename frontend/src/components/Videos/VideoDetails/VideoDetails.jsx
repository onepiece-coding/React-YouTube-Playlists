/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";
import VideoIframe from "./VideoIframe";
import VideoInfo from "./VideoInfo";
import GetComments from "../../Comments/GetComments";
import AddComment from "../../Comments/AddComment";

const VideoDetails = memo(({ videoSelected }) => {
  return (
    <section>
      <VideoIframe {...videoSelected} />
      <VideoInfo {...videoSelected} />
      <AddComment videoId={videoSelected.id} />
      <GetComments videoId={videoSelected.id} />
    </section>
  );
});

export default VideoDetails;
