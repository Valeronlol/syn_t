import PropTypes from "prop-types";
import React from "react";
import { Col } from "antd";

const YouTubeTemplate = ({ snippet, id }) => (
  <Col span={6} key={id} className='renderer-el'>
    <img
      src={snippet.thumbnails.high.url}
      alt={snippet.title}
      className='renderer-image'
    />
  </Col>
);

YouTubeTemplate.propTypes = {
  snippet: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};


export default YouTubeTemplate
