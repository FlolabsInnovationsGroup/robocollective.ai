"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CtaPrimary } from "@/components/ui";

export function CAIPO() {
    return (
<<<<<<< HEAD
        <section className="relative w-full min-h-screen bg-background flex items-center justify-center border-t border-border/50 overflow-hidden py-24 md:py-0">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
=======
        <section className="relative w-full min-h-screen bg-black flex items-center justify-center border-t border-neutral-800/50 overflow-hidden py-24 md:py-0">
            <div className="site-container flex flex-col md:flex-row items-center justify-between">
>>>>>>> origin/checkup-branch
                {/* Left Content */}
                <div className="w-full md:w-1/2 z-10 space-y-6 pt-12 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                            Meet <span className="text-[#00DBFF]">CAIPO</span>
                        </h2>
<<<<<<< HEAD
                        <p className="text-lg text-muted-foreground max-w-xl">
=======
                        <p className="text-lg text-neutral-400 w-full">
>>>>>>> origin/checkup-branch
                            CAIPO combines tactile sensors, gesture intelligence, and a holographic interface to help teams experience next-generation robotic presence.
                        </p>
                        <CtaPrimary
                            href="https://www.caipo.ai/"
                            external
                            className="mt-8"
                        >
                            Learn more about CAIPO
                        </CtaPrimary>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-[#00DBFF] to-transparent mt-12"
                    />
                </div>

                {/* Right Content - CAIPO Image */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative flex items-center justify-center mt-12 md:mt-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#00DBFF]/10 blur-[100px] rounded-full pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative z-10 w-[340px] md:w-[480px] lg:w-[580px] drop-shadow-[0_0_80px_rgba(0,219,255,0.2)]"
                    >
                        <Image
                            src="/assets/CAIPO_Wearable.webp"
                            alt="CAIPO Wearable Device"
                            width={440}
                            height={600}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
