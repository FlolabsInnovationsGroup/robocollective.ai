"use client";

<<<<<<< HEAD
import { useState, type CSSProperties, type ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Send, ChevronDown } from "lucide-react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const SOCIAL_ICON_HEIGHT = 24;
const SOCIAL_YOUTUBE_WIDTH = 35;
const BRAND_CYAN = "#00DBFF";

function YouTubeIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 6 24 12"
            aria-hidden="true"
            className={className}
            fill="currentColor"
        >
            <path d="M21.8 8.001a2.5 2.5 0 0 0-1.76-1.77C18.36 6 12 6 12 6s-6.36 0-8.04.231A2.5 2.5 0 0 0 2.2 8.001 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .2 3.999 2.5 2.5 0 0 0 1.76 1.77C5.64 18 12 18 12 18s6.36 0 8.04-.231a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.2-3.999zM10 15.464V8.536L16 12l-6 3.464z" />
        </svg>
    );
}

function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            fill="currentColor"
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function SocialIconLink({
    href,
    label,
    children,
    className = "",
    style,
}: {
    href: string;
    label: string;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`inline-flex items-center justify-center text-foreground hover:text-[#00DBFF] transition-colors ${className}`}
            style={{ height: SOCIAL_ICON_HEIGHT, ...style }}
        >
            {children}
        </a>
    );
}

const navigationLinks = [
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" },
    { label: "Products", href: "/products" },
    { label: "Rent", href: "/rent" },
    { label: "Resell", href: "/resell" },
    { label: "Blog", href: "/blog" },
=======
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const SUBTITLE =
    "Premium robotics, expert deployment support, and dedicated post-purchase service. Setting the standard for advanced hardware.";

const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Shop", href: "/shop" },
    { label: "Blog", href: "/blog" },
    {
        label: "Internships",
        href: "https://hephaestus.international/internships",
        external: true,
    },
>>>>>>> origin/checkup-branch
    { label: "Contact", href: "/contact" },
];

const projectLinks = [
<<<<<<< HEAD
    { label: "Athletic Performance Intelligence", href: "https://www.athleticperformanceintelligence.com/" },
    { label: "Innovation Bootcamp University", href: "https://www.bootcampuniversity.org/" },
    { label: "CAIPO", href: "https://www.caipo.ai/" },
    { label: "Connecting the Dots", href: "https://www.youtube.com/@flolabsinnovation" },
    { label: "Flo Travel", href: "https://www.flomadtravel.com/" },
    { label: "FloBrain", href: "https://www.flobrain.ai/" },
    { label: "FloLabs Innovations Group", href: "https://www.flolabsinnovations.com/" },
=======
    {
        label: "Athletic Performance Intelligence",
        href: "https://www.athleticperformanceintelligence.com/",
    },
    { label: "Bootcamp University", href: "https://www.bootcampuniversity.org/" },
    { label: "CAIPO", href: "https://www.caipo.ai/" },
    {
        label: "Connecting The Dots podcast",
        href: "https://www.youtube.com/@flolabsinnovation",
    },
    { label: "Cosmos Intelligence", href: "http://cosmosintelligence.org/" },
    { label: "Flo Travel", href: "https://www.flomadtravel.com/" },
    { label: "FloBrain", href: "https://www.flobrain.ai/" },
    {
        label: "FloLabs Innovations Group",
        href: "https://www.flolabsinnovations.com/",
    },
>>>>>>> origin/checkup-branch
    { label: "FloLabs International", href: "https://www.flolabs.international/" },
    { label: "FloStudios", href: "https://www.flostudios.ai/" },
    { label: "Hephaestus International", href: "https://hephaestus.international/" },
    { label: "MoodChanger", href: "https://www.moodchanger.ai/" },
<<<<<<< HEAD
    { label: "Legal & Ethics Ventures Institute", href: "https://www.legalethicsventuresinstitute.com/" },
    { label: "RoboCollective", href: "https://www.robocollective.ai/", highlight: true },
    { label: "Space Ventures Institute", href: "https://www.spaceventuresinstitute.com/" },
=======
    {
        label: "Legal & Ethics Ventures Institute",
        href: "https://www.legalethicsventuresinstitute.com/",
    },
    { label: "RoboCollective", href: "https://www.robocollective.ai/" },
    {
        label: "Space Ventures Institute",
        href: "https://www.spaceventuresinstitute.com/",
    },
>>>>>>> origin/checkup-branch
    { label: "TARRL", href: "https://tarrl.org/" },
];

const companyLinks = [
<<<<<<< HEAD
    { label: "Careers", href: "https://hephaestus.international/" },
    { label: "Contact Us", href: "/contact" },
    { label: "Merch", href: "https://flolabsrd.notion.site/merch-background" },
];

