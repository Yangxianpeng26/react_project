//创建 createStore方法保存store  applyMiddleware作用是将所有中间件组成一个数组，依次执行
import { createStore, applyMiddleware } from "redux";
//异步请求
import thunk from "redux-thunk";
//引入actions文件
import reducers from "./reducers";
//浏览器插件
import { composeWithDevTools } from "redux-devtools-extension";

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(middleware);
}

export default createStore(reducers, middleware);
