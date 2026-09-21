"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const PRECONNECT_ORIGINS = [
    "https://www.youtube-nocookie.com",
    "https://www.google.com",
];

function addPreconnect(href: string) {
    if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = href;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
}

type YouTubeLiteEmbedProps = {
    videoId: string;
    title: string;
    poster: string;
    posterAlt?: string;
    priority?: boolean;
    className?: string;
};

export function YouTubeLiteEmbed({
    videoId,
    title,
    poster,
    posterAlt = "",
    priority = false,
    className = "",
}: YouTubeLiteEmbedProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const warmed = useRef(false);

    const warmPlayer = useCallback(() => {
        if (warmed.current) return;
        warmed.current = true;
        PRECONNECT_ORIGINS.forEach(addPreconnect);
    }, []);

    const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

    return (
        <div className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ${className}`}>
            {isPlaying ? (
                <iframe
                    src={embedSrc}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            ) : (
                <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    onPointerEnter={warmPlayer}
                    onFocus={warmPlayer}
                    className="absolute inset-0 group text-left"
                    aria-label={`Play ${title}`}
                >
                    <Image
                        src={poster}
                        alt={posterAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        priority={priority}
                    />
                    <span className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
                    <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#00DBFF] text-black shadow-lg transition-transform duration-200 group-hover:scale-110">
                            <Play className="h-7 w-7 ml-0.5 fill-current" aria-hidden />
                        </span>
                    </span>
                </button>
            )}
        </div>
    );
}
