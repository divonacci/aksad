"use client";
import { motion } from "motion/react";
const UnderConstruction = () => {
  return (
    <motion.div
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      }}
      initial={{
        y: 10,
        opacity: 0,
      }}
    >
      <p className="text-2xl md:text-4xl my-20 text-center mx-auto">
        This site is currently under construction
      </p>
    </motion.div>
  );
};

export default UnderConstruction;
