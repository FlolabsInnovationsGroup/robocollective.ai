"use client";

import { motion } from "framer-motion";
import { RefreshCcw, Handshake, List } from "lucide-react";
import { Space_Grotesk } from 'next/font/google';
import { CtaPrimary } from "@/components/ui";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export function RentResell() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="site-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Rent Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 min-h-[400px] flex flex-col justify-end p-8 md:p-12"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,219,255,0.15),transparent_50%)] z-0 opacity-50" />
                        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

                        <div className="relative z-20">
                            <div className="w-14 h-14 rounded-2xl bg-[#00DBFF]/10 border border-[#00DBFF]/20 flex items-center justify-center mb-6 backdrop-blur-md">
                                <Handshake className="w-7 h-7 text-[#00DBFF]" />
                            </div>
                            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase`}>
                                Rent
                            </h2>
                            <p className="text-neutral-300 text-lg mb-8 max-w-sm leading-relaxed">
                                Deploy advanced hardware for events, temporary projects, or pilot programs without the capital investment.
                            </p>
                            <CtaPrimary href="/rent" showArrow>
                                See more
                            </CtaPrimary>
                        </div>
                    </motion.div>

                    {/* Resell Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 min-h-[400px] flex flex-col justify-end p-8 md:p-12"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_50%)] z-0 opacity-50" />
                        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

                        <div className="relative z-20">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 backdrop-blur-md">
                                <RefreshCcw className="w-7 h-7 text-emerald-500" />
                            </div>
                            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase`}>
                                Resell Program
                            </h2>
                            <p className="text-neutral-300 text-lg mb-8 max-w-sm leading-relaxed">
                                Ready to upgrade? We buy back and refurbish used robotics platforms to keep the ecosystem moving.
                            </p>
                            <CtaPrimary href="/resell" showArrow className="!bg-emerald-500">
                                See more
                            </CtaPrimary>
                        </div>
                    </motion.div>

                    {/* List with us Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 min-h-[400px] flex flex-col justify-end p-8 md:p-12"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.1),transparent_50%)] z-0 opacity-50" />
                        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

                        <div className="relative z-20">
                            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 backdrop-blur-md">
                                <List className="w-7 h-7 text-amber-500" />
                            </div>
                            <h2 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase`}>
                                List with us
                            </h2>
                            <ul className="text-neutral-300 text-lg mb-8 space-y-2">
                                <li>• Rent your robot.</li>
                                <li>• Sell your robot.</li>
                            </ul>
                            <CtaPrimary href="/contact" showArrow className="!bg-amber-500">
                                Request info and pricing
                            </CtaPrimary>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
