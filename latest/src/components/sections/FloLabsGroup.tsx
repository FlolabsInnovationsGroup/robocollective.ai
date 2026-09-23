"use client";

import { useCallback, useEffect, useRef, PointerEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { flolabsProjects, type FloLabsProject } from "@/data/flolabsProjects";

function ProjectCard({ project }: { project: FloLabsProject }) {
  const isExternal = project.external !== false;

  const content = (
    <div className="relative z-10 flex flex-col h-full">
      <div className="h-16 mb-4 flex items-center">
        <img
          src={encodeURI(project.logoPath)}
          alt={`${project.name} logo`}
          className="max-h-12 w-auto max-w-full object-contain object-left"
          loading="lazy"
          decoding="async"
        />
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed flex-1">{project.summary}</p>

      <div className="mt-6 flex justify-end">
        <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-300 group-hover:text-[#00DBFF] transition-colors duration-300">
          Visit site
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </span>
      </div>
    </div>
  );

  const className =
    "group relative flex h-full min-h-[19.5rem] flex-col justify-between overflow-hidden rounded-2xl bg-[#0a0a0a] border border-neutral-800 p-6 no-underline";

  if (isExternal) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        data-flolabs-card
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={project.href}
      data-flolabs-card
      className={className}
    >
      {content}
    </Link>
  );
}

export function FloLabsGroup() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef(false);
  const targetScrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const scrollRafRef = useRef<number | null>(null);
  const reduceMotionRef = useRef(false);

  const syncThumb = useCallback(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!scroller || !track || !thumb) return;

    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    const trackWidth = track.clientWidth;
    const thumbWidth = Math.max(
      (scroller.clientWidth / Math.max(scroller.scrollWidth, 1)) * trackWidth,
      72
    );
    const maxThumbLeft = Math.max(trackWidth - thumbWidth, 0);
    const ratio = maxScroll <= 0 ? 0 : scroller.scrollLeft / maxScroll;

    thumb.style.width = `${thumbWidth}px`;
    thumb.style.transform = `translate3d(${ratio * maxThumbLeft}px, -50%, 0)`;
    track.style.opacity = maxScroll <= 0 ? "0" : "1";
    track.style.pointerEvents = maxScroll <= 0 ? "none" : "auto";
    track.setAttribute("aria-valuenow", String(Math.round(ratio * 100)));
  }, []);

  const stopTween = useCallback(() => {
    if (rafRef.current == null) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }, []);

  const tweenTo = useCallback(
    (left: number) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const maxScroll = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
      targetScrollRef.current = Math.max(0, Math.min(left, maxScroll));

      if (reduceMotionRef.current) {
        stopTween();
        scroller.scrollLeft = targetScrollRef.current;
        syncThumb();
        return;
      }

      if (rafRef.current != null) return;

      const tick = () => {
        const el = scrollerRef.current;
        if (!el) {
          rafRef.current = null;
          return;
        }

        const target = targetScrollRef.current;
        const current = el.scrollLeft;
        const delta = target - current;
        const ease = dragRef.current ? 0.22 : 0.12;

        if (Math.abs(delta) < 0.4) {
          el.scrollLeft = target;
          rafRef.current = null;
          syncThumb();
          return;
        }

        el.scrollLeft = current + delta * ease;
        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    },
    [stopTween, syncThumb]
  );

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      reduceMotionRef.current = media.matches;
    };
    syncMotion();
    media.addEventListener("change", syncMotion);

    const idleId = window.requestIdleCallback(() => syncThumb());

    const observer = new ResizeObserver(() => {
      requestAnimationFrame(syncThumb);
    });
    observer.observe(scroller);
    window.addEventListener("resize", syncThumb);

    return () => {
      media.removeEventListener("change", syncMotion);
      window.cancelIdleCallback(idleId);
      if (scrollRafRef.current != null) cancelAnimationFrame(scrollRafRef.current);
      stopTween();
      observer.disconnect();
      window.removeEventListener("resize", syncThumb);
    };
  }, [stopTween, syncThumb]);

  const maxScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return 0;
    return Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
  };

  const cardStep = () => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>("[data-flolabs-card]");
    return card ? card.offsetWidth + 24 : 240;
  };

  const scrollToRatio = (ratio: number) => {
    tweenTo(Math.max(0, Math.min(1, ratio)) * maxScroll());
  };

  const settleToNearestCard = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const step = cardStep();
    const nearest = Math.round(scroller.scrollLeft / step) * step;
    tweenTo(nearest);
  };

  const ratioFromClientX = (clientX: number) => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return 0;

    const rect = track.getBoundingClientRect();
    const thumbWidth = thumb.offsetWidth;
    const maxThumbLeft = Math.max(rect.width - thumbWidth, 1);
    const x = clientX - rect.left - thumbWidth / 2;
    return Math.max(0, Math.min(1, x / maxThumbLeft));
  };

  const onTrackPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    track.setPointerCapture(event.pointerId);
    dragRef.current = true;
    scrollToRatio(ratioFromClientX(event.clientX));
  };

  const onTrackPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    scrollToRatio(ratioFromClientX(event.clientX));
  };

  const onTrackPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (track?.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
    dragRef.current = false;
    settleToNearestCard();
  };

  return (
    <section
      id="flolabs"
      className="relative w-full py-24 bg-black border-t border-neutral-800/50 overflow-hidden"
    >
      <div className="site-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-12"
        >
          More about{" "}
          <span className="text-[#00DBFF]">FloLabs Innovations Group</span>
        </motion.h2>

        <div role="region" aria-label="FloLabs live project sites">
          <div
            id="flolabs-carousel"
            ref={scrollerRef}
            onScroll={() => {
              if (scrollRafRef.current != null) return;
              scrollRafRef.current = requestAnimationFrame(() => {
                scrollRafRef.current = null;
                syncThumb();
              });
            }}
            onPointerDown={() => stopTween()}
            className="flolabs-carousel flex gap-6"
          >
            {flolabsProjects.map((project) => (
              <article
                key={project.slug}
                className="w-[min(20.5rem,calc(100vw-3.5rem))] sm:w-[22rem] shrink-0"
              >
                <ProjectCard project={project} />
              </article>
            ))}
          </div>

          <div
            ref={trackRef}
            role="scrollbar"
            aria-controls="flolabs-carousel"
            aria-orientation="horizontal"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={0}
            aria-label="Slide through FloLabs projects"
            tabIndex={0}
            onPointerDown={onTrackPointerDown}
            onPointerMove={onTrackPointerMove}
            onPointerUp={onTrackPointerUp}
            onPointerCancel={onTrackPointerUp}
            onKeyDown={(event) => {
              const scroller = scrollerRef.current;
              if (!scroller) return;
              const amount = cardStep();
              if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault();
                tweenTo(scroller.scrollLeft + amount);
              }
              if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                tweenTo(scroller.scrollLeft - amount);
              }
              if (event.key === "Home") {
                event.preventDefault();
                tweenTo(0);
              }
              if (event.key === "End") {
                event.preventDefault();
                tweenTo(scroller.scrollWidth);
              }
            }}
            className="flolabs-slider relative mt-8 h-8 flex items-center cursor-pointer select-none"
          >
            <div className="absolute inset-x-0 h-1.5 rounded-full bg-neutral-800" />
            <div
              ref={thumbRef}
              className="absolute left-0 top-1/2 h-3 rounded-full bg-[#00DBFF] pointer-events-none will-change-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
