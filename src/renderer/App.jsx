// import * as React from 'react'

// export const App = () => {
//   return <h1>Hello React!</h1>
// }

import * as React from 'react';
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import RouteLayout from '../layout/RouteLayout';

export const App = () => {
  return (
    // <h1>Hello React!</h1>
    <div className="App">
      <Router>
          <Switch>
            <RouteLayout exact path="/" component={Home} />
            <RouteLayout exact path="/about" component={About} />
          </Switch>
        </Router>
    </div>
  );
}
