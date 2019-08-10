import PropTypes from "prop-types";
import React, { useState } from "react";
import { Col, Icon } from "antd";

const InstagramTemplate = ({ largeImageURL, previewURL, id }) => {
  const [isShowModal, setModalStatus] = useState(false);
  const showModal = () => setModalStatus(true);
  const hideModal = () => setModalStatus(false);

  return (
    <Col span={6} className='renderer-el'>
      <img
        src={previewURL}
        alt={`preview-${id}`}
        className='renderer-image-insta'
        onClick={showModal}
      />

      {isShowModal && (
        <div className='renderer-image-insta-container'>
          <Icon
            className='close-image-icon'
            type="close-square"
            theme="filled"
            onClick={hideModal}
          />
          <img
            src={largeImageURL}
            alt={`full-${id}`}
            className='renderer-image-insta-full'
          />
        </div>
      )}
    </Col>
  )
};

InstagramTemplate.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  previewURL: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default InstagramTemplate
