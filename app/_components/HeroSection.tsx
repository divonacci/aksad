"use client";
import { ArrowRight, Handshake, Verified } from "lucide-react";
import { motion, Variants } from "motion/react";
import { useRef } from "react";

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Delay before the second sentence starts lifting up
        duration: 1.5,
      },
    },
  };
  const sentenceVariant: Variants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={heroRef}
      className="relative font-label text-[#ECF0FF] shadow-md shadow-black overflow-clip mb-10"
    >
      <motion.div
        initial={{
          x: "-100%",
        }}
        animate={{
          x: "100%",
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 9.5,
          repeatType: "mirror",
          ease: "linear",
          delay: 10,
        }}
        className="absolute inset-0 w-[200%] h-full -skew-x-20 bg-linear-to-r from-transparent via-white/30 to-transparent"
      />

      <motion.div
        className="-z-2 absolute h-full w-full"
        initial={{
          background: `
          radial-gradient(circle at top left, var(--color-aks-sec) 50%, transparent 10%),    
          radial-gradient(circle at bottom right, var(--color-aks-trt) 50%, transparent 10%),
          var(--color-aks-prm)`,
        }}
        animate={{
          background: `
        radial-gradient(circle at top left, var(--color-aks-sec) 0%, transparent 5%),    
        radial-gradient(circle at bottom right, var(--color-aks-trt) 1%, transparent 10%),
        var(--color-aks-prm)`,
        }}
        transition={{
          duration: 1,
        }}
      />

      <div className="py-30 z-1">
        <div className="mx-auto w-fit flex flex-col justify-center items-center">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gray-300/20 rounded-full px-6 py-1.5  my-4 block uppercase text-xs text-center font-bold"
          >
            <Verified
              fill={"#10b981"}
              color="#d1d5dc"
              className="inline-block mr-2"
            />
            Aksad Consultancy • Verified Luxury Real Estate
          </motion.span>
          <motion.div
            variants={containerVariants}
            initial={"hidden"}
            animate={"visible"}
            className="overflow-hidden flex-center flex-col"
          >
            <motion.p
              variants={sentenceVariant}
              className="font-headline text-2xl md:text-3xl lg:text-5xl"
            >
              Invest in Premium Properties &amp;
            </motion.p>
            <motion.p
              variants={sentenceVariant}
              className="font-headline text-rose-300 italic text-2xl md:text-3xl lg:text-5xl"
            >
              Prime Land
            </motion.p>
            <motion.p
              className="text-center max-w-[65%] my-5 text-sm"
              variants={sentenceVariant}
            >
              Curated architectural estates, high-yield commercial developments,
              and legally verified direct land acquisitions tailored for
              discerning private investors and institutional capital funds.
            </motion.p>
            <motion.div
              className="flex flex-col items-center sm:flex-row justify-evenly w-[80%] gap-3 text-sm"
              variants={sentenceVariant}
            >
              <motion.a
                whileHover={{
                  y: -2,
                }}
                href="#"
                className="btn sec-btn w-[80%] text-center"
              >
                Explore Featured Listings{" "}
                <ArrowRight className="inline-block ml-2" />
              </motion.a>
              <motion.a
                href="#"
                className="btn bg-gray-500/50 w-[80%] text-center overflow-clip relative before:absolute before:inset-0 before:bg-aks-trt before:w-0 hover:before:w-full before:duration-300 before:transition-all before:h-full before:-z-1"
              >
                <Handshake className="inline-block text-green-300 mr-2" />{" "}
                Consult our Advisory
              </motion.a>
            </motion.div>
            <motion.div
              className="flex-center text-xs text-gray-400 mt-4 gap-8 px-5"
              variants={sentenceVariant}
            >
              <p className="flex-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
                Over $400K+ Transacted
              </p>
              <p className="flex-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                100% Guaranteed Clear Title Deeds
              </p>
              <p className="flex-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                Zero Brokerage on Direct Holdings
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
