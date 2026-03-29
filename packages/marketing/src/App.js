import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'marketing',
});

const App = ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName} injectFirst>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;
