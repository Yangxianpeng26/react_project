import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";

import "./index.css";

export default class CountryPicker extends Component {
  render() {
    return (
      <div>
        <NavBar
          onClick={this.goback}
          mode="light"
          icon={<Icon className="left" type="left" />}
          onLeftClick={() => console.log("onLeftClick")}
        >
          硅谷注册
        </NavBar>
      </div>
    );
  }
}