function FooterCollapsibleSection({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);
    const sectionId = `footer-section-${id}`;

    return (
        <div className="border-b border-border md:border-0">
            <button
                type="button"
                className="group flex w-full items-center justify-between py-4 md:hidden text-foreground hover:text-[#00DBFF] transition-colors"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls={sectionId}
            >
                <span className="text-sm font-bold uppercase tracking-widest">{title}</span>
                <ChevronDown
                    className={`w-4 h-4 text-muted-foreground group-hover:text-[#00DBFF] transition-all duration-200 ${
                        open ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                />
            </button>

            <h4 className="hidden md:block text-sm font-bold uppercase tracking-widest mb-6">
                {title}
            </h4>

            <div
                id={sectionId}
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:overflow-visible md:transition-none ${
                    open ? "max-h-[800px] opacity-100 pb-4" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
                } md:block md:pb-0`}
            >
                {children}
            </div>
        </div>
    );
}
=======
    { label: "Contact Us", href: "/contact" },
    {
        label: "Merch",
        href: "https://flolabsrd.notion.site/merch-background",
        external: true,
    },
    { label: "Flomad", href: "https://www.flomad.com/", external: true },
];

const socialLinks = [
    {
        label: "YouTube",
        href: "https://www.youtube.com/@flolabsinnovation",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12 9.6 15.6Z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/flolabs-innovation/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.3A1.8 1.8 0 1 1 8.3 6.5 1.8 1.8 0 0 1 6.5 8.3ZM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3v-9h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7V19Z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/flolabsinnovations/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
        ),
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@flomadlabs",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M19.6 7.5a5.8 5.8 0 0 1-3.4-1.1v7.8a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v2.4a3.5 3.5 0 1 0 2.5 3.4V2.2h2.4a5.8 5.8 0 0 0 3.5 3.3v2Z" />
            </svg>
        ),
    },
    {
        label: "Reddit",
        href: "https://www.reddit.com/user/FloLabs_Innovations/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/people/Flo-Labs-RD/61572285432918/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.7-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5v3.2h2.3V22h3.7Z" />
            </svg>
        ),
    },
];
>>>>>>> origin/checkup-branch

function FooterLink({
    href,
    label,
    external = false,
<<<<<<< HEAD
    highlight = false,
=======
>>>>>>> origin/checkup-branch
}: {
    href: string;
    label: string;
    external?: boolean;
<<<<<<< HEAD
    highlight?: boolean;
}) {
    const className = `text-sm text-muted hover:text-[#00DBFF] transition-colors ${
        highlight ? "font-bold text-[#00DBFF]" : ""
    }`;
=======
}) {
    const className =
        "text-sm text-neutral-300 transition-colors hover:text-white";
>>>>>>> origin/checkup-branch

    if (external || href.startsWith("http")) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {label}
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {label}
        </Link>
    );
}
<<<<<<< HEAD

export function Footer() {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email.trim()) return;
        window.location.href = `/contact?email=${encodeURIComponent(email.trim())}`;
    };

    return (
        <footer className="bg-background text-foreground pt-20 pb-0">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 pb-16">
                    {/* Brand, newsletter, social */}
                    <div className="md:col-span-5 lg:col-span-4 space-y-10">
                        <div>
                            <div className="flex items-start gap-3 mb-4">
                                <Image
                                    src="/assets/logo-dark.png"
                                    alt="RoboCollective Logo"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p
                                        className={`${spaceGrotesk.className} text-2xl font-bold tracking-tight uppercase leading-none`}
                                    >
                                        Robo<span style={{ color: BRAND_CYAN }}>Collective</span>
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        | by FloLabs Innovations Group
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                                Buy robots from trusted makers worldwide — delivered, professionally set up,
                                and fully supported. Discover industrial, service, and educational robots at
                                RoboCollective.ai.
=======

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h4
            className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#00DBFF]"
        >
            {children}
        </h4>
    );
}

