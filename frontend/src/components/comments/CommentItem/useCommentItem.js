import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../store/comments/commentsSlice";

const useCommentItem = () => {
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

  return { deleteCommentHandler, isLoading };
};

export default useCommentItem;
