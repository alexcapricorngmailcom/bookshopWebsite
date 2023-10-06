import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { reduxStore } from './redux/reduxStore';
import { ScrollToTopGlobal } from './shared/components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <ScrollToTopGlobal />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);