import { Hero } from "../../components/sections/Hero";
import { Projects } from "../../components/sections/Projects";
import { Stakeholders } from "../../components/sections/Stakeholders";
import { Architecture } from "../../components/sections/Architecture";
import { Cases } from "../../components/sections/Cases";
import { TechStack } from "../../components/sections/TechStack";
import { Contacts } from "../../components/sections/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Stakeholders />
      <Architecture />
      <Cases />
      <TechStack />
      <Contacts />
    </>
  );
}
