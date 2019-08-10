import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select } from 'antd';

const Search = ({ onSearch, sources, onSourceChange }) => (
  <div className="search-container">
    <Input.Search
      placeholder="input search text"
      onSearch={value => onSearch(value)}
      style={{ width: 300 }}
    />
    {sources.length > 0 && (
      <Select defaultValue={sources[0]} style={{ width: 120 }} onChange={onSourceChange}>
        {sources.map((source, idx) => <Select.Option key={idx} value={source}>{source}</Select.Option>)}
      </Select>
    )}
  </div>
);

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  sources: PropTypes.array.isRequired,
  onSourceChange: PropTypes.func.isRequired,
};

export default Search;

