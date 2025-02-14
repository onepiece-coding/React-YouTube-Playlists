/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { addComment } from "../../store/comments/commentsSlice";
import { useDispatch } from "react-redux";

const AddComment = memo(({ videoId }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState("");

  const addCommentHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(addComment({ videoId, comment }))
      .unwrap()
      .then(() => {
        setIsLoading(false);
        setComment("");
      })
      .catch(() => {
        setIsLoading(false);
        setComment("");
      });
  };

  return (
    <div className="border border-2 rounded p-2 mt-2">
      <Form onSubmit={addCommentHandler}>
        <Form.Group className="mb-2" controlId="comment">
          <Form.Control
            type="text"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!comment}>
          {isLoading ? (
            <>
              <Spinner animation="border" size="sm" /> Loading...
            </>
          ) : (
            "Comment"
          )}
        </Button>
      </Form>
    </div>
  );
});

export default AddComment;
