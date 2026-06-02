import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Operations from "@/components/home/Operations";
import Values from "@/components/home/Values";
import Sustainability from "@/components/home/Sustainability";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Operations />
      <Values />
      <Sustainability />
      <CTA />
    </>
  );
}
