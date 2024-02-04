"use client";
import Header from "@/components/ui/Header/Header";
import SplashScreen from "@/components/ui/SplashScreen/SplashScreen";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  useEffect(() => {
    if (
      typeof sessionStorage !== "undefined" &&
      typeof document !== "undefined"
    ) {
      if (sessionStorage.getItem("isAnimationCompleted") === null) {
        setIsAnimationCompleted(false);
      } else {
        setIsAnimationCompleted(true);
        document.body.style.overflowY = "auto";
      }
    }
  }, []);
  return (
    <AnimatePresence mode="wait">
      {!isAnimationCompleted && <SplashScreen />}
      <Header />
      {children}
    </AnimatePresence>
  );
}
