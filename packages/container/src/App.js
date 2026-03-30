import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';


import Header from './components/Header';
import ProgressBar from './components/ProgressBar';

const Marketing = lazy(() => import('./components/Marketing'));
const Auth = lazy(() => import('./components/Auth'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName} injectFirst>
        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth" component={() => <Auth onSignIn={() => setIsSignedIn(true)} />} />
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;