"use client";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  React.useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    // Check if the window object is defined before adding the scroll event listener
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);

      // Cleanup the event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", toggleVisible);
      };
    }
  }, []);
  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300) {
  //     setVisible(true);
  //   } else if (scrolled <= 300) {
  //     setVisible(false);
  //   }
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // document.addEventListener("scroll", toggleVisible);
  const opacity = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 1, y: 100 },
  };

  return (
    <motion.button
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      exit="exit"
      variants={opacity}
      onClick={scrollToTop}
      className={"bg-black text-white p-2 rounded-full fixed right-5 bottom-5"}
    >
      <ChevronUp />
    </motion.button>
  );
};

export default ScrollButton;
