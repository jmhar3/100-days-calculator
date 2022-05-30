import { useState, useCallback, useEffect } from "react";

import "./App.css";
import { Display } from "./components/Display";
import { Inputs } from "./components/inputs/Inputs";

function App() {
  const [calculatorState, setCalculatorState] = useState({
    input: 0,
    prevInput: null,
    action: null,
    result: null,
  });
  const [displayValue, setDisplayValue] = useState(0);
  const [newAction, setNewAction] = useState(false);

  const { input, prevInput, action, result } = calculatorState;

  useEffect(() => {
    result ? setDisplayValue(result) : setDisplayValue(input);
  }, [action, prevInput, input, setDisplayValue]);

  const handleNumberInput = useCallback(
    (number) => {
      if (newAction) {
        setCalculatorState((prevState) => {
          return {
            ...prevState,
            prevInput: input,
            input: number,
          };
        });
        setNewAction(false);
      } else {
        setCalculatorState((prevState) => {
          return input
            ? {
                ...prevState,
                input: `${input}${number}`,
              }
            : {
                ...prevState,
                input: number,
              };
        });
      }
    },
    [setCalculatorState, action, prevInput, input, setNewAction, newAction]
  );

  const handleActionButton = useCallback(
    (action) => {
      setCalculatorState((prevState) => {
        return {
          ...prevState,
          action: action,
        };
      });
      setNewAction(true);
    },
    [input, prevInput, action, result, displayValue]
  );

  return (
    <div id="calculator">
      <Display value={displayValue} />
      <Inputs
        handleNumberInput={handleNumberInput}
        handleActionButton={handleActionButton}
      />
    </div>
  );
}

export default App;
