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
  }, [result, input, setDisplayValue]);

  const handleNumberClick = useCallback(
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
                input: parseInt(`${input}${number}`),
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

  const handleActionClick = useCallback(
    (action) => {
      setCalculatorState((prevState) => {
        return {
          ...prevState,
          action: action,
        };
      });
      setNewAction(true);
    },
    [action, setCalculatorState, setNewAction]
  );

  const handleSubmitClick = useCallback(() => {
    const calculatedResult = () => {
      switch (action) {
        case "x":
          return prevInput * input;
        case "/":
          return prevInput / input;
        case "-":
          return prevInput - input;
        case "+":
         return (prevInput + input);
      }
    };
    setCalculatorState((prevState) => {
      return {
        ...prevState,
        result: calculatedResult(),
      };
    });
  }, [action, prevInput, input]);

  return (
    <div id="calculator">
      <Display value={displayValue} />
      <Inputs
        handleNumberClick={handleNumberClick}
        handleActionClick={handleActionClick}
        handleSubmitClick={handleSubmitClick}
      />
    </div>
  );
}

export default App;
