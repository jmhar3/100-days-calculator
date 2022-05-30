export const ActionInput = ({ action, handleActionButton }) => {
  return (
    <button className="action-input" onClick={() => handleActionButton(action)}>
      {action}
    </button>
  );
};
