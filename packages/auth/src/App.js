import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
});

const App = ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName} injectFirst>
      <Router history={history}>
        <Switch>

        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;
