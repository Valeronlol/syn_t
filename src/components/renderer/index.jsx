import React from 'react';
import { Row, Col, Empty } from 'antd';

const renderBlock = ({ snippet, id }) => (
  <Col span={6} key={id} className='renderer-el'>
    <img
      src={snippet.thumbnails.high.url}
      alt={snippet.title}
      className='renderer-image'
    />
  </Col>
)

const emptyDescription = (
  <span>
    No data fetched yet, press search to find something.
  </span>
);

export default ({ blocks }) => (
  <div className="renderer-container">
    <Row type="flex" justify="space-around" align="middle">
      {blocks.length > 0
        ? blocks.map(renderBlock)
        : <Empty className='app-empty-description' description={emptyDescription}/>
      }
    </Row>
  </div>
);
