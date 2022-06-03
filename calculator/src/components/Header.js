export const Header = ({ colorTheme, handleColorTheme }) => {
  return (
    <div id="header">
      <h5>calc</h5>
      <div id="theme">
        <p>THEME</p>
        <div>
          <button onClick={handleColorTheme}>1</button>
          <button onClick={handleColorTheme}>2</button>
          <button onClick={handleColorTheme}>3</button>
        </div>
      </div>
    </div>
  );
};
