"use client";
import React, { useRef } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Phone } from "lucide-react";
import SchedulePrivateConsultationButton from "./header_components/SchedulePrivateConsultationButton";
import HamburgerMenu from "./header_components/HamburgerMenu";
import { motion } from "motion/react";
const NavigationBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  type NavLink = {
    route: string;
    label: string;
    // icon?: React.ReactElement;
  };
  const navLinks: NavLink[] = [
    { route: "#", label: "Properties" },
    { route: "#", label: "Neighbourhoods" },
    { route: "#", label: "Private Desk" },
    { route: "#", label: "About" },
    { route: "#", label: "Journal" },
  ];
  const childVariant = {
    hidden: {
      y: "-10%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      transition: {
        duration: 0.5,
      },
      opacity: 1,
    },
  };
  return (
    <>
      <motion.header
        ref={containerRef}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              ease: [0.16, 1, 0.3, 1],
              duration: 0.3,
            },
          },
        }}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 1 }}
        className="z-10 bg-aks-prm-light dark:bg-aks-ntr-d font-label shadow-sm shadow-black fixed top-0 w-full"
      >
        <div className="flex justify-between items-center py-2 px-2 md:px-7">
          <div className="flex gap-2 items-center justify-center">
            <motion.div variants={childVariant}>
              <Logo />
            </motion.div>
            <motion.div
              variants={childVariant}
              className="flex items-center gap-2"
            >
              <div className="flex flex-col font-label uppercase">
                <h1 className="text-xl font-bold">Aksad</h1>
                <span className="text-xs uppercase dark:text-slate-400 font-bold whitespace-nowrap">
                  Consultancy • Land advisory
                </span>
              </div>
            </motion.div>
          </div>
          <motion.section className="hidden flex-1 xl:flex justify-evenly items-center">
            {navLinks.map((l, idx) => (
              <motion.a
                variants={childVariant}
                href={l.route}
                className="flex items-center hover:text-shadow-[0px_0px_2px] hover-lines transition-all duration-300 text-sm"
                key={idx}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.section>
          <motion.div
            variants={childVariant}
            className="flex items-center justify-between gap-x-4"
          >
            <motion.a
              variants={childVariant}
              href={"#"}
              className="hidden lg:block text-xs whitespace-nowrap hover-lines"
            >
              <Phone
                className="inline-block mr-2"
                size={14}
                color={"#BC0B3B"}
              />
              (+231) 776 511 919
            </motion.a>

            <SchedulePrivateConsultationButton className="hidden sm:block" />
            <HamburgerMenu className="max-sm:flex hidden" />
          </motion.div>
        </div>
      </motion.header>
      <div
        style={{
          height: `${containerRef.current?.getBoundingClientRect().height || 10}px`,
        }}
      />
    </>
  );
};

export default NavigationBar;
