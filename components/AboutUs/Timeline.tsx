"use client";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    date: "May 2021",
    event: "Asamaan founded",
  },
  {
    date: "August 2022",
    event: "Market Research Started",
  },
  {
    date: "February 2023",
    event: "BULIMA-LR1 Development Kickoff",
  },
  {
    date: "September 2023",
    event: "CU Boulder Innovation & Entrepreneurship Funding",
  },
  {
    date: "January 2024",
    event: "Strategic Partnership with Senegalese NAVY Initiated",
  },
  {
    date: "May 2024",
    event: "Commencement of AI Integration",
  },
];

const Timeline = () => {
  return (
    <div className="space-y-4">
      <div className="relative border-l border-muted">
        {timelineEvents.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute w-3 h-3 bg-accent rounded-full -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">
              {item.date}
            </time>
            <h3 className="text-lg font-semibold">{item.event}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
