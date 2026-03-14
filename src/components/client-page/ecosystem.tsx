"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ecosystems } from "./data";

// eco-block
function EcosystemBlock({ eco }: { eco: (typeof ecosystems)[0] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".eco-card-" + eco.id);
        cards.forEach((card, i) => {
          gsap.set(card, { yPercent: 80, scale: 0.95, opacity: 0, zIndex: i });
          gsap.to(card, {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top -=${i * 100}%`,
              end: `+=100%`,
              scrub: 1.2,
            },
          });
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${eco.bullets.length * 100}%`,
          pin: true,
          scrub: 1.2,
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [eco.id, eco.bullets.length]);

  return (
    <div className="relative">
      <div className="text-center pt-24 pb-10">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-4 border"
          style={{
            color: eco.accent,
            borderColor: `${eco.accent}40`,
            background: `${eco.accent}10`,
          }}
        >
          {eco.label}
        </span>
        <h2 className="text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold dark:text-white text-[#111] leading-[1.15] tracking-[-0.025em] max-w-2xl mx-auto">
          {eco.title}
        </h2>
        <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
          {eco.subtitle}
        </p>
      </div>

      {/* mobile cards */}
      <div className="md:hidden flex flex-col gap-4  pb-16">
        {eco.bullets.map((bullet, i) => (
          <div
            key={i}
            className="relative rounded-2xl border border-[#5CE1E6]/60 bg-[#050a0a] text-white overflow-hidden p-6 flex flex-col justify-end"
            style={{ minHeight: "260px" }}
          >
            {/* glow */}
            <div
              className="absolute top-0 left-0 w-[55%] h-[65%] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 20% 20%, rgba(92,225,230,0.07) 0%, transparent 70%)",
              }}
            />
            {/* grid texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#5CE1E6 1px, transparent 1px), linear-gradient(90deg, #5CE1E6 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* big number */}
            <div
              className="absolute text-[#5CE1E6]/10 top-2 left-3 font-black leading-none pointer-events-none select-none"
              style={{
                fontSize: "clamp(80px, 26vw, 110px)",
                letterSpacing: "-0.05em",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="relative z-10">
              <p className="text-white/70 text-sm leading-relaxed">{bullet}</p>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                opacity: 0.4,
              }}
            />
          </div>
        ))}

        {/*mobile ctas */}
        <div className="pt-4 flex justify-center">
          <Link href={eco.cta.href}>
            <button className="px-7 py-3 text-sm font-semibold text-white bg-[#0097a7] rounded-full hover:bg-[#00838f] transition-all duration-300 shadow-[0_4px_20px_rgba(0,151,167,0.3)]">
              {eco.cta.label}
            </button>
          </Link>
        </div>
      </div>

      {/* desktop cards */}
      <section
        ref={sectionRef}
        className="relative hidden md:flex items-center justify-center overflow-hidden"
        style={{ height: "100dvh" }}
      >
        <div className="relative w-full max-w-6xl" style={{ height: "72vh" }}>
          {eco.bullets.map((bullet, i) => (
            <div
              key={i}
              className={`eco-card-${eco.id} absolute inset-0 rounded-3xl border border-[#5CE1E6]/60 p-12 flex flex-col justify-end bg-[#050a0a] text-white overflow-hidden`}
            >
              {/* subtle glow */}
              <div
                className="absolute top-0 left-0 w-[55%] h-[65%] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 20%, rgba(92,225,230,0.07) 0%, transparent 70%)",
                }}
              />
              {/* grid texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(#5CE1E6 1px, transparent 1px), linear-gradient(90deg, #5CE1E6 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* BIG NUMBER */}
              <div
                className="absolute text-[#5CE1E6]/10 top-4 left-6 font-black leading-none pointer-events-none select-none"
                style={{
                  fontSize: "clamp(120px, 14vw, 200px)",
                  letterSpacing: "-0.05em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* content */}
              <div className="relative z-10 max-w-2xl">
                <p className="text-[#5CE1E6] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                  {eco.label} · Point {i + 1}
                </p>
                <p
                  className="font-bold mb-8 leading-[1.2] tracking-[-0.02em] text-white"
                  style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.4rem)" }}
                >
                  {bullet}
                </p>
                <div className="flex flex-wrap gap-3">
                  {eco.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm font-medium border border-[#5CE1E6]/50 text-[#5CE1E6] bg-[#5CE1E6]/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                  opacity: 0.4,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* desktop CTA */}
      <div className="hidden md:flex justify-center items-center gap-4 py-16 px-6">
        <Link href={eco.cta.href}>
          <button className="px-8 py-3.5 text-sm font-semibold text-black rounded-full border border-[#5CE1E6] bg-[#5CE1E6] ">
            {eco.cta.label}
          </button>
        </Link>
        <Link href="/about-us">
          <button className="px-8 py-3.5 text-sm font-semibold text-[#5CE1E6] border-2 border-[#5CE1E6]/70 rounded-full hover:text-black hover:border-[#5CE1E6] hover:bg-[#5CE1E6]/10 transition-all duration-300">
            Learn More
          </button>
        </Link>
      </div>

      {/* divider */}
      <div className="w-full max-w-5xl mx-auto px-6">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(92,225,230,0.3) 50%, transparent)",
          }}
        />
      </div>
    </div>
  );
}

export default function EcosystemSection() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <div className="text-center pt-24 pb-4">
        <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Ecosystem
        </p>
        <h2 className="text-[clamp(2rem,5vw,2.6rem)] dark:text-white font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111] max-w-2xl mx-auto">
          Everything you need to grow, lead, and connect
        </h2>
        <p className="text-gray-500 mt-4 text-base max-w-xl mx-auto">
          The Mikaelson ecosystem is built around four pillars — each one
          designed to move you forward.
        </p>
      </div>
      {/* bg-[#5CE1E6] text-black hover:bg-[#4bcdd2] transition-all duration-200 */}
      {/* pills */}
      <div className="flex justify-center flex-wrap gap-3  py-8">
        {ecosystems.map((eco, i) => (
          <button
            key={eco.id}
            onClick={() => setActive(i)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              active === i
                ? "bg-[#5CE1E6] text-black  transition-all duration-200"
                : "text-black  hover:border-[#5CE1E6] "
            }`}
          >
            <span className=" mr-1.5">{eco.number}</span>
            {eco.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <EcosystemBlock eco={ecosystems[active]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
