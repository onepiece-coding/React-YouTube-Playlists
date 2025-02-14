import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

const {
  vidoesSkeleton,
  videoDetailsSkeleton,
  videoIframeSkeleton,
  videoInfoSkeleton,
  videosListSkeleton,
  videoItemSkeleton,
} = styles;

const VidoesSkeleton = () => {
  return (
    <div className={vidoesSkeleton}>
      <Row>
        <Col lg={7}>
          <div className={videoDetailsSkeleton}>
            <div className={videoIframeSkeleton}></div>
            <div className={videoInfoSkeleton}></div>
          </div>
        </Col>
        <Col lg={5}>
          <div className={videosListSkeleton}>
            {Array(3)
              .fill(0)
              .map((_, index) => {
                return <div key={index} className={videoItemSkeleton}></div>;
              })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default VidoesSkeleton;
