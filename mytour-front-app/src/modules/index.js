import { combineReducers } from "redux";
import userInfo from "./EmailSignup";
import userInfoError from "./EmailSignup";
const rootReducer = combineReducers(
  //필요한 기능을 기술합니다.
  userInfo,
  userInfoError
);
//복수개 는 { } 빼고
//개수 상관없으면

export default rootReducer;
