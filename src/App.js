import React, { useState } from 'react';
import './App.css';
import Search from './components/search';
import Renderer from './components/renderer';
import Preloader from './components/preloader';
import { searchEngines, sources } from './services/search-engines';

const initialState = {
  renderData: [],
  searchQuery: '',
  loading: false,
  source: sources[0]
};

export default function App() {
  const [state, setState] = useState(initialState);

  const changeCurrentSource = source => setState({ ...initialState, source });

  const onClickSearchBtn = q => {
    setState({ ...state, loading: true });
    const { fetchData } = searchEngines[state.source];
    fetchData({ q })
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
        sources={sources}
        onSourceChange={changeCurrentSource}
      />
      {state.loading
        ? <Preloader />
        : <Renderer
            blocks={state.renderData}
            currentSource={state.source}
          />
      }

      {/*{JSON.stringify(state)}*/}
    </div>
  );
};
