import styles from "./styles.module.css";

const { playlistsSkeleton, playlistSkeleton } = styles;

const PlaylistsSkeleton = () => {
  return (
    <div className={playlistsSkeleton}>
      {Array(3)
        .fill(0)
        .map((_, index) => {
          return <div key={index} className={playlistSkeleton}></div>;
        })}
    </div>
  );
};

export default PlaylistsSkeleton;
