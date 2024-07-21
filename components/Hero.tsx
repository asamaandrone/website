import Spline from "@splinetool/react-spline/next";
import { Button } from "./ui/button";
import { FlipWords } from "./ui/flip-words";

function Hero() {
  const words = ["high", "long", "smart"];
  return (
    <section className="relative h-[70vh] md:h-[90vh] w-full py-36">
      <div className="flex flex-col justify-center items-center space-y-12 text-center ">
        <h1 className="font-black">
          Fly <FlipWords words={words} />
        </h1>
        <h2 className="text-xl md:text-2xl">
          Building the most affordable and perfomant VTOL drones for aerial
          mapping, surveillance & delivery
        </h2>
        <div className="space-x-4 font-black">
          <Button size={"sm"}>Invest in Asamaan</Button>
          <Button variant={"outline"} size={"sm"}>Stay updated!</Button>
        </div>
      </div>
      <div className="max-md:hidden absolute -z-10 top-0 left-0 w-full h-full">
        <Spline scene="https://prod.spline.design/UDPHFljNu087mPTB/scene.splinecode" />
      </div>
      <div className="md:hidden absolute -z-10 top-0 left-0 w-full h-full">
        <Spline scene="https://prod.spline.design/op3PRcLcqyOmrGbg/scene.splinecode" />
      </div>
    </section>
  );
}

export default Hero;
