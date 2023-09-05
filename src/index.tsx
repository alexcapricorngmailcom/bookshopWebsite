import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './shared/components/ScrollToTop';
import { Provider } from 'react-redux';
import { rootStore } from './redux/rootStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);