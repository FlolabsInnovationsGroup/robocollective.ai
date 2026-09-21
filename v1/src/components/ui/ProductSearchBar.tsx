"use client";

import { Search, X } from "lucide-react";
import { useId } from "react";

type ProductSearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
};

export function ProductSearchBar({
    value,
    onChange,
    placeholder = "Search robots...",
    className = "",
}: ProductSearchBarProps) {
    const inputId = useId();

    return (
        <div className={`relative w-full sm:w-72 lg:w-80 ${className}`}>
            <label htmlFor={inputId} className="sr-only">
                Search products
            </label>
            <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
                aria-hidden="true"
            />
            <input
                id={inputId}
                type="text"
                role="searchbox"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                autoComplete="off"
                spellCheck={false}
                className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 py-2.5 pl-10 pr-10 text-sm text-white placeholder:text-neutral-500 transition-colors focus:border-[#00DBFF]/50 focus:outline-none focus:ring-1 focus:ring-[#00DBFF]/30"
            />
            {value.length > 0 && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors hover:text-white"
                    aria-label="Clear search"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}