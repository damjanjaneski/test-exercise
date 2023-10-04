import { useContext, useState } from "react";
import React from "react";

const ThemeContext = React.createContext(); //Creating context for the theme

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  const themeClass = theme === "dark" ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={themeClass} style={{ height: "150px" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

const FunctionThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Change Theme</button>
      <p>Current: {theme}</p>
    </div>
  );
};

export default function ThemeToggle() {
  return (
    <ThemeProvider>
      <div>
        <FunctionThemeToggler />
      </div>
    </ThemeProvider>
  );
}
