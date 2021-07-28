import CounterContainer from "./components/CounterContainer";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CounterContainer number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
