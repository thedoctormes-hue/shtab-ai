import { getTranslations } from "next-intl/server";
import { Hero } from "../../components/sections/Hero";
import { Projects } from "../../components/sections/Projects";
import { Stakeholders } from "../../components/sections/Stakeholders";
import { Architecture } from "../../components/sections/Architecture";
import { Cases } from "../../components/sections/Cases";
import { TechStack } from "../../components/sections/TechStack";
import { Contacts } from "../../components/sections/Contacts";
import Marquee from "../../components/Marquee";
import ParticleCanvas from "../../components/ParticleCanvas";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteConfig = {
    ru: {
      title: "AI-лаборатория, которая работает 24/7",
      description: "Автономные AI-агенты решают реальные задачи: медицина, инфраструктура, сервисы. 8 агентов, 23 проекта.",
    },
    en: {
      title: "24/7 AI Laboratory",
      description: "Autonomous AI agents solve real-world problems: medicine, infrastructure, services. 8 agents, 23 projects.",
    },
  };
  const config = siteConfig[(locale as "ru" | "en") || "ru"] || siteConfig.ru;

  return {
    title: config.title,
    description: config.description,
  };
}

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
