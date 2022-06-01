import { useState, useCallback, useEffect } from "react";

import "./App.css";
import { Display } from "./components/Display";
import { Inputs } from "./components/inputs/Inputs";

function App() {
  const [calculatorState, setCalculatorState] = useState({
    input: 0,
    prevInput: null,
    action: null,
  });
  const [newAction, setNewAction] = useState(false);

  const { input, prevInput, action } = calculatorState;

  const handleNumberClick = useCallback(
    (number) => {
      const props = () => {
        if (newAction) {
          return { prevInput: input, input: number };
        } else {
          return input
            ? { input: parseInt(`${input}${number}`) }
            : { input: number };
        }
      };
      setCalculatorState((prevState) => {
        return {
          ...prevState,
          ...props(),
        };
      });
      newAction && setNewAction(false);
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
    const result = () => {
      switch (action) {
        case "x":
          return prevInput * input;
        case "/":
          return prevInput / input;
        case "-":
          return prevInput - input;
        case "+":
          return prevInput + input;
      }
    };
    setCalculatorState((prevState) => {
      return {
        ...prevState,
        input: result(),
      };
    });
  }, [setCalculatorState, action, prevInput, input]);

  const handleResetClick = useCallback(() => {
    setCalculatorState({
      input: 0,
      prevInput: null,
      action: null,
    });
  }, [setCalculatorState]);

  const handleDeleteClick = useCallback(() => {
    const removeLastInput = Number(input.toString().slice(0, -1));
    setCalculatorState((prevState) => {
      return { ...prevState, input: removeLastInput };
    });
  }, [setCalculatorState, input]);
  return (
    <div id="calculator">
      <h5 id="display">{input ? input : 0}</h5>
      <Inputs
        handleNumberClick={handleNumberClick}
        handleActionClick={handleActionClick}
        handleSubmitClick={handleSubmitClick}
        handleResetClick={handleResetClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default App;
