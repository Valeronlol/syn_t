import React from 'react';
import { Input } from 'antd';

const Search = ({ onSearch }) => (
  <div className="search-container">
    <Input.Search
      placeholder="input search text"
      onSearch={value => onSearch(value)}
      style={{ width: 200 }}
    />
  </div>
);

export default Search
