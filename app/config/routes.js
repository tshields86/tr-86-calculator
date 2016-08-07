import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import all routes
import Main from 'Main';
import Welcome from 'Welcome';
import About from 'About';
import Calculator from 'Calculator';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Welcome}/>
      <Route path="About" component={About}/>
      <Route path="Calculator" component={Calculator}/>
    </Route>
  </Router>
);

export default routes;
