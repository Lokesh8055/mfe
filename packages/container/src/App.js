import React, { useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Marketing from './components/Marketing';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName} injectFirst>
        <Header />
        <Marketing />
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;