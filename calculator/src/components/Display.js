export const Display = ({ value }) => {
  return (
    <div id="display">
      <h1>{value ? value : 0}</h1>
    </div>
  );
};
