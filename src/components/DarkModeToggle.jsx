import { useEffect, useState } from "react";
import "./darkmodetoggle.css";

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.documentElement.style.backgroundColor = "#121212";
      document.documentElement.style.color = "white";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.style.backgroundColor = "#ffffff";
      document.documentElement.style.color = "#213547";
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="toggle-container">
      <button className="toggle-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
        <div className={`toggle-circle ${isDarkMode ? "dark" : ""}`}></div>
      </button>
      <span className="toggle-text">DARK MODE</span>
    </div>
  );
};
