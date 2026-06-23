"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/components/providers/ThemeProvider";

const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Internships", href: "https://hephaestus.international/internships", external: true },
];

export function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme } = useTheme();
    const logoSrc = theme === "light" ? "/assets/logo-light.png" : "/assets/logo-dark.png";

    // Handle scroll effect for glassmorphism background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${isScrolled
                ? "bg-black/60 backdrop-blur-md border-neutral-800/50 py-4 shadow-lg"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="site-container flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="relative z-50 flex items-center gap-2 group">
                    <Image src={logoSrc} alt="RoboCollective Logo" width={32} height={32} className="w-8 h-8 object-contain transform group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-xl font-bold tracking-tight text-white uppercase">
                        Robo<span className="text-neutral-400">Collective</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
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
                    <ThemeToggle />
                </nav>

                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    {/* Mobile Menu Toggle Button */}
                    <button
                    className="md:hidden relative z-50 p-2 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-neutral-800 py-6 px-6 flex flex-col gap-6 shadow-2xl md:hidden"
                    >
                        {navLinks.map((link) => (
                            link.external ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-neutral-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-neutral-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
