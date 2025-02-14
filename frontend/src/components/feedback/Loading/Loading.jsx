/* eslint-disable react/prop-types */

import CommentsSkeleton from "../Skeletons/CommentsSkeleton/CommentsSkeleton";
import PlaylistsSkeleton from "../Skeletons/PlaylistsSkeleton/PlaylistsSkeleton";
import VidoesSkeleton from "../Skeletons/VidoesSkeleton/VidoesSkeleton";

const skeletons = {
  playlists: PlaylistsSkeleton,
  videos: VidoesSkeleton,
  comments: CommentsSkeleton,
};

const Loading = ({ status, error, children, type }) => {
  const Skeleton = skeletons[type];
  if (status === "pending") {
    return <Skeleton />;
  }

  if (status === "failed") {
    return <p>{error}</p>;
  }

  return children;
};

export default Loading;
