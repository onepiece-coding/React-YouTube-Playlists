/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";
import CommentItem from "../CommentItem/CommentItem";

const CommentsList = memo(({ comments }) => {
  const commentsList = comments.map((comment) => (
    <CommentItem key={comment.id} {...comment} />
  ));
  return <div className="d-flex flex-column gap-2">{commentsList}</div>;
});

export default CommentsList;
