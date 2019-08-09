import React, { useState } from 'react';
import './App.css';
import Search from './components/search';
import Renderer from './components/renderer';
import Preloader from './components/preloader';
import { fetchYouTubeVideos } from './utils';

export default () => {
  const [state, setState] = useState({
    renderData: [],
    searchQuery: '',
    loading: false
  });

  const onClickSearchBtn = q => {
    setState({ ...state, loading: true });
    fetchYouTubeVideos({ q })
      .then(renderData => setState({
        ...state,
        renderData,
        loading: false
      }))
      .catch(() => setState({ ...state, loading: false }))
  };

  return (
    <div className="app-container">
      <Search
        onSearch={onClickSearchBtn}
      />
      {state.loading
        ? <Preloader />
        : <Renderer
            blocks={state.renderData}
          />
      }
    </div>
  );
}
