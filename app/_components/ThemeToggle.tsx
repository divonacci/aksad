"use client";

import { useTheme } from "next-themes";
import { MouseEvent, useRef } from "react";
import { flushSync } from "react-dom";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const handleThemeToggle = async (event: MouseEvent<HTMLButtonElement>) => {
    if (
      !toggleBtnRef.current ||
      !document.startViewTransition ||
      window.matchMedia("[prefers-reduced-motion: reduce]").matches
    ) {
      setTheme(theme === "dark" ? "light" : "dark");
      return;
    }
    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      });
    }).ready;

    const { top, left, width, height } =
      toggleBtnRef.current.getBoundingClientRect();
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${left + width / 2}px ${top + height / 2}px)`,
          `circle(${maxRadius}px at ${left + width / 2}px ${top + height / 2}px)`,
        ],
      },
      {
        duration: 1500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="fixed bottom-6 left-6 z-99999 p-4 rounded-full bg-neutral-200 dark:bg-neutral-800 text-2xl shadow-2xl border border-neutral-300 dark:border-neutral-700 active:scale-95 transition-transform"
      aria-label="Toggle Theme"
      ref={toggleBtnRef}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
