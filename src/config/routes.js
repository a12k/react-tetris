import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from '../components/Main';
import Home from "../components/Home";
import App from '../components/App';
import About from "../components/About";

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="/tetris" component={App} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

module.exports = routes;