import React from 'react';
import './Content.css';
import Detail from './Detail';

const Content = () => {
  return (
    <div className="content">
      <div className="sub-content">
        <header>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </header>
      </div>
      <Detail />
    </div>
  );
};

export default Content;
