/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { memo } from "react";
import CommentsList from "../CommentsList/CommentsList";
import useGetComments from "./useGetComments";
import Loading from "../../feedback/Loading/Loading";

const GetComments = memo(({ videoId }) => {
  const { loading, error, records } = useGetComments(videoId);

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
