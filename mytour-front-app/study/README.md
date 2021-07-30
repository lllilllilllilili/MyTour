`react-redux-tutorial` 에서 소스코드 참고 부탁드립니다.

## Redux 설치하기

`npm create react-app react-redux-tutorial`

`cd react-redux-tutorial`

`npm add redux react-redux`

## Step1. UI 준비하기

`프레젠테이셔널 컴포넌트` 와 `컨테이너 컴포넌트`를 분리하는것을 첫번째로 하겠습니다.

\*프레젠테이셔널 컴포넌트 : `props`를 받아 와서 화면에 UI를 보여 주기만 하는 컴포넌트

\*컨테이너 컴포넌트 : 리덕스와 연동되어 있는 컴포넌트, 리덕스로부터 상태를 받아오기도 하고 리덕스 스토어에 액션을 디스패치 하기도 합니다.

**관심사를 분리하는것이 목표입니다. **

형태에서 `App.js`에서 Counter와 Todos 모두 렌더링 하고 있습니다.

```javascript
|-- Components
|   `-- Counter.js
|   `-- Todos.js
|-- App.js
```

## 리덕스 관련 코드 작성

`액션 타입`, `액션 생성 함수`, `리듀서 코드`를 작성합니다.

`modules` 라는 파일에 몰아서 다 작성할 건데 이를 `Ducks` 패턴 이라고 합니다.

```javascript
|-- modules
```

### 액션 타입 정의하기

액션 타입은 대문자로 정의하는데 `모듈 이름/액션 이름` 과 같은 형태로 작성합니다.

```javascript
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
```

액션 타입을 지정하고 나면 액션 생성 함수를 만들어 줍니다.

```javascript
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
```

마찬가지 원리로 todos 도 만들어 주었습니다.

```javascript
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

//객체에 한 개 이상의 값이 들어가 있기 때문에 불변성을 유지하는것이 중요합니다.
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}
export default todos;
```

`스토어`를 만들때는 `리듀서` 하나만 사용해야 합니다.

그래서 기존에 `리듀서`를 하나로 합쳐줘야 합니다.

`combineReducers` 유틸 함수를 이용해서 쉽게 처리할 수 있습니다. !!!

```javascript
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
```

### 스토어 만들기

리듀서를 만들었으면 마지막으로 `리덕스`를 적용할 차례입니다.

`src/index.js` 에서 시작합니다.

### Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용하기

리액트 컴포넌트에 스토어를 사용할 수 있도록 App 컴포넌트를 `react-redux`에서 제공하는 `Provider` 컴포넌트를 감싸줍니다.

이 컴포넌트를 사용할 때는 store를 `props`로 전달해주어야 합니다.

크롬 웹 스토어(https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko&) 에서 `Redux DevTools`를 설치합니다.

그리고 패키징을 설치하여 redux를 사용해 보겠습니다.

`npm add redux-devtools-extension`

`index.js`에 `const store = createStore(rootReducer, composeWithDevTools);` 코드를 추가해주면 됩니다.

## 컨테이너 컴포넌트 만들기

리덕스 스토어에 접근하여 원하는 상태를 받아 오고, 액션도 디스패치해줄 차례 입니다.

리덕스 스토어와 연동된 컴포넌트를 `컨테이너 컴포넌트`라고 합니다.

`connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)`

**mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수**

**mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수**

`connect`가 반환된 함수에 컴포넌트를 파라미터로 넣어주면 리덕스와 연동된 컴포넌트가 만들어집니다.

```javascript
const makeContainer = connect(mapStateToProps, mapDispatchToProps))
makeContainer(타깃 컴포넌트)
```
