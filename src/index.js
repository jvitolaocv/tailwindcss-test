import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Authenticated from './Authenticated';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page from './Page';

ReactDOM.render(
  <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Authenticated" component={Authenticated} />
        </Switch>
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();