// Importing React, useEffect, and useState from the React library
import React, { useEffect, useState } from "react";

// Importing the Navbar component
import Navbar from "./components/navbar/Navbar";

// App functional component
const App = () => {
  // Retrieving the current theme from localStorage or defaulting to 'light'
  const current_theme = localStorage.getItem('current_theme');
  // Using state to manage the theme, defaulting to the current theme or 'light'
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  // useEffect hook to update localStorage when the theme changes
  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  // Render the App component
  return (
    <div className={`container ${theme}`}>
      {/* Rendering the Navbar component with the current theme and setTheme function as props */}
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
