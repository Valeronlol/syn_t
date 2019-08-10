import PropTypes from "prop-types";
import React from "react";
import { Col } from "antd";

const InstagramTemplate = ({ snippet }) => (
  <Col span={6} className='renderer-el'>
    <img
      src={snippet.thumbnails.high.url}
      alt={snippet.title}
      className='renderer-image'
    />
  </Col>
);

InstagramTemplate.propTypes = {
  snippet: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default InstagramTemplate
