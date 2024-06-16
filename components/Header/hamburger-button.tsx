import React, { useState } from "react";
import { MotionConfig, delay, motion, stagger } from "framer-motion";

export const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative z-10 h-16 w-16 rounded-full"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[2px] w-8 bg-foreground"
          style={{ left: "25%", top: "38%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[2px] w-8 bg-foreground"
          style={{ left: "25%", top: "50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[2px] w-5 bg-foreground"
          style={{ left: "25%", top: "62%" }}
        />
      </motion.button>
      <motion.div
        animate={active ? "open" : "closed"}
        variants={VARIANTS.overlay}
        className="absolute top-0 left-0 h-screen w-screen bg-accent flex flex-col justify-center items-center opacity-0"
      >
        <motion.a variants={VARIANTS.link} className="opacity-0" href="#">
          <h1>BULIMA LR-1</h1>
        </motion.a>
        <motion.a variants={VARIANTS.link} className="opacity-0"href="#">
          <h1>APPLICATIONS</h1>
        </motion.a>
        <motion.a variants={VARIANTS.link} className="opacity-0"href="#">
          <h1>ABOUT US</h1>
        </motion.a>
        <motion.a variants={VARIANTS.link} className="opacity-0"href="#">
          <h1>CONTACT US</h1>
        </motion.a>
      </motion.div>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
      opacity: [0, 1, 1],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "38%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
      opacity: [0.5, 0, 0],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
      opacity: 1,
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
      top: ["65%", "50%", "50%"],
      opacity: [0, 1, 1],
      width: 32,
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "62%"],
    },
  },
  overlay: {
    open: {
      opacity: 1,
      height: ["0vh", "100vh"],
      left: ["8%", "0%"],
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    closed: {
      display: "none",
      transition: {
        when: "afterChildren",
        staggerChildren: -0.1,
      }
    },
  },
  link: {
    open: {
      opacity: 1,
    },
    closed: {
        opacity: 0
    },
  },
};
