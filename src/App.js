import React, { useState, useEffect } from "react";
import "./App.css";
import PhilosophyChatbot from "./pages";
import { themes } from "./theme"; // Importing theme

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const bodyBackgroundColor =
      theme === "light"
        ? themes.light.backgroundColor
        : themes.dark.backgroundColor;
    document.body.style.backgroundColor = bodyBackgroundColor;
  }, [theme]);

  const currentTheme = themes[theme]; // Access the current theme based on state

  return (
    <div
      className="App"
      style={{
        background: currentTheme.backgroundColor,
        height: "100vh",
        position: "relative",
        color: currentTheme.textColor,
      }}
    >
      {/* Pass the current theme colors to PhilosophyChatbot */}
      <PhilosophyChatbot
        textColor={currentTheme.textColor}
        boxColor={currentTheme.chatboxColor}
        menuBackgroundColor={currentTheme.menuBackgroundColor}
        hoverButtonColor={currentTheme.hoverButtonColor}
        buttonColor={currentTheme.buttonColor}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default App;