export function Footer() {
    const { theme } = useTheme();
    const logoSrc = theme === "light" ? "/assets/logo-light.png" : "/assets/logo-dark.png";

    return (
        <footer className={`${inter.className} relative overflow-hidden border-t border-white/10 bg-[#070b12] pt-16 pb-8 text-white`}>
            <div className="absolute inset-0 z-0 bg-[url('/assets/grid.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none" />

            <div className="site-container relative z-10">
                <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                    {/* Brand, newsletter, and social */}
                    <div className="space-y-8">
                        <div>
                            <div className="mb-5 flex items-center gap-2.5">
                                <Image
                                    src={logoSrc}
                                    alt="RoboCollective Logo"
                                    width={32}
                                    height={32}
                                    className="h-8 w-8 object-contain"
                                />
                                <p className="text-base font-bold leading-tight">
                                    RoboCollective{" "}
                                    <span className="font-normal text-neutral-400">
                                        | by FloLabs Innovations Group
                                    </span>
                                </p>
                            </div>
                            <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
                                {SUBTITLE}
>>>>>>> origin/checkup-branch
                            </p>
                        </div>

                        <div>
<<<<<<< HEAD
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-3">
                                Newsletter
                            </h4>
                            <p className="text-sm text-muted-foreground mb-4">
                                Receive the newest FloLabs updates at:
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="flex max-w-sm">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="Enter your email..."
                                    className="flex-1 bg-input text-foreground text-sm px-4 py-3 placeholder:text-muted-foreground outline-none"
                                    aria-label="Email address for newsletter"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-3 bg-background border border-border hover:border-[#00DBFF] transition-colors"
                                    aria-label="Subscribe to newsletter"
                                    style={{ color: BRAND_CYAN }}
                                >
                                    <Send className="w-4 h-4" />
=======
                            <SectionHeading>Newsletter</SectionHeading>
                            <p className="mb-3 text-sm text-neutral-400">
                                Receive the newest FloLabs updates at:
                            </p>
                            <form
                                className="flex max-w-sm"
                                onSubmit={(event) => event.preventDefault()}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    aria-label="Email address for newsletter"
                                    className="min-w-0 flex-1 rounded-l-md border border-neutral-700 bg-neutral-200 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-[#00DBFF] focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe to newsletter"
                                    className="flex items-center justify-center rounded-r-md bg-black px-3.5 transition-colors hover:bg-neutral-900"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    >
                                        <path d="m22 2-7 20-4-9-9-4Z" />
                                        <path d="M22 2 11 13" />
                                    </svg>
>>>>>>> origin/checkup-branch
                                </button>
                            </form>
                        </div>

                        <div>
<<<<<<< HEAD
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">
                                Social Media
                            </h4>
                            <div className="flex items-center gap-3">
                                <SocialIconLink
                                    href="https://www.youtube.com/@flolabsinnovation"
                                    label="YouTube"
                                    style={{ width: SOCIAL_YOUTUBE_WIDTH }}
                                >
                                    <YouTubeIcon className="h-full w-full" />
                                </SocialIconLink>
                                <SocialIconLink
                                    href="https://www.linkedin.com/company/flolabs-innovation/"
                                    label="LinkedIn"
                                    style={{ width: SOCIAL_ICON_HEIGHT }}
                                >
                                    <LinkedInIcon className="h-full w-full" />
                                </SocialIconLink>
=======
                            <SectionHeading>Social Media</SectionHeading>
                            <div className="flex flex-wrap items-center gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="text-white transition-colors hover:text-[#00DBFF]"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
>>>>>>> origin/checkup-branch
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
<<<<<<< HEAD
                    <div className="md:col-span-2">
                        <FooterCollapsibleSection id="navigation" title="Navigation">
                            <ul className="space-y-3">
                                {navigationLinks.map((link) => (
                                    <li key={link.label}>
                                        <FooterLink href={link.href} label={link.label} />
                                    </li>
                                ))}
                            </ul>
                        </FooterCollapsibleSection>
                    </div>

                    {/* Projects */}
                    <div className="md:col-span-3">
                        <FooterCollapsibleSection id="projects" title="Projects">
                            <ul className="space-y-3">
                                {projectLinks.map((link) => (
                                    <li key={link.label}>
                                        <FooterLink
                                            href={link.href}
                                            label={link.label}
                                            external={link.href.startsWith("http")}
                                            highlight={link.highlight}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </FooterCollapsibleSection>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2">
                        <FooterCollapsibleSection id="company" title="Company">
                            <ul className="space-y-3">
                                {companyLinks.map((link) => (
                                    <li key={link.label}>
                                        <FooterLink
                                            href={link.href}
                                            label={link.label}
                                            external={link.href.startsWith("http")}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </FooterCollapsibleSection>
                    </div>
                </div>

                <div className="border-t border-border py-8">
                    <p className="text-center text-sm font-medium tracking-[0.35em] text-muted">
                        Live Long and Prosper
                    </p>
=======
                    <div>
                        <SectionHeading>Navigation</SectionHeading>
                        <ul className="space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.label}>
                                    <FooterLink
                                        href={link.href}
                                        label={link.label}
                                        external={link.external}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects */}
                    <div>
                        <SectionHeading>Projects</SectionHeading>
                        <ul className="space-y-3">
                            {projectLinks.map((link) => (
                                <li key={link.label}>
                                    <FooterLink href={link.href} label={link.label} external />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <SectionHeading>Company</SectionHeading>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <FooterLink
                                        href={link.href}
                                        label={link.label}
                                        external={link.external}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-sm text-neutral-500">
                    <p>Live Long and Prosper.</p>
>>>>>>> origin/checkup-branch
                </div>
            </div>
        </footer>
    );
}
