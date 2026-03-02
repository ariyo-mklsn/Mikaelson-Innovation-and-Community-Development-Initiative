"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { pillars } from "./data";
// text-lg md:text-[1.1rem] dark:text-white leading-[1.2] tracking-[0.025em] text-[#111111]
export default function WhatWeDo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      gsap.from(".pillar-card", {
        scrollTrigger: {
          trigger: ".pillars",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 text-[#111111] dark:text-white border border-red-300">
      <div className="container mx-auto md:px-10 ">

        <div className="text-center mb-20">
          <h2 className="md:text-[2.3rem] text-xl  dark:text-white font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111]d mb-6">
            How We Develop Future-Ready African Leaders
          </h2>
          <p className="md:max-w-2xl mx-auto w-full md:text-lg text-sm ">
            Structured systems designed for measurable youth leadership and personal development growth.
          </p>
        </div>

        <div className="pillars grid md:grid-cols-4 gap-6">

          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="pillar-card group border rounded-2xl overflow-hidden bg-transparent transition-shadow duration-300"
            >
              {/* Image Wrapper */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 dark:text-white ">
                <h3 className="text-xl font-medium mb-4">
                  {pillar.title}
                </h3>
                <p>
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}