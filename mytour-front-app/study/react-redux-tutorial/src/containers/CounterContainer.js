import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
//////////액션 생성 함수///////
import counter, { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateToProps = (state) => ({ number: state.counter.number });
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     console.log("increase");
//     //여기서 액션 생성 함수를 불러와 액션 객체를 만들어서 디스패치 해주겠습니다.
//     dispatch(increase());
//   },
//   decrease: () => {
//     console.log("decrease");
//     dispatch(decrease());
//   },
// });
export default connect(
  // mapStateToProps, mapDispatchToProps
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
