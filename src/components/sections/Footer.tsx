"use client";

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
    { label: "Contact", href: "/contact" },
];

const projectLinks = [
    {
        label: "Athletic Performance Intelligence",
        href: "https://www.athleticperformanceintelligence.com/",
    },
    { label: "CAIPO", href: "https://www.caipo.ai/" },
    {
        label: "Connecting the Dots",
        href: "https://www.youtube.com/@flolabsinnovation",
    },
    { label: "Cosmos Intelligence", href: "http://cosmosintelligence.org/" },
    { label: "Flo Travel", href: "https://www.flomadtravel.com/" },
    { label: "FloBrain", href: "https://www.flobrain.ai/" },
    {
        label: "FloLabs Innovations Group",
        href: "https://www.flolabsinnovations.com/",
    },
    { label: "FloLabs International", href: "https://www.flolabs.international/" },
    { label: "FloStudios", href: "https://www.flostudios.ai/" },
    { label: "Hephaestus International", href: "https://hephaestus.international/" },
    {
        label: "Innovation Bootcamp University",
        href: "https://www.bootcampuniversity.org/",
    },
    { label: "MoodChanger", href: "https://www.moodchanger.ai/" },
    {
        label: "Legal & Ethics Ventures Institute",
        href: "https://www.legalethicsventuresinstitute.com/",
    },
    { label: "RoboCollective", href: "https://www.robocollective.ai/" },
    {
        label: "Space Ventures Institute",
        href: "https://www.spaceventuresinstitute.com/",
    },
    { label: "TARRL", href: "https://tarrl.org/" },
];

const companyLinks = [
    { label: "Contact Us", href: "/contact" },
    {
        label: "Merch",
        href: "https://flolabsrd.notion.site/merch-background",
        external: true,
    },
];

const socialIconClassName = "h-7 w-7";

const socialLinks = [
    {
        label: "YouTube",
        href: "https://www.youtube.com/@flolabsinnovation",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={socialIconClassName} aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12 9.6 15.6Z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/flolabs-innovation/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={socialIconClassName} aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.3A1.8 1.8 0 1 1 8.3 6.5 1.8 1.8 0 0 1 6.5 8.3ZM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3v-9h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7V19Z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/flolabsinnovations/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={socialIconClassName} aria-hidden="true">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
        ),
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@flomadlabs",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={socialIconClassName} aria-hidden="true">
                <path d="M19.6 7.5a5.8 5.8 0 0 1-3.4-1.1v7.8a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v2.4a3.5 3.5 0 1 0 2.5 3.4V2.2h2.4a5.8 5.8 0 0 0 3.5 3.3v2Z" />
            </svg>
        ),
    },
    {
        label: "Reddit",
        href: "https://www.reddit.com/user/FloLabs_Innovations/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={socialIconClassName} aria-hidden="true">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/people/Flo-Labs-RD/61572285432918/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className={socialIconClassName} aria-hidden="true">
                <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.7-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5v3.2h2.3V22h3.7Z" />
            </svg>
        ),
    },
];

function FooterLink({
    href,
    label,
    external = false,
}: {
    href: string;
    label: string;
    external?: boolean;
}) {
    const className =
        "text-sm text-neutral-300 transition-colors hover:text-white";

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
                <div className="mb-14 flex flex-col gap-12 md:flex-row md:flex-wrap md:justify-between xl:flex-nowrap">
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
                            </p>
                        </div>

                        <div>
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
                                </button>
                            </form>
                        </div>

                        <div>
                            <SectionHeading>Social Media</SectionHeading>
                            <div className="flex flex-nowrap items-center gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="shrink-0 text-white transition-colors hover:text-[#00DBFF]"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
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
                </div>
            </div>
        </footer>
    );
}
