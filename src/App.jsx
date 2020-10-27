import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import "antd-mobile/dist/antd-mobile.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <h1 className="app"> App。。</h1>
      </Router>
    );
  }
}
