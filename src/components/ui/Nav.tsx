"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
=======
import { ThemeToggle } from "./ThemeToggle";
import { CtaPrimary } from "./CtaButton";
import { useTheme } from "@/components/providers/ThemeProvider";
>>>>>>> origin/checkup-branch

const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Internships", href: "https://hephaestus.international/internships", external: true },
];

const contactCtaClassName = "!px-5 !py-2 !text-xs !tracking-wide";

export function Nav() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
<<<<<<< HEAD
    const isOverVideoHero = pathname === "/" && !isScrolled;
=======
    const { theme } = useTheme();
    const logoSrc = theme === "light" ? "/assets/logo-light.png" : "/assets/logo-dark.png";
>>>>>>> origin/checkup-branch

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
                isScrolled
                    ? "bg-background/60 backdrop-blur-md border-border/50 py-4 shadow-lg"
                    : "bg-transparent border-transparent py-6"
            }`}
        >
<<<<<<< HEAD
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="relative z-50 flex items-center gap-2.5 group">
                    <Image
                        src="/assets/logo-dark.png"
                        alt="RoboCollective Logo"
                        width={36}
                        height={36}
                        className="w-9 h-9 object-contain transform group-hover:rotate-12 transition-transform duration-300"
                    />
                    <span className="text-xl font-bold tracking-tight uppercase">
                        <span className={isOverVideoHero ? "text-white" : "text-foreground"}>Robo</span>
                        <span className="text-brand">Collective</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-8">
                        {navLinks.map((link) =>
                            link.external ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-sm font-medium transition-colors relative group ${
                                        isOverVideoHero
                                            ? "text-white/80 hover:text-brand"
                                            : "text-muted hover:text-brand"
                                    }`}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all group-hover:w-full" />
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors relative group ${
                                        isOverVideoHero
                                            ? "text-white/80 hover:text-brand"
                                            : "text-muted hover:text-brand"
                                    }`}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all group-hover:w-full" />
                                </Link>
                            )
                        )}
                    </nav>
                    <ThemeToggle className={isOverVideoHero ? "text-white/80 hover:text-white" : undefined} />
=======
            <div className="site-container grid grid-cols-[1fr_auto_1fr] items-center">

                {/* Logo */}
                <Link href="/" className="relative z-50 flex items-center gap-2 group justify-self-start">
                    <Image src={logoSrc} alt="RoboCollective Logo" width={32} height={32} className="w-8 h-8 object-contain transform group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-xl font-bold tracking-tight text-white uppercase">
                        Robo<span className="text-neutral-400">Collective</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 justify-self-center">
                    {navLinks.map((link) =>
                        link.external ? (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00DBFF] transition-all group-hover:w-full" />
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00DBFF] transition-all group-hover:w-full" />
                            </Link>
                        )
                    )}
                    <CtaPrimary href="/contact" className={contactCtaClassName}>
                        Contact
                    </CtaPrimary>
                </nav>

                <div className="flex items-center gap-2 justify-self-end">
                    <ThemeToggle />
                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden relative z-50 p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
>>>>>>> origin/checkup-branch
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle className={isOverVideoHero ? "text-white/80 hover:text-white" : undefined} />
                    <button
                        className={`relative z-50 p-2 ${isOverVideoHero ? "text-white" : "text-foreground"}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border py-6 px-6 flex flex-col gap-6 shadow-2xl md:hidden"
                    >
                        {navLinks.map((link) =>
                            link.external ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-muted hover:text-brand transition-colors"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-muted hover:text-brand transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )
<<<<<<< HEAD
                        )}
=======
                        ))}
                        <CtaPrimary
                            href="/contact"
                            className={`${contactCtaClassName} w-fit`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </CtaPrimary>
>>>>>>> origin/checkup-branch
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
