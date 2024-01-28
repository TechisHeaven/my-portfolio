"use client";
import {
  motion,
  stagger,
  useInView,
  useTime,
  useTransform,
} from "framer-motion";
import { Scale } from "lucide-react";
import React from "react";
import Counter from "./Counter";
import TerminalSection from "./TerminalSection";
export default function SplashScreen() {
  const string = "#TechisHeaven";
  const arrayString = string.split("");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  // const textContainerArray = [
  //   {
  //     id: "1",
  //     text: arrayString,
  //   },
  // ];
  // const [textContainerArrayData, setTextContainerArrayData] =
  //   React.useState(textContainerArray);
  const [hideAnimationDiv, setHideAnimationDiv] = React.useState(false);
  const [animationTerminal, setAnimationTerminal] = React.useState(false);
  function randomString(length: number) {
    var chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");

    if (!length) {
      length = Math.floor(Math.random() * chars.length);
    }

    var str = "";
    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }

  React.useEffect(() => {
    return;
    let textAddInterval = setInterval(() => {
      const id = randomString(20);

      // setTextContainerArrayData((prevArray) => [
      //   { id, text: arrayString2 },
      //   ...prevArray,
      //   { id, text: arrayString2 }, // Add to the bottom as well
      // ]);

      // console.log(textContainerArrayData);
    }, 3000);
    return () => clearInterval(textAddInterval);
  }, []);

  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: variants,
    };
  };
  const animationTextSlideUp = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      originY: 0,
      opacity: 1,

      y: 0,
    },
    // animate: {
    //   opacity: 1,
    //   y: 0,
    // },
    exit: { opacity: 1, y: 0, originY: 0 },
  };

  const LoaderAnimation = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 3 },
    },
    exit: { opacity: 1 },
  };
  const opacity = {
    initial: {
      opacity: 0,
    },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
  };
  const textAnimationColor = {
    initial: {
      scale: 1,
      opacity: 1,
      WebkitTextFillColor: "transparent",
      backgroundImage: "-webkit-linear-gradient(#000, #000)",
      WebkitBackgroundClip: "text",
    },
    animate: {
      // scale: 20,
      // opacity: 0.2,
      // backgroundImage: "-webkit-linear-gradient(#FF0000, #FFFF00)",
      backgroundImage: "-webkit-linear-gradient(#eee, #333)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: {
        duration: 0.5,
        delay: 2,
      },
    },
    exit: {
      // backgroundImage: "-webkit-linear-gradient(#000, #000)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };

  const ScreenHidder = {
    initial: {
      // display: "fixed",
      opacity: 1,
    },
    animate: {
      // display: "none",
      opacity: 0,
      transition: {
        // duration: 1,
        delay: 6,
      },
    },
    exit: {
      // display: "none",
      opacity: 1,
      y: "-100%",
    },
  };

  if (!hideAnimationDiv && document) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
  return (
    !hideAnimationDiv && (
      <motion.div
        // onAnimationComplete={async () => {
        //   function sleep(time: number) {
        //     return new Promise((resolve) => setTimeout(resolve, time));
        //   }
        //   await sleep(12000).then(() => setHideAnimationDiv(true));
        //   // setAnimationTerminal(true);
        // }}
        onAnimationComplete={() => {
          setHideAnimationDiv(true);
        }}
        {...anim(ScreenHidder)}
        className="fixed bg-white w-full h-full z-50 flex items-center justify-center"
      >
        <motion.h1 ref={ref} className=" font-bold text-9xl flex flex-col">
          <div className="flex">
            {arrayString.map((str, index) => {
              return (
                <motion.div
                  // initial="initial"
                  // animate="animate"

                  {...anim(animationTextSlideUp)}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.2,
                      delay: 0.1 * index,
                      originY: 0,
                    },
                  }}
                  key={`item-${index}`}
                >
                  <motion.p className="nameText" {...anim(textAnimationColor)}>
                    {str}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </motion.h1>
        <motion.h1
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 1.4 },
          }}
          initial={{ opacity: 0 }}
          className="absolute right-10 bottom-10 font-semibold text-2xl "
        >
          Himanshu
        </motion.h1>
        <motion.div
          className="absolute bottom-40 font-bold  text-4xl bg-black text-white w-40 justify-center aspect-square rounded-full flex items-center "
          animate={{
            opacity: 1,
            width: "100vw",
            height: "100vh",
            bottom: 0,
            borderRadius: 0,
            transition: { duration: 0.4, delay: 5 },
          }}
          initial={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
        >
          <motion.span
            animate={{
              opacity: 0,
              display: "none",
              transition: { duration: 0.4, delay: 6 },
            }}
            initial={{ opacity: 1, display: "block" }}
          >
            <Counter value={100} />%
          </motion.span>
        </motion.div>
        <TerminalSection />
      </motion.div>
    )
  );
}
