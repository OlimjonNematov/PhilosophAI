import React, { useState, useEffect } from "react";
import "./App.css";
import PhilosophyChatbot from "./pages";

function App() {
  const [theme, setTheme] = useState("light");
  const [textColor, setTextColor] = useState("#000");
  const [boxColor, setBoxColor] = useState("#fff");

  useEffect(() => {
    if (theme === "light") {
      setTextColor("#000");
      setBoxColor("#f1f1f1"); // Light background color for boxes
    } else {
      setTextColor("#f5f5f5");
      setBoxColor("#242424"); // Dark background color for boxes
    }
    document.body.style.backgroundColor = theme === "dark" ? "black" : "white";
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Static background gradients for light and dark themes
  const backgroundStyles = {
    light: {
      background: `rgba(255, 255, 255, 1)`, // Light static gradient
    },
    dark: {
      background: `black`, // Dark static gradient
    },
  };

  return (
    <div
      className="App"
      style={{
        ...backgroundStyles[theme],
        height: "100vh",
        position: "relative",
        color: textColor,
      }}
    >
      {/* Theme Toggle with Sun and Moon */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 1000,
        }}
      >
        <div
          onClick={handleToggleTheme}
          style={{
            cursor: "pointer",
            width: "60px",
            height: "18px",
            backgroundColor: theme === "light" ? "#ffffff" : "#4A4A4A",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: theme === "light" ? "flex-start" : "flex-end",
            padding: "5px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            marginTop: 20,
          }}
        >
          <span
            style={{
              fontSize: 14,
            }}
          >
            {theme === "light" ? "🌞" : "🌜"}
          </span>
        </div>
      </div>

      {/* Pass the boxColor to PhilosophyChatbot */}
      <PhilosophyChatbot
        textColor={textColor}
        boxColor={boxColor}
        theme={theme}
      />
    </div>
  );
}

export default App;
