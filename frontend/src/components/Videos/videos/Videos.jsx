/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { Col, Row } from "react-bootstrap";
import { memo } from "react";
import useVideos from "./useVideos";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideosList from "../VideosList/VideosList";
import Loading from "../../feedback/Loading/Loading";

const Videos = memo(({ selectedPlaylist }) => {
  const { loading, error, videoSelected, records, onChangeVideoHandler } =
    useVideos(selectedPlaylist);

  return (
    <Loading status={loading} error={error} type={"videos"}>
      <Row className="row-gap-4">
        <Col lg={7}>
          <VideoDetails videoSelected={videoSelected} />
        </Col>
        <Col lg={5}>
          <VideosList
            videos={records}
            onChangeVideoHandler={onChangeVideoHandler}
          />
        </Col>
      </Row>
    </Loading>
  );
});

export default Videos;
