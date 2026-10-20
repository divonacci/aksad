"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import ThemeToggle from "./_components/ThemeToggle";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
      <ThemeToggle />
    </ThemeProvider>
  );
};

export default Providers;
