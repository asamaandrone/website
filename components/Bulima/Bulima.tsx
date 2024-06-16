import { StickyScroll } from "./sticky-scroll-reveal";
import { TextGenerateEffect } from "../ui/text-generate-effect"
import Image from "next/image";

const content = [
  {
    title: "Stable Flight",
    description: "Our drone offers state-of-the-art flight control systems for precision and stability, ensuring smooth and reliable operations even in challenging conditions.",
    content: (
      <div className="h-full w-full">
        <Image src="/features/stability.png"  alt="Air Flow Simualation" quality={100} fill/>
      </div>
    ),
  },
  {
    title: "Long Endurance",
    description: "Capable of flying for up to 6 hours, the drone ensures extended operational periods, reducing the need for frequent battery changes or refueling.",
    content: (
      <div className="h-full w-full">
        <Image src="/features/battery.png"  alt="Air Flow Simualation" quality={100} fill/>
      </div>
    ),
  },
  {
    title: "High Wind Resistance",
    description: "Engineered to operate efficiently in strong winds up to 22 m/s, providing reliable performance in adverse weather conditions.",
    content: (
      <div className="h-full w-full">
        <Image src="/features/windRes.webp"  alt="Air Flow Simualation" quality={100} fill/>
      </div>
    ),
  },
  {
    title: "Real-Time Data",
    description: "Equipped with advanced sensors to provide real-time data and improved situational awareness, critical for various applications.",
    content: (
      <div className="h-full w-full">
        <Image src="/features/telemetry.jpeg"  alt="Air Flow Simualation" quality={100} fill/>
      </div>
    ),
  },
  {
    title: "AI-enabled Systems & Advanced Sensors",
    description: "Integrated AI systems and advanced sensors enhance automation, precision, and efficiency across different operations.",
    content: (
      <div className="h-full w-full">
        <Image src="/features/sensors.webp"  alt="Air Flow Simualation" quality={100} fill/>
      </div>
    ),
  },
];

function Bulima() {
    const words = "BULIMA LR-1"
  return (
    <section className='h-fit my-4 space-y-4'>
        <h2 className="flex flex-wrap gap-x-3">Introducing the <TextGenerateEffect words={words}/></h2>
        <p>The BULIMA LR-1 is designed to offer unmatched performance, stability, and versatility across various industries.</p>
        <p className="animate-pulse font-bold text-accent pb-4">Scroll down ↓</p>
        <StickyScroll content={content} />
    </section >
  )
}

export default Bulima;
