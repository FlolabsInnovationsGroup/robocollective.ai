"use client";

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