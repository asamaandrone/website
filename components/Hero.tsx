import { Button } from "./ui/button";
import { FlipWords } from "./ui/flip-words";

function Hero() {
  const words = ["high", "long", "smart!"];
  return (
    <section className="relative h-[75vh] w-full">
      <div className="flex flex-col justify-center space-y-8 max-w-[80%] md:max-w-[85%] xl:max-w-[70%] py-16">
      <h1>
        Fly <FlipWords words={words} />
      </h1>
      <h3>
        Building the most <span className="font-semibold text-accent">affordable</span> and{" "}
        <span className="font-semibold text-accent">perfomant</span>{" "}
        VTOL drones for aerial mapping,
        surveillance & tracking
      </h3>
      <Button size={"sm"} variant={"default"} className="w-fit">
        Join the newsletter
      </Button>

      </div>
      {/* <div className="absolute -z-10 top-0 left-0 w-full h-full">
        <Spline scene="https://prod.spline.design/UDPHFljNu087mPTB/scene.splinecode" />
      </div> */}
    </section>
  );
}

export default Hero;
