import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../../store/comments/commentsSlice";
import { useEffect } from "react";

const useGetComments = (videoId) => {
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

  return { loading, error, records };
};

export default useGetComments;
