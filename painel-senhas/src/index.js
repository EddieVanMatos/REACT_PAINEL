import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n/i18n'; // Suporte para i18n

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
