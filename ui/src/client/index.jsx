import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './components/App';

import './index.css';

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
