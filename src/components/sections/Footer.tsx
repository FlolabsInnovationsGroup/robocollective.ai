"use client";

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
    { label: "Contact", href: "/contact" },
];

const projectLinks = [
    { label: "Athletic Performance Intelligence", href: "https://www.athleticperformanceintelligence.com/" },
    { label: "Innovation Bootcamp University", href: "https://www.bootcampuniversity.org/" },
    { label: "CAIPO", href: "https://www.caipo.ai/" },
    { label: "Connecting the Dots", href: "https://www.youtube.com/@flolabsinnovation" },
    { label: "Flo Travel", href: "https://www.flomadtravel.com/" },
    { label: "FloBrain", href: "https://www.flobrain.ai/" },
    { label: "FloLabs Innovations Group", href: "https://www.flolabsinnovations.com/" },
    { label: "FloLabs International", href: "https://www.flolabs.international/" },
    { label: "FloStudios", href: "https://www.flostudios.ai/" },
    { label: "Hephaestus International", href: "https://hephaestus.international/" },
    { label: "MoodChanger", href: "https://www.moodchanger.ai/" },
    { label: "Legal & Ethics Ventures Institute", href: "https://www.legalethicsventuresinstitute.com/" },
    { label: "RoboCollective", href: "https://www.robocollective.ai/", highlight: true },
    { label: "Space Ventures Institute", href: "https://www.spaceventuresinstitute.com/" },
    { label: "TARRL", href: "https://tarrl.org/" },
];

const companyLinks = [
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

function FooterLink({
    href,
    label,
    external = false,
    highlight = false,
}: {
    href: string;
    label: string;
    external?: boolean;
    highlight?: boolean;
}) {
    const className = `text-sm text-muted hover:text-[#00DBFF] transition-colors ${
        highlight ? "font-bold text-[#00DBFF]" : ""
    }`;

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
                            </p>
                        </div>

                        <div>
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
                                </button>
                            </form>
                        </div>

                        <div>
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
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
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
                </div>
            </div>
        </footer>
    );
}
