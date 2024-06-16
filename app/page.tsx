import AboutUs from "@/components/AboutUs/AboutUs";
import Applications from "@/components/Applications/Applications";
import Bulima from "@/components/Bulima/Bulima";
import ContactUs from "@/components/ContactUs/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

function Home() {
  return (
    <>
      <Header />
      <main className="py-4 px-8 md:px-16 xl:px-32">
        <div className="-z-30 absolute inset-0 h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_50px,rgba(30,75,210,0.5),transparent)]"></div>
        </div>
        <div className="-z-20 absolute inset-0 h-full w-full opacity-5">
          <Image 
            src={"/topography2.jpeg"}
            alt={"Topographic Background"}
            quality={100}
            fill
          />
        </div>
        <Hero />
        <Bulima />
        <Applications />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default Home;
