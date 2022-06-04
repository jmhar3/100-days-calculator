import { useMemo } from "react";

export const Display = ({ value }) => {
  const displayValue = useMemo(() => {
    (+value).toLocaleString("en-US");
  }, [value]);

  return (
    <div id="display">
      <h1>{value ? value : 0}</h1>
    </div>
  );
};
