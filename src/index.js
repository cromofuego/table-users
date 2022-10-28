import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppProvider>
  </React.StrictMode>
);

