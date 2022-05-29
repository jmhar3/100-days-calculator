import { useState } from "react";

import "./App.css";
import {Display} from './components/Display';
import {Inputs} from './components/inputs/Inputs';

function App() {
  const [calculatorState, setCalculatorState] = useState({
    input: 0,
    prevInput: 0,
    alteration: "",
    result: 0,
  });

  return (
    <div id="calculator">
      <Display value={calculatorState.result} input={calculatorState.input} />
      <Inputs />
    </div>
  );
}

export default App;
