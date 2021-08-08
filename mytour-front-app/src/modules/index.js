import { combineReducers } from "redux";
import { userInfo } from "./EmailSignup";
import { userInfoError } from "./EmailSignup";
import loading from "./thunk-example/loading";
import sample from "./thunk-example/sample";
const rootReducer = combineReducers(
  //필요한 기능을 기술합니다.
  // userInfo,
  // userInfoError,
  { userInfo, userInfoError, loading, sample }
);
//복수개 는 { } 빼고
//개수 상관없으면

export default rootReducer;
