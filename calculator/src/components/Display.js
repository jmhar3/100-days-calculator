export const Display = ({ result, input }) => {
  return (
    <div id="display">
      <h5>{result ? result : input}</h5>
    </div>
  );
};
