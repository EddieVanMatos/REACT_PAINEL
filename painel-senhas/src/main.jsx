import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n/i18n'; // Suporte ao i18n para tradução de idiomas
import GlobalStyle from './styles/globalStyles'; // Importação dos estilos globais

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
