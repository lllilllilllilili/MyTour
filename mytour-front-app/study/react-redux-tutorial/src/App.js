import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
