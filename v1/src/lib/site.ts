export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.robocollective.ai";

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, "")}${normalizedPath}`;
}