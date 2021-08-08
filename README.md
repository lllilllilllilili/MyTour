# MyTour

MyTour Front App (React)

## Directory 구조 (수정사항 있으면 이슈에 등록해주세요)

```javascript
|--mytour-front-app
|   `-- public(삭제예정)
|   `-- node_modules
|   `-- src
|      `-- api
|      `-- assets
|        `-- css
|        `-- image
|   `-- components
|      `-- auth
|      `-- main
|      `-- tourRoute
|   `-- containers
|   `-- lib
|      `-- styles
|      `-- utils
|   `-- modules
|   `-- Pages
|      `-- Auth
|      `-- Review
|   `-- study(project에 필요한 기술 도입 시 테스트 클라이언트)
|--
```

## 참고

## Redux 구조

### Redux 규칙

- 단일 스토어 : Application안에 하나의 스토어를 사용하는것은 권장합니다.
- 읽기 전용 상태 : 상태 업데이트 할때 기존 객체를 건드리지 않고 새로운 객체를 생성해주어야 합니다. `immer` , `spread` 연산자를 사용합니다.
- 순수 함수 : 이전 상태와 액션 객체를 파라미터로 받습니다. (밑에 설명을 추가했습니다) 파라미터 외의 값에는 의존하면 안됩니다. (네트워크의 경우 리덕스 미들웨어에서 처리합니다.), 이전 상태는 건드리지 않고 변화를 준 새로운 상태 객체를 만들어서 변환시켜줍니다. 또, 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 합니다.

이 프로젝트에서는 `react-redux` 라이브러리를 활용해서 subscribe 대신 리액트 상태를 조회하게 됩니다.

![](https://miro.medium.com/max/2732/1*M9d5RTuCdIQUhJuuJY10sw.png)

`src/index.js` 에서 `store` 를 생성해서 props로 전달하게 됩니다.

```javascript
(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
),
  document.getElementById("root");
```

`container => component` 로 현재 스토어가 가지고 있는 상태를 props로 전달하는것 과 스토어의 내장 함수 `dispatch` 를 파라미터로 받아 옵니다.

`connect` 를 사용하게 되면 `스토어의 상태가 바뀔 때마다 render함수가 호출되도록 하는것` 인데 react-redux 라이브러리를 사용하기 때문에 connect가 subscribe 역할을 대신하게 됩니다.

```JavaScript
export default connect(
    ({userInfo, userInfoError}) => ({
        userInfo : userInfo,
        userInfoError : userInfoError
    }),
    {
        setUserInfoEmail,
        setUserInfoPassword,
        setUserInfoPassword2,
        setUserInfoMemberAgree,
        setUserInfoPrivacyAgree,
        setUserInfoLocationAgree,
        setUserInfoErrorEmail,
        setUserInfoErrorPassword,
        setUserInfoErrorPassword2,
    }
)(EmailSignupContainer);
```

`redux 관련 코드를 작성하는것` 은 아래 3가지를 완성시키면 됩니다.

- Action 타입 정의
- Action 생성 함수 구성
- Reducer 함수 만들기(+초기 저장할 상태)

```javascript
//Action 타입 정의
const USER_INFO_EMAIL = "EmailSignup/USER_INFO_EMAIL";

//Action 생성 함수 구성
export const setUserInfoEmail = createAction(USER_INFO_EMAIL, (email) => email);

//초기 저장할 상태
const initialUserInfo = {
  email: "",
};

//Reducer 함수 만들기
const userInfo = handleActions(
  {
    [USER_INFO_EMAIL]: (state, { payload: email }) => ({ ...state, email }),
  },
  initialUserInfo
);
```

**Action 타입 생성** : 모듈 이름/액션 이름 으로 구성합니다. 이는 액션 생성 함수에서 사용됩니다.

**Action 생성 함수 구성** : Action 생성 함수를 구성하고 이 함수를 호출하게 될 경우 `dispatch` 됩니다.

**Reducer 함수 만들기** : `dispatch` 시 action 타입에 따라 현재 상태를 참조해서 새로운 객체를 생성해 반환하게 됩니다.

## Redux Middleware(redux-logger, redux-thunk)

**`http:localhost:8080/sample` 로 접속하면 Redux Middleware를 적용한 sample로 Routing 됩니다. **

Middleware : 액션을 디스패치했을 때 리듀서에서 이를 처리하기 전에 사전에 지정된 작업들을 정의합니다.

![](https://media.vlpt.us/images/hyundong_kk/post/b4c8dfa5-70a9-4d03-ada0-782d99d9531d/image.png)
**(https://velog.io/@hyundong_kk/React-thunk)**

**redux-logger** : 콘솔에서 액션 정보와 업데이트 되기 전후의 상태를 확인할 수 있습니다.

**redux-thunk** : 비동기 작업을 처리할 때 사용하고, 특정 작업을 나중에 할 수 있도록 함수 형태로 감싸게 됩니다.

### 순서

호출 순서는 `src/index.js` 에서 `store` 생성 시 `ReduxThunk`를 전달해 줍니다. (store생성 시 rootReducer를 포함)

`src/App.js`에서 이를 받아서 `Routing` 에 따라 props로 전달하게 됩니다. (Component와 Redux를 연결하기 위해 `connect`를 사용해야 합니다)

redux-logger, redux-thunk를 적용한 파일은 `SampleContainer` 이고 `Sample`을 하위 컴포넌트로 호출하게 됩니다.

`modules/sample.js` 에서 Thunk 함수를 호출하게 됩니다.

```javascript
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
```

Thunk함수에서 type (`GET_POST` 혹은 `GET_USERS`) 를 넘겨주게 되면 `dispatch`에 의해서 reducer함수로 넘어갑니다.

이외에 loading 함수는 `startLoading : API호출 전`, `finishLoading : API호출 후` 역할 입니다.

```javascript
import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(startLoading(type));
      throw e;
    }
  };
}
```

`SampleContainer`에서 `useEffect` 를 사용해서 `Mount` 되는 시점에서 `getPost`, `getUsers`를 불러오게 됩니다.

```javascript
useEffect(() => {
  const fn = async () => {
    try {
      await getPost(1);
      await getUsers(1);
    } catch (e) {
      console.log(e);
    }
  };
  fn();
  // getPost(1);
  //getUsers();
}, [getPost, getUsers]);
```

## 추후 작업들

- `redux-middleware` 작업(끝)
- `코드 스플릿팅`
- `서비스 기능개발`
- `서버 사이드 렌더링`
- `JWT`
- `그외 React 공부`
