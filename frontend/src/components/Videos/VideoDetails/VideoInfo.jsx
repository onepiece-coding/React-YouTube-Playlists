/* eslint-disable react/prop-types */

import { Button } from "react-bootstrap";

const VideoInfo = ({
  title,
  auteur,
  subscribers,
  likes,
  dislikes,
  description,
}) => {
  return (
    <div className="border border-2 rounded p-2 mt-2">
      <h3 className="fs-6 mb-0">{title}</h3>
      <div className="my-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <img
            src={`/images/${auteur?.photo}`}
            alt={auteur?.name}
            width={50}
            height={50}
          />
          <div>
            <h4 className="fs-6 mb-0">{auteur?.name}</h4>
            <em className="fs-6">{subscribers} subscribers</em>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Button variant="success" size="sm" style={{ color: "white" }}>
            <i className="bi bi-hand-thumbs-up"></i> {likes}
          </Button>
          <Button variant="danger" size="sm" style={{ color: "white" }}>
            <i className="bi bi-hand-thumbs-down"></i> {dislikes}
          </Button>
        </div>
      </div>
      <p className="m-0">{description}</p>
    </div>
  );
};

export default VideoInfo;
