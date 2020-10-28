import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//引入路由
import routes from "./config/routes";

import "antd-mobile/dist/antd-mobile.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route) => {
            return <Route {...route} key={route.path}></Route>;
          })}
        </Switch>
      </Router>
    );
  }
}
