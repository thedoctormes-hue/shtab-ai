import { Hero } from "../../components/Hero";
import { Projects } from "../../components/Projects";
import { Stakeholders } from "../../components/Stakeholders";
import { Architecture } from "../../components/Architecture";
import { Cases } from "../../components/Cases";
import { TechStack } from "../../components/TechStack";
import { Contacts } from "../../components/Contacts";

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
