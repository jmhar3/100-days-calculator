export const Display = ({ value }) => {
  return (
    <div id="display">
      <h5>{value ? value : 0}</h5>
    </div>
  );
};
