/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";
import VideoIframe from "../VideoIframe/VideoIframe";
import VideoInfo from "../VideoInfo/VideoInfo";
import AddComment from "../../Comments/AddComment/AddComment";
import GetComments from "../../Comments/GetComments/GetComments";

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
