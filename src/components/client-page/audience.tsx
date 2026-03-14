"use client";

import { motion } from "framer-motion";
import { audience } from "./data";

export default function WhoItsFor() {
  return (
    <section className="py-24 px-5 md:px-10 bg-white dark:bg-[#050a0a] text-[#111] dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-[#5CE1E6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Audience
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-extrabold leading-[1.15] tracking-[-0.03em] max-w-sm">
              Who Mikaelson<br />Is For
            </h2>
          </div>
          <p className="text-base text-[#555] dark:text-white/50 leading-relaxed max-w-md md:text-right">
            Mikaelson is designed for African students who are committed to growth,
            discipline, and building meaningful impact within their schools and communities.
          </p>
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {audience.map((item, index) => {
            const Icon = item.icon;
            const isOffset = index % 2 === 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                className="group relative rounded-2xl overflow-hidden border border-black/8 dark:border-[#5CE1E6]/15 bg-[#f7fafa] dark:bg-[#0b1214] transition-all duration-300 hover:border-[#5CE1E6]/50 dark:hover:border-[#5CE1E6]/40"
                style={{ marginTop: isOffset ? "1.5rem" : "0" }}
              >
                {/* image strip */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // fallback if image missing
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* image overlay — light teal tint */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#5CE1E6]/10 to-[#5CE1E6]/25 dark:from-[#050a0a]/20 dark:to-[#050a0a]/60" />

                  {/* number watermark on image */}
                  <span className="absolute bottom-3 right-4 font-black text-white/20 dark:text-white/10 leading-none select-none pointer-events-none"
                    style={{ fontSize: "clamp(56px, 8vw, 80px)", letterSpacing: "-0.05em" }}>
                    {item.number}
                  </span>
                </div>

                {/* content */}
                <div className="p-7 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    {/* icon */}
                    <div className="p-2.5 rounded-xl border border-[#5CE1E6]/25 bg-[#5CE1E6]/8 dark:bg-[#5CE1E6]/5 dark:border-[#5CE1E6]/20 transition-colors duration-300 group-hover:border-[#5CE1E6]/50">
                      <Icon size={22} color="#5CE1E6" strokeWidth={1.5} />
                    </div>
                    <div className="w-6 h-[1.5px] bg-[#5CE1E6]/40 rounded-full" />
                  </div>

                  <h3 className="text-lg font-bold tracking-[-0.02em] text-[#111] dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#555] dark:text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, transparent, #5CE1E6 40%, #5CE1E6 60%, transparent)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}