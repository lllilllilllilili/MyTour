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
|   `-- lib(utils로 통합예정)
|   `-- modules
|   `-- Pages
|      `-- Auth
|      `-- Review
|   `-- utils
|   `-- study(project에 필요한 기술 도입 시 테스트 클라이언트)
|-- 
```



## Redux 구조

### Redux 규칙

- 단일 스토어 : Application안에 하나의 스토어를 사용하는것은 권장합니다. 
- 읽기 전용 상태 : 상태 업데이트 할때 기존 객체를 건드리지 않고 새로운 객체를 생성해주어야 합니다. `immer` , `spread` 연산자를 사용합니다.
- 순수 함수 : 이전 상태와 액션 객체를 파라미터로 받습니다. (밑에 설명을 추가했습니다) 파라미터 외의 값에는 의존하면 안됩니다. (네트워크의 경우  리덕스 미들웨어에서 처리합니다.), 이전 상태는 건드리지 않고 변화를 준 새로운 상태 객체를 만들어서 변환시켜줍니다. 또, 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 합니다. 



이 프로젝트에서는 `react-redux` 라이브러리를 활용해서 subscribe 대신 리액트 상태를 조회하게 됩니다.





![](https://miro.medium.com/max/2732/1*M9d5RTuCdIQUhJuuJY10sw.png)

`src/index.js` 에서 `store` 를 생성해서 props로 전달하게 됩니다. 

```javascript
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
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
  email: ""
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



## 추후 작업들

- `redux-middleware` 작업

