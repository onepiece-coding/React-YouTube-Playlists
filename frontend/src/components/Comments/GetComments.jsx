/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../store/comments/commentsSlice";
import CommentsList from "./CommentsList";
import Loading from "../Loading/Loading";

const GetComments = memo(({ videoId }) => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.comments);

  useEffect(() => {
    if (videoId) {
      const promise = dispatch(getComments(videoId));
      return () => {
        promise.abort();
      };
    }
  }, [dispatch, videoId]);

  return (
    <div className="border border-2 rounded p-2 mt-2">
      <h3 className="fs-6 mb-2">Comments</h3>
      <Loading status={loading} error={error} type={"comments"}>
        {records.length ? (
          <CommentsList comments={records} />
        ) : (
          <p>No Comments To Show!</p>
        )}
      </Loading>
    </div>
  );
});

export default GetComments;
