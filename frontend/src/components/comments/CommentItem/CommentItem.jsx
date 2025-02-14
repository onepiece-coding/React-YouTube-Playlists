/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";
import { Button, Spinner } from "react-bootstrap";
import useCommentItem from "./useCommentItem";

const CommentItem = memo(({ comment, id }) => {
  const { deleteCommentHandler, isLoading } = useCommentItem();

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
