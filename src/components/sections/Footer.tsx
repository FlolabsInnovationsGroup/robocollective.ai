"use client";

import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export function Footer() {
    const { theme } = useTheme();
    const logoSrc = theme === "light" ? "/assets/logo-light.png" : "/assets/logo-dark.png";

    return (
        <footer className="bg-black text-white pt-24 pb-8 border-t border-white/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 mix-blend-overlay pointer-events-none z-0" />

            <div className="site-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Image src={logoSrc} alt="RoboCollective Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                            <span className={`${spaceGrotesk.className} text-xl font-bold tracking-tight`}>ROBOCOLLECTIVE</span>
                        </div>
                        <p className="text-neutral-400 max-w-sm mb-8">
                            Premium robotics, expert deployment support, and dedicated post-purchase service. Setting the standard for advanced hardware.
                        </p>
                    </div>

                    <div>
                        <h4 className={`${jetbrainsMono.className} text-sm font-bold uppercase tracking-widest text-[#00DBFF] mb-6`}>
                            Platform
                        </h4>
                        <ul className="space-y-4">
                            <li><Link href="/shop" className="text-neutral-400 hover:text-white transition-colors">Shop</Link></li>
                            <li><a href="https://www.caipo.ai/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">CAIPO</a></li>
                            <li><a href="/rent" className="text-neutral-400 hover:text-white transition-colors">Rentals</a></li>
                            <li><a href="/resell" className="text-neutral-400 hover:text-white transition-colors">Resell Program</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={`${jetbrainsMono.className} text-sm font-bold uppercase tracking-widest text-[#00DBFF] mb-6`}>
                            Company
                        </h4>
                        <ul className="space-y-4">
                            <li><a href="/about" className="text-neutral-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="/blog" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
                            <li><a href="https://hephaestus.international/internships" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">Internships</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
                    <p> {new Date().getFullYear()} RoboCollective.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <a href="/about" className="hover:text-white transition-colors">Privacy</a>
                        <a href="/about" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
