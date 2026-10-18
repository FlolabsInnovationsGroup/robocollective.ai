"use client";

import { useEffect, useId, useRef, useState } from "react";

const DISMISS_KEY = "robocollective-preferred-source";
const PREFERRED_SOURCE_URL =
    "https://www.google.com/preferences/source?q=www.robocollective.ai";

type PreferredSourceApi = {
    init: (options?: { theme?: "light" | "dark"; lang?: string }) => void;
    addPreferredSource: () => void;
};

type PreferredSourceQueue = {
    push: (callback: (api: PreferredSourceApi) => void) => void;
    api?: PreferredSourceApi;
};

function preferredSourceQueue(): PreferredSourceQueue | PreferredSourceApi[] | undefined {
    return (window as Window & { PREFERRED_SOURCE?: PreferredSourceQueue | PreferredSourceApi[] })
        .PREFERRED_SOURCE;
}

function openPreferredSourceFlow() {
    let started = false;

    whenPreferredSourceReady((api) => {
        started = true;
        const theme = document.documentElement.classList.contains("light") ? "light" : "dark";
        api.init({ theme, lang: "en" });
        api.addPreferredSource();
    });

    window.setTimeout(() => {
        if (started) return;
        window.open(PREFERRED_SOURCE_URL, "_blank", "noopener,noreferrer");
    }, 1200);
}

function whenPreferredSourceReady(callback: (api: PreferredSourceApi) => void) {
    const queue = preferredSourceQueue();

    if (queue && !Array.isArray(queue) && queue.api) {
        callback(queue.api);
        return;
    }

    const win = window as Window & {
        PREFERRED_SOURCE?: PreferredSourceQueue | Array<(api: PreferredSourceApi) => void>;
    };

    if (!win.PREFERRED_SOURCE || Array.isArray(win.PREFERRED_SOURCE)) {
        const pending = Array.isArray(win.PREFERRED_SOURCE) ? win.PREFERRED_SOURCE : [];
        pending.push(callback);
        win.PREFERRED_SOURCE = pending;
        return;
    }

    win.PREFERRED_SOURCE.push(callback);
}

function GoogleMark() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
            <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z" />
            <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24Z" />
            <path fill="#FBBC05" d="M5.4 14.4a7.2 7.2 0 0 1 0-4.8V6.5H1.4a12 12 0 0 0 0 11l4-3.1Z" />
            <path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4A12 12 0 0 0 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8Z" />
        </svg>
    );
}

export function PreferredSourceButton() {
    return (
        <button
            type="button"
            onClick={() => openPreferredSourceFlow()}
            className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full bg-neutral-800 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
            <GoogleMark />
            Add as preferred source on Google
        </button>
    );
}

export function PreferredSourcePrompt() {
    const titleId = useId();
    const descriptionId = useId();
    const dialogRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        try {
            if (localStorage.getItem(DISMISS_KEY)) return;
        } catch {
            return;
        }

        const timer = window.setTimeout(() => setOpen(true), 700);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!open) return;

        const previouslyFocused = document.activeElement as HTMLElement | null;
        dialogRef.current?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") dismiss();
        };

        document.addEventListener("keydown", onKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = previousOverflow;
            previouslyFocused?.focus();
        };
    }, [open]);

    function remember(choice: "dismissed" | "accepted") {
        try {
            localStorage.setItem(DISMISS_KEY, choice);
        } catch {
            // Preference storage can be blocked; the dialog still closes.
        }
        setOpen(false);
    }

    function dismiss() {
        remember("dismissed");
    }

    function confirm() {
        remember("accepted");
        openPreferredSourceFlow();
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
            <button
                type="button"
                aria-label="Dismiss preferred source prompt"
                className="absolute inset-0 bg-black/70"
                onClick={dismiss}
            />
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                tabIndex={-1}
                className="relative w-full max-w-lg rounded-xl border border-neutral-700 bg-neutral-900 p-6 text-white shadow-2xl outline-none"
            >
                <div className="flex items-start gap-3">
                    <span className="mt-0.5">
                        <GoogleMark />
                    </span>
                    <h2 id={titleId} className="text-lg font-bold leading-snug text-white">
                        Add RoboCollective as a preferred source?
                    </h2>
                </div>
                <p id={descriptionId} className="mt-4 text-sm leading-relaxed text-neutral-300">
                    Google can show RoboCollective more often in Search. You can change this anytime in your Google preferences.
                </p>
                <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={dismiss}
                        className="px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
                    >
                        Not now
                    </button>
                    <button
                        type="button"
                        onClick={confirm}
                        className="rounded-md bg-[#00DBFF] px-4 py-2 text-sm font-bold text-black transition-opacity hover:opacity-90"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}
