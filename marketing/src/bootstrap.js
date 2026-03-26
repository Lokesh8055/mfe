import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mountMarketing = (el) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    el
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mountMarketing(devRoot);
  }
}

export { mountMarketing };