
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // Update the browser tab title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "#222222",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
        minHeight: "100vh",
        textAlign: "center",
        transition: "0.3s",
      }}
    >
      <h1>Count App</h1>

      {/* Theme section */}
      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Change Theme
      </button>

      <hr />

      {/* Counter section */}
      <h2>Count: {count}</h2>

      {/* Conditional rendering */}
      <p>
        {count === 0
          ? "Count is Zero"
          : count > 0
          ? "Positive Number"
          : "Negative Number"}
      </p>

      {/* Counter buttons */}
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
