import { Hero } from "../../components/sections/Hero";
import { Projects } from "../../components/sections/Projects";
import { Stakeholders } from "../../components/sections/Stakeholders";
import { Architecture } from "../../components/sections/Architecture";
import { Cases } from "../../components/sections/Cases";
import { TechStack } from "../../components/sections/TechStack";
import { Contacts } from "../../components/sections/Contacts";
import Marquee from "../../components/Marquee";
import ParticleCanvas from "../../components/ParticleCanvas";

export default function Home() {
  return (
    <>
      <div className="relative">
        <ParticleCanvas />
        <Hero />
      </div>
      <Marquee />
      <Projects />
      <div className="section-divider" />
      <Stakeholders />
      <div className="section-divider" />
      <Architecture />
      <div className="section-divider" />
      <Cases />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      <Contacts />
    </>
  );
}
