"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
      data-theme-toggle
      className={`inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/80 px-3 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:border-neutral-500 hover:bg-neutral-800 ${className}`}
    >
      {isLight ? (
        <Moon className="h-4 w-4 shrink-0" aria-hidden />
      ) : (
        <Sun className="h-4 w-4 shrink-0" aria-hidden />
      )}
      <span className="hidden sm:inline">{isLight ? "Dark" : "Light"}</span>
    </button>
  );
}