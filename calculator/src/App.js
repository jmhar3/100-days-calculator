import { useState, useCallback } from "react";

import "./App.css";
import { Header } from "./components/Header";
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
      const inputs = (prevState) => {
        const { input } = prevState;
        if (newAction) {
          return { prevInput: input, input: `${number}` };
        } else {
          return input
            ? { input: `${input}${number}` }
            : { input: `${number}` };
        }
      };
      setCalculatorState((prevState) => {
        return {
          ...prevState,
          ...inputs(prevState),
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
          return +prevInput + +input;
      }
    };

    // if result ends in .000... convert to integer

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

  const handleDecimalClick = useCallback(() => {
    setCalculatorState((prevState) => {
      const newInput = /[.]/.test(input) ? input : `${input}.`;
      return { ...prevState, input: newInput };
    });
  }, [setCalculatorState, input]);
  
  const [colorTheme, setColorTheme] = useState("dark");

  const handleColorTheme = useCallback((event) => {
   setColorTheme(event.target.innerText);
  }, [setColorTheme])

  return (
    <div id="calculator">
      <Header colorTheme={colorTheme} handleColorTheme={handleColorTheme} />
      <Display value={input} />
      <Inputs
        handleNumberClick={handleNumberClick}
        handleActionClick={handleActionClick}
        handleSubmitClick={handleSubmitClick}
        handleResetClick={handleResetClick}
        handleDeleteClick={handleDeleteClick}
        handleDecimalClick={handleDecimalClick}
      />
    </div>
  );
}

export default App;
