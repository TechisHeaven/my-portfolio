"use client";
import Header from "@/components/ui/Header/Header";
import SplashScreen from "@/components/ui/SplashScreen/SplashScreen";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <SplashScreen />
      <Header />
      {children}
    </AnimatePresence>
  );
}
