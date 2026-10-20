"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import useListings from "../_hooks/useListings";
import ListIngCard from "./fyp/ListIngCard";

const FindYourPlaceInTheWorld = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { allListings, houses, lands } = useListings();

  const [selectedTab, setSelectedTab] = useState<"all" | "lands" | "houses">(
    "all",
  );

  const btns = [
    { name: "All", type: "all" },
    { name: "Houses", type: "houses" },
    { name: "Lands", type: "lands" },
  ] as const;

  const selectedList = useMemo(() => {
    switch (selectedTab) {
      case "all":
        return allListings;
      case "houses":
        return houses;
      case "lands":
        return lands;
      default:
        return allListings;
    }
  }, [selectedTab, allListings, houses, lands]);

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const cV: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const chV = {
    hidden: {
      // scale: "0%",
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Suspense
      fallback={
        <div className="text-center text-slate-500 dark:text-slate-400">
          Loading...
        </div>
      }
    >
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        // style={{ scale }}
        className="max-w-7xl mx-auto px-4 py-8 mt-10"
      >
        {/* Section Header */}
        <motion.div
          viewport={{
            amount: 1,
            margin: "-50px 0px",
          }}
          whileInView={"visible"}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={cV}
          className="mb-5"
        >
          <motion.h2
            variants={chV}
            className="font-label font-bold text-slate-800 dark:text-white text-3xl tracking-tight"
          >
            Find your place in the world
          </motion.h2>
          <motion.p
            variants={chV}
            className="text-sm text-slate-500 dark:text-slate-400 mt-1"
          >
            Explore our curated collection of available houses and lands.
          </motion.p>
        </motion.div>
        {/* Modern Segmented Tab Switcher */}
        <motion.div className="flex bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl w-fit shadow-inner">
          {btns.map((b) => {
            const isSelected = b.type === selectedTab;
            return (
              <button
                key={b.type}
                onClick={() => setSelectedTab(b.type)}
                className={`relative px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  isSelected
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md scale-[1.02]"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {b.name}
              </button>
            );
          })}
        </motion.div>
        {/* Responsive Card Grid */}
        <motion.div
          className="flex gap-4 md:gap-x-20 no-scrollbar overflow-x-scroll p-9 "
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
              marginTop: "50px",
              scale: 1,
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {selectedList.map((i, idx) => (
            <ListIngCard key={i.id || idx} item={i} variants={childVariant} />
          ))}
        </motion.div>
      </motion.div>
    </Suspense>
  );
};

export default FindYourPlaceInTheWorld;
