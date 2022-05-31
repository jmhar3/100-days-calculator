import { NumberInput } from "./NumberInput";
import { ActionInput } from "./ActionInput";

export const Inputs = (props) => {
  const { handleSubmitClick, handleDeleteClick, handleResetClick, handleDecimalClick } = props;

  return (
    <div id="inputs">
      <NumberInput number={7} {...props} />
      <NumberInput number={8} {...props} />
      <NumberInput number={9} {...props} />
      <button id="delete-button" onClick={handleDeleteClick}>DEL</button>
      <NumberInput number={4} {...props} />
      <NumberInput number={5} {...props} />
      <NumberInput number={6} {...props} />
      <ActionInput action="+" {...props} />
      <NumberInput number={1} {...props} />
      <NumberInput number={2} {...props} />
      <NumberInput number={3} {...props} />
      <ActionInput action="-" {...props} />
      <button className="action-input" onClick={handleDecimalClick}>
        .
      </button>
      <NumberInput number={0} {...props} />
      <ActionInput action="/" {...props} />
      <ActionInput action="x" {...props} />
      <button id="reset-button" onClick={handleResetClick}>RESET</button>
      <button id="submit-button" onClick={handleSubmitClick}>
        =
      </button>
    </div>
  );
};
