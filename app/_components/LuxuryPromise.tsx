"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LuxuryPromise = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video automatically on mount
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      console.log("Autoplay blocked or not supported");
    });
  }, []);

  const sWords = [
    { title: "Some title", desc: "Some desc" },
    { title: "Some title", desc: "Some desc" },
    { title: "Some title", desc: "Some desc" },
  ];

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ amount: 0.4 }}
      transition={{ duration: 0.7 }}
      ref={containerRef}
      className="relative w-full h-[110vh] bg-black text-white"
    >
      {/* 1. Tall outer container creates the scroll runway for the pin */}
      {/* 2. Pinned viewport containing the sticky video and scrolling text */}
      <div className="w-full h-full overflow-hidden flex items-center justify-center">
        {/* Background Video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover absolute inset-0 z-0"
        >
          <source src="/videos/background.webm" type="video/webm" />
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-1" />

        <motion.div
          className="z-1 w-[50%] md:w-[70%]"
          variants={{
            hidden: {
              opacity: 0,
              y: -100,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          whileInView={"visible"}
          initial={"hidden"}
          viewport={{
            margin: "0px 0px 0px 0px",
            amount: 1,
            once: true,
          }}
        >
          <motion.h2
            variants={{
              hidden: {
                y: 100,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.7 },
              },
            }}
            className="text-2xl md:text-4xl font-headline mb-2"
          >
            Find Your Next Chapter.
          </motion.h2>
          <motion.p
            variants={{
              hidden: {
                y: 100,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 2 },
              },
            }}
            className="font-headline italic text-xl md:text-2xl mb-3"
          >
            Discover modern apartments, prime land, and premier city spaces
            built for what&apos;s next.
          </motion.p>

          <motion.a
            variants={{
              hidden: {
                y: 100,
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 2 },
              },
            }}
            className="block bg-aks-ntr btn w-fit ml-auto"
          >
            Explore Properties
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LuxuryPromise;
