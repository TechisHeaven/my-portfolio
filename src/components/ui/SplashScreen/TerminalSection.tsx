"use client";
import {
  motion,
  useAnimationControls,
  useTime,
  useTransform,
} from "framer-motion";
import Counter from "./Counter";
import React from "react";
export default function TerminalSection() {
  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: variants,
    };
  };
  const [count, setCount] = React.useState(14);
  const [hideAnimation, setHideAnimation] = React.useState(false);
  const time = useTime();
  const controls = useAnimationControls();
  const displayOpacity = useTransform(time, [0, 6000], [0, 1], {
    clamp: false,
  });

  const pageSliderWrapper = {
    initial: {
      opacity: 0,
      //   y: "100%",
      //   borderRadius: "90%",
    },
    animate: {
      opacity: 1,
      y: "0%",
      //   borderRadius: "0%",
      transition: {
        duration: 2,
        delay: 6.4,
      },
    },
    exit: { opacity: 1 },
  };
  const displayTerminal = {
    initial: {
      opacity: displayOpacity,
      scale: 0.2,
      width: "200px",
      //   y: "100%",
    },
    animate: {
      opacity: displayOpacity,
      //   y: "0%",
      width: "800px",
      scale: 1,
      transition: {
        duration: 2,
        delay: 5,
      },
    },
    exit: {
      opacity: displayOpacity,
      //  y: "-100%"
    },
  };
  const displayCode = {
    initial: {
      opacity: 0,
      //   scale: 0.2,
      //   width: "200px",
      //   y: "100%",
    },
    animate: {
      opacity: 1,

      //   y: "0%",
      //   width: "800px",
      //   scale: 1,
      transition: {
        duration: 0.6,
        delay: 7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 3,
        duration: 5,
      },
      //  y: "-100%"
    },
  };

  React.useEffect(() => {
    const timeIntervalforCounting = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(timeIntervalforCounting);
  });
  React.useEffect(() => {
    controls.start({
      opacity: 0,
      //   y: "0%",
      scale: 1,
      transition: {
        duration: 0.2,
        delay: 15,
      },
    });
  }, [controls]);

  return (
    !hideAnimation && (
      <div className="w-full h-full absolute flex items-center justify-center">
        <motion.div
          className="wrapper h-screen w-screen flex items-center justify-center bg-black/20 relative bg-no-repeat bg-center bg-cover"
          {...anim(pageSliderWrapper)}
        >
          <div className="absolute top-4 right-4 text-white">
            Auto Closing Terminal in {count <= 0 ? 0 : count} seconds
          </div>
          <motion.div
            {...anim(displayTerminal)}
            onAnimationComplete={() => setHideAnimation(true)}
            animate={controls}
            initial={{ width: "800px" }}
            className="code z-20 rounded-md overflow-hidden backdrop-blur-sm bg-white/20 w-[800px] aspect-video  top-2/4 left-2/4 shadow-md"
          >
            <div className="head p-2 bg-slate-300 flex items-center justify-center relative">
              <div className="nav flex items-center gap-2 absolute left-2">
                <div
                  onClick={() =>
                    controls.start({
                      opacity: 0,
                      //   y: "0%",
                      scale: 1,
                      transition: {
                        duration: 0.2,
                      },
                    })
                  }
                  className="item w-3 h-3 bg-red-400 rounded-full"
                ></div>
                <div className="item w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="item w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <p className="text-sm">Portfolio.ts</p>
              <p className=""></p>
            </div>

            <motion.div
              {...anim(displayCode)}
              className="displayContent w-full p-2  text-slate-300"
            >
              <span className="text-gray-500">
                {` // I&apos;m a JavaScript developer, but I&apos;m also a human
                being with emotions.`}
              </span>
              <br /> <span className="text-blue-600/70">console</span>.
              <span className="text-slate-300">log(</span>{" "}
              <span className="text-green-600/70">
                &quot;I laugh, I cry, I code. Sometimes simultaneously.&quot;
              </span>{" "}
              ); <br />
              <span className="text-slate-500">
                {`// Don&apos;t worry, I&apos;m not a robot... yet.`}
              </span>{" "}
              <br />
              <span className="text-purple-600">if</span> (isHuman()) {`{`}{" "}
              <br />
              &emsp;
              <span className="text-blue-600/70">console</span>.
              <span className="text-slate-300">log(</span>{" "}
              <span className="text-green-600/70">
                &quot;Still enjoying coffee and occasional sunshine.&quot;
              </span>{" "}
              ); <br /> <br /> {"} "}
              <span className="text-purple-600"> {`else  `}</span>
              {`{`}
              <br />
              &emsp; <span className="text-blue-600/70">console</span>.
              <span className="text-slate-300">log(</span>{" "}
              <span className="text-green-600/70">
                &quot;Beep boop, initiating world domination.&quot;
              </span>{" "}
              ); <br />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    )
  );
}
