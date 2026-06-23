const SHOP_SCROLL_STORAGE_KEY = "robocollective:shop-scroll-y";
const SHOP_BACK_NAV_KEY = "robocollective:shop-back-nav";
const SHOP_RESTORE_PENDING_KEY = "robocollective:shop-restore-pending";
const BACK_NAV_MAX_AGE_MS = 3000;

let isTrackerRegistered = false;

function registerNavigationTracker() {
    if (typeof window === "undefined" || isTrackerRegistered) return;
    isTrackerRegistered = true;

    window.addEventListener("popstate", () => {
        sessionStorage.setItem(SHOP_BACK_NAV_KEY, String(Date.now()));
    });
}

export function saveShopScrollPosition(position: number) {
    if (typeof window === "undefined") return;
    registerNavigationTracker();
    sessionStorage.setItem(SHOP_SCROLL_STORAGE_KEY, String(Math.round(position)));
}

export function getShopScrollPosition(): number | null {
    if (typeof window === "undefined") return null;

    const stored = sessionStorage.getItem(SHOP_SCROLL_STORAGE_KEY);
    if (stored === null) return null;

    const parsed = Number(stored);
    return Number.isFinite(parsed) ? parsed : null;
}

export function consumeShopBackNavigation(): boolean {
    if (typeof window === "undefined") return false;
    registerNavigationTracker();

    const raw = sessionStorage.getItem(SHOP_BACK_NAV_KEY);
    if (!raw) return false;

    sessionStorage.removeItem(SHOP_BACK_NAV_KEY);

    const timestamp = Number(raw);
    if (!Number.isFinite(timestamp) || Date.now() - timestamp > BACK_NAV_MAX_AGE_MS) {
        return false;
    }

    return true;
}

export function markShopScrollRestorePending() {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(SHOP_RESTORE_PENDING_KEY, "1");
}

export function consumeShopScrollRestorePending(): boolean {
    if (typeof window === "undefined") return false;

    const pending = sessionStorage.getItem(SHOP_RESTORE_PENDING_KEY) === "1";
    if (pending) {
        sessionStorage.removeItem(SHOP_RESTORE_PENDING_KEY);
    }

    return pending;
}

export function shouldRestoreShopScroll(): boolean {
    return consumeShopBackNavigation() || consumeShopScrollRestorePending();
}

export function restoreShopScrollPosition(position: number) {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, position);
}