"use client";

import { motion } from "framer-motion";
import { Space_Grotesk } from 'next/font/google';
import { CtaPrimary } from "@/components/ui";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], preload: false });

const cards = [
    {
        title: "Rent",
        stripe: "bg-[#00DBFF]",
        glow: "bg-[radial-gradient(circle_at_top_right,rgba(0,219,255,0.15),transparent_50%)]",
        href: "/rent",
        cta: "Explore robot rental",
        ctaClassName: "",
        initial: { opacity: 0, x: -50 },
        body: (
            <p className="text-neutral-300 text-lg leading-relaxed max-w-sm">
                Deploy advanced hardware for events, temporary projects, or pilot programs without the capital investment.
            </p>
        ),
    },
    {
        title: "Resell Program",
        stripe: "bg-emerald-500",
        glow: "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.15),transparent_50%)]",
        href: "/resell",
        cta: "Explore the resell program",
        ctaClassName: "!bg-emerald-500",
        initial: { opacity: 0, y: 30 },
        body: (
            <p className="text-neutral-300 text-lg leading-relaxed max-w-sm">
                Ready to upgrade? We buy back and refurbish used robotics platforms to keep the ecosystem moving.
            </p>
        ),
    },
    {
        title: "List with us",
        stripe: "bg-amber-500",
        glow: "bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.1),transparent_50%)]",
        href: "/contact",
        cta: "Request info and pricing",
        ctaClassName: "!bg-amber-500",
        initial: { opacity: 0, x: 50 },
        body: (
            <ul className="text-neutral-300 text-lg space-y-2 leading-relaxed">
                <li>• Rent your robot.</li>
                <li>• Sell your robot.</li>
            </ul>
        ),
    },
] as const;

export function RentResell() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="site-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[minmax(6rem,1fr)_auto_auto_auto] gap-8">
                    {cards.map((card) => (
                        <motion.div
                            key={card.title}
                            initial={card.initial}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative min-h-[400px] rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 p-8 md:p-12 flex flex-col justify-end md:grid md:grid-rows-subgrid md:row-span-4"
                        >
                            <div
                                aria-hidden
                                className="absolute inset-0 z-0 pointer-events-none md:row-start-1 md:row-span-4"
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1.5 z-20 ${card.stripe}`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                                <div className={`absolute inset-0 z-0 opacity-50 ${card.glow}`} />
                                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20 mix-blend-overlay" />
                            </div>

                            <div aria-hidden className="hidden md:block md:row-start-1" />

                            <h2 className={`${spaceGrotesk.className} relative z-20 md:row-start-2 text-4xl md:text-5xl font-black text-white mb-4 md:mb-0 tracking-tight uppercase leading-none`}>
                                {card.title}
                            </h2>
                            <div className="relative z-20 md:row-start-3 mb-8 md:mb-0 md:pt-4">
                                {card.body}
                            </div>
                            <div className="relative z-20 md:row-start-4 md:pt-8">
                                <CtaPrimary href={card.href} showArrow className={card.ctaClassName}>
                                    {card.cta}
                                </CtaPrimary>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
