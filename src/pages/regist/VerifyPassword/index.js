import React, { useState } from "react";
import { NavBar, Icon, WingBlank, InputItem, Button, Modal } from "antd-mobile";
import { createForm } from "rc-form";

import { reqRegistUser } from "@api/regist";

import "./index.css";
import msg from "@assets/imgs/msg.png";

function VerifyPassword({ form, location, history }) {
  const [isSecret, setIsSecret] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  //在高阶函数createForm中有getFieldProps方法可以获取表单内容
  const { getFieldProps, getFieldValue } = form;

  //根据isSecret判断是眼睛的变化
  const iconClassName =
    "iconfont verify-password-icon " + (isSecret ? "icon-eye1" : "icon-eye");

  //点击切换眼睛
  const setSecret = () => {
    setIsSecret(!isSecret);
  };

  //表单验证规则
  const validator = (rule, value, callback) => {
    //正则表达式
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/;
    //按钮变暗
    let isDisabled = true;
    //如果表单内容和正则相配按钮高亮
    if (reg.test(value)) {
      isDisabled = false;
    }
    //一个方法，如果与正则相配就false,不然就true
    setIsDisabled(isDisabled);
    //一定要有回调函数
    callback();
  };
  //点击按钮
  const next = async () => {
    const phone = location.state;
    const password = getFieldValue("password");
    await reqRegistUser(phone, password);
    history.push("/login");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon className="left" type="left" />}
        onLeftClick={goBack}
      >
        硅谷注册
      </NavBar>
      <WingBlank>
        <img className="verify-code-msg" src={msg} alt="msg" />
        <p className="verify-code-tip">请设置登录密码</p>
        <InputItem
          {...getFieldProps("password", {
            rules: [{ validator }],
          })}
          type={isSecret ? "password" : "text"}
          className="verify-password-btn"
          placeholder="请设置8-20位登录密码"
          extra={<span onTouchEnd={setSecret} className={iconClassName}></span>}
        />
        <p className="verify-password-text">
          密码由8-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写
        </p>
        <Button
          onClick={next}
          type="warning"
          disabled={isDisabled}
          className="warning-btn"
        >
          下一步
        </Button>
        <span className="verify-code-question">
          遇到问题?请<a>联系客服</a>
        </span>
      </WingBlank>
    </div>
  );
}

export default createForm()(VerifyPassword);
