"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const LEARNING_HREF = "https://hephaestus.international/internships";

const labelClass = "text-sm font-black uppercase tracking-widest text-[#00DBFF]";

export function SharedPurpose() {
    return (
        <section
            id="shared-purpose"
            className="relative w-full overflow-hidden border-t border-neutral-800/50 bg-black py-24"
        >
            <div className="site-container">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className={labelClass}>Our shared purpose</p>
                    <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                        Talent is everywhere.
                        <br />
                        Opportunity should be too.
                    </h2>
                </motion.header>

                <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-14 md:mt-20 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                    >
                        <h3 className={labelClass}>Mission</h3>
                        <p className="mt-4 max-w-sm text-lg font-bold leading-snug text-white">
                            Aspire to inspire
                            <br />
                            Help as many people as possible.
                            <br />
                            Live long and prosper.
                        </p>
                        <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-400">
                            At FloStudios, we bring this purpose to life through design, storytelling, and creative projects that help people learn, build, and turn ideas into useful experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.12 }}
                    >
                        <h3 className={labelClass}>Vision</h3>
                        <p className="mt-4 max-w-md text-lg leading-relaxed text-neutral-300">
                            A world where talent everywhere has access to experiential learning, frontier technologies, and meaningful opportunities to solve humanity&apos;s greatest challenges and build a healthier, longer, and more prosperous future
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mt-16 grid max-w-5xl grid-cols-1 md:mt-24 md:grid-cols-2 md:gap-x-16 lg:gap-x-24"
                >
                    <div className="hidden md:block" aria-hidden />
                    <div className="max-w-sm">
                        <p className="text-lg leading-relaxed text-neutral-400">
                            Our teams build together across disciplines, developing their craft through work with a purpose.
                        </p>
                        <a
                            href={LEARNING_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-300 transition-colors duration-300 hover:text-[#00DBFF]"
                        >
                            Explore learning opportunities
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
