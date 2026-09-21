"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CtaPrimary, CtaSecondary } from "@/components/ui";

export function Hero() {
    const [isSlowConnection, setIsSlowConnection] = useState(false);

    useEffect(() => {
        if ("connection" in navigator) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const conn = (navigator as any).connection;
            if (conn.saveData || /2g|3g/.test(conn.effectiveType)) {
                setIsSlowConnection(true);
            }
        }
    }, []);

    return (
        <section className="homepage-hero relative h-screen min-h-[600px] w-full overflow-hidden bg-black flex items-end pb-16 pt-32">
            {/* 1. Immersive Video Background */}
            <div className="absolute inset-0 z-0">
                {!isSlowConnection ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full opacity-100"
                    >
                        {/* Ensure file name matches exactly: hero-futuristic-quadrup.mp4 */}
                        <source src="/assets/hero.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div
                        className="w-full h-full bg-cover bg-center opacity-70"
                        style={{ backgroundImage: "url('/assets/hero-poster.jpg')" }}
                    />
                )}
                {/* 2. Professional Gradient Mask: Darkens the bottom for left-aligned text readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* 3. Left-Aligned, Bottom-Weighted Content */}
            <div className="relative z-20 site-container pb-8">
                <div className="text-left">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6 uppercase"
                    >
                        The Future of Robotics.
                        <br />
                        <span className="text-[#00DBFF]">Available Today.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-neutral-300 w-full mb-10 font-medium leading-relaxed"
                    >
                        Discover, deploy, and scale the world's most advanced robots. Expertly delivered and fully supported worldwide.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <CtaPrimary href="/shop" showArrow>
                            Explore Collection
                        </CtaPrimary>

                        <CtaSecondary href="/contact">
                            Talk to an Expert
                        </CtaSecondary>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}