//封装axios 定义拦截器
import axios from "axios";
import { Toast } from "antd-mobile";

const messages = {
  401: "没有权限",
  403: "禁止访问",
  404: "找不到地址",
};

//请求基础路径，有了他才能有拦截器
const request = axios.create({
  baseURL: "/",
  //头部的信息
  headers: {},
  //延时的时间,如果超过时候就请求不到了
  // timeout: 1,
});

//先触发请求拦截器---发送请求---响应拦截器---触发.then.catch.--await
//axios设置请求拦截器(设置公共的请求参数，请求头部等信息)
request.interceptors.request.use(
  (config) => {
    // config是请求的所有信息
    // if (token) {
    // config.headers['authorization'] = `Bearer ${token}`;
    // config.headers['token'] = token;
    // }
    return config;
  },
  (err) => {
    console.log(err);
  }
);

// 添加响应拦截器(1判断响应具体是成功还是失败2返回更加具体的错误信息)
request.interceptors.response.use(
  //看响应状态码决定响应成功，失败
  (response) => {
    if (response.data.code === 20000) {
      //功能成功 返回数据
      return response.data.data;
    } else {
      return Promise.reject(response.data.message);
    }
  },

  //响应失败非2xx
  (error) => {
    let message = "未知错误，请求联络管理员解决~";
    console.log(error);
    // console.log(error.message.status); // 响应状态码
    if (error.message) {
      // 服务器返回了响应，但是响应是失败的
      // 401(Unauthorization 未授权，没有权限访问)  没有token 和 token失效或过期
      // 404（找不到：请求地址写错了）  403(禁止访问forbidden)  500（服务器内部错误）
      if (messages[error.response.status]) {
        console.log(error.response);
        message = messages[error.response.status];
      }
    } else {
      // 服务器没有返回响应
      // 请求超时(timeout)还是网络错误(network err)
      if (error.message.indexOf("NetWork Err")) {
        message = "暂无网络,请求打开网络连接或连接wifi";
      } else if (error.message.indexOf("timeout")) {
        message = "网络延迟,请打开4/5G网络";
      }
    }
    Toast.fail(message, 3);

    return Promise.reject(message);
  }
);

export default request;
