import { createAction, handleActions } from "redux-actions";

//액션에 타입을 정의 할때는 '모듈 이름/액션 이름' 형태로 작성합니다.

const USER_INFO_EMAIL = "userInfo/USER_INFO_EMAIL";
const USER_INFO_PASSWORD = "EmailSignup/USER_INFO_PASSWORD";
const USER_INFO_PASSWORD2 = "EmailSignup/USER_INFO_PASSWORD2";
const USER_INFO_MEMBERAGREE = "EmailSignup/USER_INFO_MEMBERAGREE";
const USER_INFO_PRIVACYAGREE = "EmailSignup/USER_INFO_PRIVACYAGREE";
const USER_INFO_LOCATIONAGREE = "EmailSignup/USER_INFO_LOCATIONAGREE";

const USER_INFO_ERROR_EMAIL = "EmailSignup/USER_INFO_ERROR_EMAIL";
const USER_INFO_ERROR_PASSWORD = "EmailSignup/USER_INFO_ERROR_PASSWORD";
const USER_INFO_ERROR_PASSWORD2 = "EmailSignup/USER_INFO_ERROR_PASSWORD2";

export const setUserInfoEmail = createAction(USER_INFO_EMAIL, (email) => email);
export const setUserInfoPassword = createAction(
  USER_INFO_PASSWORD,
  (password) => password
);
export const setUserInfoPassword2 = createAction(
  USER_INFO_PASSWORD2,
  (password2) => password2
);
export const setUserInfoMemberAgree = createAction(
  USER_INFO_MEMBERAGREE,
  (memberAgree) => memberAgree
);
export const setUserInfoPrivacyAgree = createAction(
  USER_INFO_PRIVACYAGREE,
  (privacyAgree) => privacyAgree
);
export const setUserInfoLocationAgree = createAction(
  USER_INFO_LOCATIONAGREE,
  (locationAgree) => locationAgree
);

export const setUserInfoErrorEmail = createAction(
  USER_INFO_ERROR_EMAIL,
  (email) => email
);
export const setUserInfoErrorPassword = createAction(
  USER_INFO_ERROR_PASSWORD,
  (password) => password
);
export const setUserInfoErrorPassword2 = createAction(
  USER_INFO_ERROR_PASSWORD2,
  (password2) => password2
);

const initialUserInfo = {
  email: "",
  password: "",
  password2: "",
  memberAgree: false,
  privacyAgree: false,
  locationAgree: false,
};

const initialUserInfoError = {
  email: false,
  password: false,
  password2: false,
};

const userInfo = handleActions(
  {
    [USER_INFO_EMAIL]: (state, { payload: email }) => ({ ...state, email }),
    [USER_INFO_PASSWORD]: (state, { payload: password }) => ({
      ...state,
      password,
    }),
    [USER_INFO_ERROR_PASSWORD2]: (state, { payload: password2 }) => ({
      ...state,
      password2,
    }),
    [USER_INFO_MEMBERAGREE]: (state, { payload: memberAgree }) => ({
      ...state,
      memberAgree,
    }),
    [USER_INFO_PRIVACYAGREE]: (state, { payload: privacyAgree }) => ({
      ...state,
      privacyAgree,
    }),
    [USER_INFO_LOCATIONAGREE]: (state, { payload: locationAgree }) => ({
      ...state,
      locationAgree,
    }),
  },
  initialUserInfo
);

const userInfoError = handleActions(
  {
    [USER_INFO_ERROR_EMAIL]: (state, { payload: email }) => ({
      ...state,
      email,
    }),
    [USER_INFO_ERROR_PASSWORD]: (state, { payload: password }) => ({
      ...state,
      password,
    }),
    [USER_INFO_ERROR_PASSWORD2]: (state, { payload: password2 }) => ({
      ...state,
      password2,
    }),
  },
  initialUserInfoError
);

export default { userInfo, userInfoError };
