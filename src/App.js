import logo from './logo.svg';
import './App.css';
import { Counter } from "./counter";
import { CounterFC } from "./counterfc"
import { Selector } from './selector';
//import { SelectorFC } from './selectorfc';

function App() {
  return (
    <div className="App">
      <Counter name="Class component counter" />
      <CounterFC name="Functional component counter" />
      <Selector name="Selector class component" />
      {/* <SelectorFC name="Selector Functional component" /> */}
    </div>
  );
}

export default App;
