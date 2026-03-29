import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
});

const App = ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName} injectFirst>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signin" component={SignIn} />
          <Route exact path="/auth/signup" component={SignUp} />
          <Route path="/" component={SignIn} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;
