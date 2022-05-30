export const NumberInput = ({ number, handleNumberInput }) => {
  return (
    <button className="number-input" onClick={() => handleNumberInput(number)}>
      {number}
    </button>
  );
};
