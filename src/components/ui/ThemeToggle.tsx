"use client";

<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-9 w-9 shrink-0" aria-hidden="true" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={"inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors hover:text-brand " + (className ?? "text-muted")}
        >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
    );
}
=======
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
      className={[
        "relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border p-0.5 transition-colors duration-300",
        isLight
          ? "border-neutral-300 bg-white hover:border-neutral-400"
          : "border-neutral-700 bg-neutral-900 hover:border-neutral-600",
        className,
      ].join(" ")}
    >
      <span
        className={`flex h-[22px] w-[22px] items-center justify-center rounded-full transition-[transform,background-color,color] duration-300 ease-in-out ${
          isLight
            ? "translate-x-0 bg-neutral-200 text-neutral-900"
            : "translate-x-7 bg-neutral-600 text-neutral-200"
        }`}
      >
        {isLight ? (
          <Sun className="h-3 w-3" strokeWidth={2.5} aria-hidden />
        ) : (
          <Moon className="h-3 w-3" strokeWidth={2.5} aria-hidden />
        )}
      </span>
    </button>
  );
}
>>>>>>> origin/checkup-branch
