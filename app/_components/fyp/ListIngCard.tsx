"use client";
import { ListItem } from "@/app/_hooks/useListings";
import React, { HTMLAttributes } from "react";
import { motion, Variants } from "motion/react";
import Image from "next/image";

interface ListIngCardProps extends HTMLAttributes<HTMLDivElement> {
  item: ListItem;
  variants?: Variants;
  //   attr: HTMLAttributes<HTMLDivElement>
}

const ListIngCard: React.FC<ListIngCardProps> = ({ item, variants }) => {
  return (
    <motion.div
      className="min-w-[95%] md:min-w-[40%] lg:min-w-[25%] group rounded-2xl overflow-hidden bg-white dark:bg-aks-prm shadow-md hover:shadow-xl transition-all duration-300 border border-slate-700 dark:border-slate-100 flex flex-col max-w-80 hover:scale-[108%]"
      variants={variants}
      whileInView={{
        scale: 1.1,
      }}
      initial={{ scale: 0.1 }}
      viewport={{
        amount: 0.4,
        margin: "0px 0px 0px 0px",
        // once: true,
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        <Image
          alt={item.name}
          src={item.imgUrl}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Type Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-md rounded-full text-slate-800 shadow-sm">
          {item.type}
        </span>

        {/* Price Tag */}
        <span className="absolute bottom-3 right-3 px-3 py-1.5 text-sm font-bold bg-slate-900/80 backdrop-blur-md rounded-xl text-white shadow-sm">
          ${item.price.toLocaleString()}
        </span>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-headline font-bold text-slate-800 dark:text-slate-400 text-lg line-clamp-1 mb-1">
          {item.name}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1">
          📍 {item.location}
        </p>

        <p className="text-sm text-slate-600 dark:text-slate-200 line-clamp-2 mt-auto">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ListIngCard;
