const pastelThemes = {
  red: {
    textColor: "#1a1a1a", // Dark gray for better readability
    chatboxColor: "#ffe6e6", // Light pastel red for chatbox
    menuBackgroundColor: "#ffcccc", // Soft pastel red for menu background
    hoverButtonColor: "#ffb3b3", // Slightly darker pastel red on hover for buttons
    buttonColor: "#ff9999", // Medium pastel red for buttons
    backgroundColor: "#ffe6e6", // Light pastel red for overall background
  },
  orange: {
    textColor: "#1a1a1a", // Dark gray for better readability
    chatboxColor: "#ffedcc", // Light pastel orange for chatbox
    menuBackgroundColor: "#ffe6b3", // Soft pastel orange for menu background
    hoverButtonColor: "#ffd699", // Slightly darker pastel orange on hover for buttons
    buttonColor: "#ffcc80", // Medium pastel orange for buttons
    backgroundColor: "#ffedcc", // Light pastel orange for overall background
  },
  yellow: {
    textColor: "#1a1a1a", // Dark gray for better readability
    chatboxColor: "#fff9cc", // Light pastel yellow for chatbox
    menuBackgroundColor: "#fff4b3", // Soft pastel yellow for menu background
    hoverButtonColor: "#ffef99", // Slightly darker pastel yellow on hover for buttons
    buttonColor: "#ffe680", // Medium pastel yellow for buttons
    backgroundColor: "#fff9cc", // Light pastel yellow for overall background
  },
  green: {
    textColor: "#1a1a1a", // Dark gray for better readability
    chatboxColor: "#e6ffe6", // Light pastel green for chatbox
    menuBackgroundColor: "#ccffcc", // Soft pastel green for menu background
    hoverButtonColor: "#b3ffb3", // Slightly darker pastel green on hover for buttons
    buttonColor: "#99ff99", // Medium pastel green for buttons
    backgroundColor: "#e6ffe6", // Light pastel green for overall background
  },
  blue: {
    textColor: "#1a1a1a", // Dark gray for better readability
    chatboxColor: "#e6f2ff", // Light pastel blue for chatbox
    menuBackgroundColor: "#cce6ff", // Soft pastel blue for menu background
    hoverButtonColor: "#b3d9ff", // Slightly darker pastel blue on hover for buttons
    buttonColor: "#99ccff", // Medium pastel blue for buttons
    backgroundColor: "#e6f2ff", // Light pastel blue for overall background
  },
  violet: {
    textColor: "#1a1a1a", // Dark gray for better readability
    chatboxColor: "#f2e6ff", // Light pastel violet for chatbox
    menuBackgroundColor: "#e6ccff", // Soft pastel violet for menu background
    hoverButtonColor: "#d9b3ff", // Slightly darker pastel violet on hover for buttons
    buttonColor: "#cc99ff", // Medium pastel violet for buttons
    backgroundColor: "#f2e6ff", // Light pastel violet for overall background
  },
};

const lightTheme = {
  textColor: "#1a1a1a", // Dark gray for better readability
  chatboxColor: "#f9f9f9", // Soft off-white for light mode chatbox
  menuBackgroundColor: "#ffffff", // Pure white for the menu background
  hoverButtonColor: "#f0f0f0", // Slightly darker on hover for buttons
  buttonColor: "#e0e0e0", // Light gray for buttons
  backgroundColor: "#f0f0f0", // Subtle light gray for overall background
};

const darkTheme = {
  textColor: "#eaeaea", // Light gray for readable text in dark mode
  chatboxColor: "#2b2b2b", // Dark gray for chatbox
  menuBackgroundColor: "#333333", // Darker gray for menu background
  hoverButtonColor: "#444444", // Slightly darker gray on hover for buttons
  buttonColor: "#555555", // Medium gray for buttons
  backgroundColor: "#121212", // Almost black for the dark mode background
};
export const themes = {
  red: pastelThemes.red,
  orange: pastelThemes.orange,
  yellow: pastelThemes.yellow,
  green: pastelThemes.green,
  blue: pastelThemes.blue,
  violet: pastelThemes.violet,
  light: lightTheme,
  dark: darkTheme,
};
