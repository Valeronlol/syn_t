import PropTypes from "prop-types";
import React, { useState } from 'react';
import { Col } from "antd";

const YouTubeTemplate = ({ snippet, id }) => {
  const [isShowIFrame, setIFrameStatus] = useState(false);

  const startVideo = () => setIFrameStatus(true);

  return (
    <Col span={6} key={id} className='renderer-el'>
      {isShowIFrame
        ? (
          <iframe
            title='yt-frame'
            className='renderer-el-ytplayer'
            type='text/html'
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            frameBorder='0'
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )
        : (
          <>
            <img
              src={snippet.thumbnails.high.url}
              alt={snippet.title}
              className='renderer-image'
            />
            <div className='renderer-el-overflow'>
              <img
                className='yt-play-icon'
                src='yt_play.png'
                alt='play'
                onClick={startVideo}
              />
            </div>
          </>
        )
      }
    </Col>
  )
};

YouTubeTemplate.propTypes = {
  snippet: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};


export default YouTubeTemplate
