import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // get saved theme or fallback to light
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;
  }, []);

  useEffect(() => {
    // update HTML attribute and localStorage when theme changes
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
