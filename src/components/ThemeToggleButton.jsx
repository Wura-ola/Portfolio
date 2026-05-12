import React from "react";
import sunny from "../assets/sunny.png";
import moon from "../assets/moon.png";
import { useTheme } from "../context/ThemeContext.jsx";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      className="nav-theme-btn"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <img
        src={theme === "dark" ? sunny : moon}
        alt=""
        className="nav-theme-icon"
      />
    </button>
  );
}
