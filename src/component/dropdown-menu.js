import React, { useState, useEffect } from "react";
import philosopherDetails from "../util/philosophers"; // Assuming this is your data source
import { themes } from "../theme"; // Assuming you have a theme file for light and dark modes

const categories = [
  "🦟 Gadfly",
  "🧙‍♂️ Sage",
  "🧘‍♂️ Ascetic",
  "🏮 Mandarin",
  "🧪 Curiosa",
  "🎩 Courtier",
  "🌞🌜 Theme", // Added the theme option as the last menu item
];

const MenuWithDropdown = ({
  selectedPhilosopher,
  setSelectedPhilosopher,
  menuBackgroundColor = "#00050d",
  hoverButtonColor = "#f0f0f0",
  textColor = "black",
  boxColor = "#242424",
  buttonColor = "#e0e0e0",
  setTheme, // This is passed as a prop
}) => {
  const [openCategory, setOpenCategory] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handlePhilosopherClick = (philosopher) => {
    setSelectedPhilosopher(philosopher);
  };

  const handleToggleTheme = (newTheme) => {
    setTheme(newTheme); // Use the passed `setTheme` prop
    setOpenCategory(null); // Close the dropdown after selection
  };

  const renderPhilosophersByCategory = (category) => {
    return Object.keys(philosopherDetails)
      .filter((key) => philosopherDetails[key].category === category)
      .map((philosopherKey) => {
        const philosopher = philosopherDetails[philosopherKey];
        return (
          <button
            key={philosopherKey}
            onClick={() => handlePhilosopherClick(philosopherKey)}
            style={{
              padding: "10px 15px",
              borderRadius: "12px",
              backgroundColor:
                selectedPhilosopher === philosopherKey
                  ? textColor
                  : buttonColor,
              border:
                selectedPhilosopher === philosopherKey
                  ? `1px solid ${textColor}`
                  : `2px solid gray`,
              color:
                selectedPhilosopher === philosopherKey ? boxColor : textColor,
              cursor: "pointer",
              transition:
                "border-color 0.3s, color 0.3s, background-color 0.3s",
              boxShadow:
                selectedPhilosopher === philosopherKey
                  ? `0px 0px 10px ${textColor}`
                  : "none",
              marginBottom: "10px",
            }}
          >
            {philosopher.name}
          </button>
        );
      });
  };

  const renderThemeOptions = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          backgroundColor: menuBackgroundColor,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          zIndex: 1,
          padding: "10px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {Object.keys(themes).map((themeKey) => (
          <button
            key={themeKey}
            onClick={() => handleToggleTheme(themeKey)}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              background: "none",
              border: "none",
              color: textColor,
              borderRadius: "8px",
              textTransform: "capitalize", // Make first letter of theme names uppercase
            }}
          >
            {themeKey === "light"
              ? "🌞"
              : themeKey === "dark"
              ? "🌜"
              : themeKey === "green"
              ? "🍏"
              : themeKey === "yellow"
              ? "🍌"
              : themeKey === "red"
              ? "🍎"
              : themeKey === "blue"
              ? "💙"
              : ``}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        borderRadius: 12,
        opacity: 0.9,
        backgroundColor: menuBackgroundColor,
        padding: "16px 32px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* Logo and Title */}
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "auto" }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            style={{ height: "40px", marginRight: "15px", borderRadius: 16 }}
          />
          <h1
            style={{
              margin: 0,
              color: textColor,
              fontFamily: "Playfair Display, serif",
            }}
          >
            PhilosophAI
          </h1>
        </div>

        {/* Mobile Menu Button */}
        {isMobileView ? (
          <div>
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                backgroundColor: buttonColor,
                padding: "10px",
                borderRadius: "8px",
                color: textColor,
                border: `2px solid gray`,
                cursor: "pointer",
              }}
            >
              ☰ Menu
            </button>
          </div>
        ) : (
          // Desktop Menu
          <div style={{ display: "flex", marginLeft: "auto" }}>
            {categories.map((category) => (
              <div
                key={category}
                onMouseEnter={() => handleCategoryClick(category)}
                onMouseLeave={() => handleCategoryClick(null)}
                style={{ position: "relative", margin: "0 10px" }}
              >
                <button
                  onClick={() =>
                    category === "🌞🌜 Theme"
                      ? handleCategoryClick(category)
                      : null
                  }
                  style={{
                    padding: "10px 15px",
                    borderRadius: "12px",
                    backgroundColor:
                      openCategory === category
                        ? hoverButtonColor
                        : buttonColor,
                    border: `2px solid gray`,
                    color: textColor,
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {category}
                </button>

                {openCategory === category &&
                  category === "🌞🌜 Theme" &&
                  renderThemeOptions()}

                {openCategory === category && category !== "🌞🌜 Theme" && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: menuBackgroundColor,
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      zIndex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                  >
                    {renderPhilosophersByCategory(category)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && isMobileView && (
        <div style={{ padding: "10px 0" }}>
          {categories.map((category) => (
            <div key={category} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => handleCategoryClick(category)}
                style={{
                  padding: "10px 15px",
                  borderRadius: "12px",
                  backgroundColor:
                    openCategory === category ? hoverButtonColor : buttonColor,
                  border: `2px solid gray`,
                  color: textColor,
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                {category}
              </button>
              {openCategory === category && category !== "🌞🌜 Theme" && (
                <div style={{ padding: "10px 0" }}>
                  {renderPhilosophersByCategory(category)}
                </div>
              )}

              {openCategory === category && category === "🌞🌜 Theme" && (
                <div style={{ padding: "10px 0" }}>{renderThemeOptions()}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuWithDropdown;
