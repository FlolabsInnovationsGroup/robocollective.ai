"use client";

import { motion } from "framer-motion";

export function ContactHero() {
    return (
<<<<<<< HEAD
        <section className="relative w-full pt-40 pb-20 px-6 md:px-12 lg:px-24 bg-background overflow-hidden flex flex-col justify-end min-h-[50vh]">
=======
        <section className="relative w-full pt-40 pb-20 bg-black overflow-hidden flex flex-col justify-end min-h-[50vh]">
>>>>>>> origin/checkup-branch

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00DBFF]/10 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-30" />
                <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute inset-0 page-hero-scrim pointer-events-none" />
            </div>

            <div className="relative z-10 site-container">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-[2px] bg-gradient-to-r from-[#00DBFF] to-blue-500" />
                        <span className="text-[#00DBFF] font-mono text-sm tracking-widest uppercase">
                            Get In Touch
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-tight tracking-tighter mb-8 uppercase"
                    >
                        Questions? <br />
                        <span className="text-muted">
                            We've got <br /> answers.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
<<<<<<< HEAD
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
=======
                        className="text-lg md:text-xl text-neutral-400 w-full leading-relaxed"
>>>>>>> origin/checkup-branch
                    >
                        We make it easy to find the perfect robot or accessories for your home or business. Whether you're curious about products, orders, shipping, or new innovations, we are here to help.
                    </motion.p>
                </div>
            </div>

            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </section>
    );
}
