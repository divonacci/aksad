"use client";
import { HTMLAttributes, useState } from "react";

export default function HamburgerMenu({
  className,
  ...Props
}: { className?: string } & HTMLAttributes<HTMLButtonElement>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none ${className}`}
      aria-label="Toggle navigation menu"
      {...Props}
    >
      {/* Top Line */}
      <span
        className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />

      {/* Middle Line */}
      <span
        className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      />

      {/* Bottom Line */}
      <span
        className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
}
