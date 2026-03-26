import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;
