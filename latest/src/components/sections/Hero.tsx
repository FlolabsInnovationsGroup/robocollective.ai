"use client";

import { CtaPrimary, CtaSecondary } from "@/components/ui/CtaButton";
import { YouTubeLiteEmbed } from "@/components/ui/YouTubeLiteEmbed";

const LUNAR_YEAR_VIDEO_ID = "mUmlv814aJo";

export function Hero() {
    return (
        <section className="homepage-hero relative min-h-[100svh] w-full overflow-hidden bg-black flex items-center pt-32 pb-16">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[640px] h-[640px] bg-[#00DBFF]/8 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="relative z-20 site-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6 uppercase">
                            The Future of Robotics.
                            <br />
                            <span className="text-[#00DBFF]">Available Today.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-300 w-full mb-10 font-medium leading-relaxed">
                            Discover, deploy, and scale the world&apos;s most advanced robots. Expertly delivered and fully supported worldwide.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <CtaPrimary href="/shop" showArrow>
                                Explore Collection
                            </CtaPrimary>

                            <CtaSecondary href="/contact">
                                Talk to an Expert
                            </CtaSecondary>
                        </div>
                    </div>

                    <div>
                        <YouTubeLiteEmbed
                            videoId={LUNAR_YEAR_VIDEO_ID}
                            title="Lunar New Year humanoid robot performance"
                            poster="/assets/hero-lunar-year.webp"
                            posterWidth={960}
                            posterHeight={540}
                            posterAlt="Humanoid robots performing at the 2026 Lunar New Year Spring Festival Gala"
                            priority
                        />
                        <p className="mt-3 text-xs font-medium tracking-widest uppercase text-neutral-400">
                            Lunar New Year 2026 · Humanoid showcase
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
