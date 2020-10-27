/* 
计算前一个状态数据和现在的状态数据
*/
//对reducer进行拆分
import { combineReducers } from "redux";

function store(prevState = {}, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}

export default combineReducers({
  store,
});
