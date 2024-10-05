"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";

const industries = [
  {
    image: "/industries/wardrone.gif",
    title: "Defense and Security",
    description:
      "Enhancing operations with surveillance, reconnaissance, and tactical support for improved situational awareness.",
  },
  {
    image: "/industries/agrdrone.gif",
    title: "Commercial and Industrial",
    description:
      "Boosting efficiency, safety, and accuracy in infrastructure inspection, construction, agriculture, and more.",
  },
  {
    image: "/industries/plandrone.gif",
    title: "Research, Planning, and Healthcare",
    description:
      "Supporting wildlife monitoring, environmental assessments, urban mapping, and medical supply delivery.",
  },
];

function Applications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + industries.length) % industries.length
    );
  };

  return (
    <section id="applications" className="pt-8 my-4 space-y-4">
      <h2 className="pb-4">
        <TextGenerateEffect words={"Applications"} />
      </h2>
      <p className="text-sm">
        Discover the diverse range of industries benefit from our VTOL drone
        technology.
      </p>
      <div className="relative w-full h-fit">
        <div className="overflow-hidden h-full">
          <motion.div
            className="flex h-full"
            initial={{ x: 0 }}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.5 }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="min-w-full h-full flex flex-col justify-center items-center space-y-4 p-4"
              >
                <div className="">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={500}
                    height={300}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold uppercase">
                  {industry.title}
                </h3>
                <p className="text-center">{industry.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="rounded-full border border-foreground h-fit w-fit"
          >
            <ChevronLeftIcon />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            onClick={handleNext}
            className="rounded-full border border-foreground h-fit w-fit"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Applications;
