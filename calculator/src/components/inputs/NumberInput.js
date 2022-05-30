export const NumberInput = ({ number, handleNumberClick }) => {
  return (
    <button className="number-input" onClick={() => handleNumberClick(number)}>
      {number}
    </button>
  );
};
