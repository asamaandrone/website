"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Spec {
  name: string;
  value: string;
}

const specs: Spec[] = [
  { name: "Wingspan", value: "4.5 m" },
  { name: "Fuselage", value: "2.5 m" },
  { name: "MTOW", value: "25 kg" },
  { name: "Endurance", value: "6 hours" },
  { name: "Range", value: "100 km" },
  { name: "Cruising Speed", value: "120-150 km/h" },
  { name: "Wind Resistance", value: "20 - 22 m/s" },
  { name: "Maximum Speed", value: "180 km/h" },
  { name: "Ceiling", value: "4500 m" },
  { name: "Ground Sampling Distance", value: "2cm/px" },
];

const features = [
  {
    name: "Computer Vision",
    description:
      "With state-of-the-art object-detection algorithms, the drone autonomy is capable of detecting and localizing potential targets of interest.",
    image: "/features/ai.gif",
  },
  {
    name: "High-definition 3D Maps",
    description:
      "By leveraging the use of LiDAR and cameras, our software provides with high-fidelity 3D reconstructed environments after scanning.",
    image: "/features/autnav.gif",
  },
  {
    name: "Real-time Data Transmission",
    description:
      "Utilizing advanced communication systems, the drone transmits data in real-time to ground stations, providing instant access to critical information and enhancing situational awareness for informed decision-making.",
    image: "/features/radio.gif",
  },
  {
    name: "Autonomous Navigation",
    description:
      "Go anywhere and anytime you want with the Bulima LR-1. All she needs is a starting point A and your desired destination B.",
    image: "/features/electronics.jpeg",
  },
  {
    name: "High Payload Capacity",
    description:
      "Designed to carry heavy payloads, the drone can transport essential supplies, medical equipment, and specialized sensors, making it versatile for various industries including logistics and emergency response.",
    image: "/features/payload.gif",
  },
];

function Bulima() {
  const [showSpecs, setShowSpecs] = useState(false);
  const words = "BULIMA LR-1";

  const toggleSpecs = () => setShowSpecs(!showSpecs);

  return (
    <section
      id="bulima"
      className="my-4 space-y-8 flex flex-col items-center justify-center text-center"
    >
      <h2 className="flex flex-wrap gap-x-3 pb-4 uppercase text-balance">
        Introducing the BULIMA LR I
      </h2>
      <p>
        The BULIMA LR-1 is designed to offer unmatched performance, stability,
        and versatility for all your missions
      </p>
      <div>
        <Image
          src={"/asamaan_drone_side1.png"}
          alt={"Asamaan side view"}
          width={500}
          height={300}
          className="object-contain"
        />
      </div>
       {/* Specs */}
       <h4 className="animate-pulse font-bold mb-4 w-full flex items-end uppercase">
        Technical specifications
        <button
          className="ml-4 rounded-full border border-foreground h-fit w-fit"
          onClick={toggleSpecs}
        >
          {showSpecs ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </h4>
      <hr className="w-full " />
      {showSpecs && (
        <div className="grid grid-cols-2 md:grid-rows-2 md:grid-cols-5 gap-2">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              className="p-4 flex flex-col justify-evenly space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="font-black text-xs uppercase">{spec.name}</p>
              <hr />
              <p className="font-black text-xs text-accent">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      )}
      {/*Features */}
      <div className="pt-4 w-full">
        {/* Grid of alternating features and images */}
        {features.map((feature, index) => (
          <div
            key={index}
            className={`md:flex justify-between items-center md:h-[50vh] ${
              index % 2 === 0
                ? "md:flex-row-reverse md:text-left"
                : "md:text-right"
            }`}
          >
            <div className="flex justify-center md:justify-end">
              <Image
                src={feature.image}
                alt={feature.name}
                width={500}
                height={300}
                className="object-contain"
              />
            </div>
            <motion.div
              className="p-4 md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="uppercase font-black">{feature.name}</h4>
              <p className="mt-4 text-xs leading-6 text-pretty">
                {feature.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bulima;
