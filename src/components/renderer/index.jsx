import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Row, Empty } from 'antd';

const EmptyTemplate = (
  <Empty
    className='app-empty-description'
    description={(
      <span>
        No data fetched yet, press search to find something.
      </span>
    )}
  />
);

const Renderer = ({ blocks, currentSource }) => {
  const getTemplate = (props, idx) => {
    const Component = React.lazy(() => import(`./source-templates/${currentSource}`));
    return (
      <Suspense key={idx} fallback={<div>Loading...</div>}>
        <Component {...props}/>
      </Suspense>
    )
  };

  return (
    <div className="renderer-container">
      <Row type="flex" justify="space-around" align="middle">
        {blocks.length > 0
          ? blocks.map(getTemplate)
          : EmptyTemplate
        }
      </Row>
    </div>
  )
};

Renderer.propTypes = {
  blocks: PropTypes.array.isRequired,
  currentSource: PropTypes.string.isRequired
};

export default Renderer;
