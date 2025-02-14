import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../../store/comments/commentsSlice";

const useAddComment = (videoId) => {
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

  return { addCommentHandler, comment, setComment, isLoading };
};

export default useAddComment;
