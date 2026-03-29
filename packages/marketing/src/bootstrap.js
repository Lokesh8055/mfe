import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mountMarketing = (el, { onNavigate } = {}) => {
  const history = createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    el
  );
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mountMarketing(devRoot);
  }
}

export { mountMarketing };