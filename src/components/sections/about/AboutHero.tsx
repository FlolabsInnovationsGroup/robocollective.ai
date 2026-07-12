"use client";

import { motion } from "framer-motion";

export function AboutHero() {
    return (
<<<<<<< HEAD
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-background flex items-end pb-16 pt-32 px-6 md:px-12 lg:px-24">
=======
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black flex items-end pb-16 pt-32">
>>>>>>> origin/checkup-branch
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 hero-media-wash" />
                <div className="absolute inset-0 hero-media-scrim opacity-90" />
                <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <div className="relative z-10 site-container pb-8">
                <div className="w-full text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tighter leading-[1.1] mb-6 uppercase">
                            Our Story.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
<<<<<<< HEAD
                        <p className="text-xl md:text-2xl text-muted font-medium leading-relaxed max-w-2xl">
=======
                        <p className="text-xl md:text-2xl text-neutral-300 font-medium leading-relaxed w-full">
>>>>>>> origin/checkup-branch
                            RoboCollective.ai, founded in 2024, was created with a simple belief: <br /><span className="text-[#00DBFF]">robotics should feel natural, useful, and supportive in everyday life.</span>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute right-10 bottom-10 hidden lg:flex items-center gap-4 rotate-90 origin-right text-foreground"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover our vision</span>
                <div className="w-12 h-[1px] bg-foreground opacity-30" />
            </motion.div>
        </section>
    );
}
