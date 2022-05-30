export const ActionInput = ({ action, handleActionClick }) => {
  return (
    <button className="action-input" onClick={() => handleActionClick(action)}>
      {action}
    </button>
  );
};
