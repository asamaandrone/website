import React from "react";
import { MotionConfig, motion } from "framer-motion";
interface AnimatedHamburgerButtonProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimatedHamburgerButton: React.FC<AnimatedHamburgerButtonProps> = ({ active, setActive }) => {
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
        className="fixed z-0 top-0 right-0 h-screen w-screen bg-accent/10 backdrop-blur-xl flex flex-col justify-center items-end pr-16 md:pr-36 gap-y-4 opacity-0 hover:[&_a]:text-accent"
      >
        <motion.a variants={VARIANTS.link} className="opacity-0" href="#bulima">
          <h2 className="max-md:text-xl">BULIMA LR-1</h2>
        </motion.a>
        <motion.a variants={VARIANTS.link} className="opacity-0"href="#applications">
          <h2 className="max-md:text-xl">APPLICATIONS</h2>
        </motion.a>
        <motion.a variants={VARIANTS.link} className="opacity-0"href="#aboutus">
          <h2 className="max-md:text-xl">ABOUT US</h2>
        </motion.a>
        <motion.a variants={VARIANTS.link} className="opacity-0"href="#contactus">
          <h2 className="max-md:text-xl">CONTACT US</h2>
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

export default AnimatedHamburgerButton;