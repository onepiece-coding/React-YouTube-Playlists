/* eslint-disable react/prop-types */

const VideoIframe = ({ embed_video, title }) => {
  return (
    <div className="border border-2 rounded p-2">
      <iframe
        width="100%"
        height="315"
        src={embed_video}
        title={title}
        className="rounded"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoIframe;
