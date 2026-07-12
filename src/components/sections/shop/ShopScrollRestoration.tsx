"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import {
    getShopScrollPosition,
    restoreShopScrollPosition,
    saveShopScrollPosition,
    shouldRestoreShopScroll,
} from "@/lib/shopScrollRestoration";

export function ShopScrollRestoration() {
    const pathname = usePathname();

    useLayoutEffect(() => {
        if (pathname !== "/shop") return;
        if (!shouldRestoreShopScroll()) return;

        const savedPosition = getShopScrollPosition();
        if (savedPosition === null || savedPosition <= 0) return;

        let cancelled = false;
        const restore = () => {
            if (!cancelled) {
                restoreShopScrollPosition(savedPosition);
            }
        };

        restore();
        requestAnimationFrame(restore);

        const timeouts = [0, 100, 300, 600, 1000, 1500].map((delay) =>
            window.setTimeout(restore, delay)
        );

        return () => {
            cancelled = true;
            timeouts.forEach(clearTimeout);
        };
    }, [pathname]);

    useEffect(() => {
        if (pathname !== "/shop") return;

        let frameId: number | null = null;

        const handleScroll = () => {
            if (frameId !== null) return;
            frameId = window.requestAnimationFrame(() => {
                saveShopScrollPosition(window.scrollY);
                frameId = null;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, [pathname]);

    return null;
}