/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/comments/commentsSlice";

const CommentItem = memo(({ comment, id }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const deleteCommentHandler = (id) => {
    if (isLoading) return;
    setIsLoading(true);
    dispatch(deleteComment(id))
      .unwrap()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="fs-6 m-0">{comment}</p>
      <Button
        variant="danger"
        size="sm"
        style={{ color: "white" }}
        onClick={() => deleteCommentHandler(id)}
      >
        {isLoading ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <i className="bi bi-trash3"></i>
        )}
      </Button>
    </div>
  );
});

export default CommentItem;
