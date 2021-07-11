import React from 'react';
import { render } from 'react-dom';
import App from './App';
import GlobalStyles from './components/UI/GlobalStyles';

render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
