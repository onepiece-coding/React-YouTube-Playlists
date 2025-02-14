import styles from "./styles.module.css";

const {
  commentsSkeleton,
  commentSkeleton,
  commentTextSkeleton,
  deleteCommentSkeleton,
} = styles;

const CommentsSkeleton = () => {
  return (
    <div className={`d-flex flex-column gap-2 ${commentsSkeleton}`}>
      {Array(3)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={index}
              className={`d-flex justify-content-between align-items-center ${commentSkeleton}`}
            >
              <div className={commentTextSkeleton}></div>
              <div className={deleteCommentSkeleton}></div>
            </div>
          );
        })}
    </div>
  );
};

export default CommentsSkeleton;
