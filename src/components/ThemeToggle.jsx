import React, { useEffect, useRef } from "react";
import { RiMoonLine, RiSunLine } from "@remixicon/react";
import gsap from "gsap";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const iconRef = useRef(null);

  // Safe GSAP animation (prevent blank screen if element null)
  useEffect(() => {
    if (!iconRef.current) return;
    gsap.fromTo(
      iconRef.current,
      { rotate: theme === "dark" ? -90 : 90, opacity: 0 },
      { rotate: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:scale-110 transition-transform duration-200 flex items-center justify-center shadow-sm"
      aria-label="Toggle theme"
    >
      <span ref={iconRef}>
        {theme === "dark" ? (
          <RiSunLine className="w-5 h-5 text-yellow-400" />
        ) : (
          <RiMoonLine className="w-5 h-5 text-zinc-700" />
        )}
      </span>
    </button>
  );
}
