import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Marketing from './components/Marketing';
import Header from './components/Header';
import Auth from './components/Auth';

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName} injectFirst>
        <Header />
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Marketing} />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;