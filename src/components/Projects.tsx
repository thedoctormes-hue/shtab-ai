"use client";

import { useI18n } from "../lib/i18n";
import { motion } from "framer-motion";
import {
  Layers, Wrench, Brain, Stethoscope, ChevronRight,
  FileText, UtensilsCrossed, Activity, Mail, Shield,
  Globe, Cloud, Cpu, MessageSquare, Mic, Baby,
  TrendingUp, Car, NotebookPen, ScanLine, Database,
  Monitor, Network, Lock, Palette, TestTube, Puzzle,
} from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";

const categories = [
  { id: "medicine", icon: Stethoscope },
  { id: "infrastructure", icon: Layers },
  { id: "ai-services", icon: Brain },
  { id: "tools", icon: Wrench },
] as const;

const projectIcons: Record<string, typeof FileText> = {
  "cheque-bot": ScanLine,
  "msk-gastro-digest-bot": UtensilsCrossed,
  "lab-monitoring": Activity,
  "mail-daemon": Mail,
  "lab-vault": Shield,
  "vpn-daemon": Lock,
  "remote-access": Globe,
  "myrmex-control": Cloud,
  "polyscop": Monitor,
  "snablab": Cpu,
  "free-api-hunter": Globe,
  "consilium": Brain,
  "api-hub": Network,
  "autoexpert": Car,
  "stenographer": Mic,
  "zprr-tracker": Baby,
  "hype-pilot": TrendingUp,
  "SNZK": NotebookPen,
  "DoctorMandDesign": Palette,
  "artifact-pulse": Activity,
  "lab-playwright-expert": TestTube,
  "mcp-tools": Puzzle,
  "lab-memory": Database,
};

const projects: Record<string, { id: string; category: string; key: string }[]> = {
  medicine: [
    { id: "cheque-bot", category: "medicine", key: "cheque-bot" },
    { id: "msk-gastro-digest-bot", category: "medicine", key: "msk-gastro-digest-bot" },
  ],
  infrastructure: [
    { id: "lab-monitoring", category: "infrastructure", key: "lab-monitoring" },
    { id: "mail-daemon", category: "infrastructure", key: "mail-daemon" },
    { id: "lab-vault", category: "infrastructure", key: "lab-vault" },
    { id: "vpn-daemon", category: "infrastructure", key: "vpn-daemon" },
    { id: "remote-access", category: "infrastructure", key: "remote-access" },
    { id: "myrmex-control", category: "infrastructure", key: "myrmex-control" },
  ],
  "ai-services": [
    { id: "polyscop", category: "ai-services", key: "polyscop" },
    { id: "snablab", category: "ai-services", key: "snablab" },
    { id: "free-api-hunter", category: "ai-services", key: "free-api-hunter" },
    { id: "consilium", category: "ai-services", key: "consilium" },
    { id: "api-hub", category: "ai-services", key: "api-hub" },
    { id: "autoexpert", category: "ai-services", key: "autoexpert" },
    { id: "stenographer", category: "ai-services", key: "stenographer" },
    { id: "zprr-tracker", category: "ai-services", key: "zprr-tracker" },
    { id: "hype-pilot", category: "ai-services", key: "hype-pilot" },
    { id: "SNZK", category: "ai-services", key: "SNZK" },
  ],
  tools: [
    { id: "DoctorMandDesign", category: "tools", key: "DoctorMandDesign" },
    { id: "artifact-pulse", category: "tools", key: "artifact-pulse" },
    { id: "lab-playwright-expert", category: "tools", key: "lab-playwright-expert" },
    { id: "mcp-tools", category: "tools", key: "mcp-tools" },
    { id: "lab-memory", category: "tools", key: "lab-memory" },
  ],
};

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-light-muted dark:text-dark-muted">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const count = projects[cat.id]?.length ?? 0;
            return (
              <motion.a
                key={cat.id}
                href={`#projects-${cat.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl backdrop-blur-md bg-light-card/80 dark:bg-dark-card/80 border border-light-border dark:border-dark-border hover:border-light-accent dark:hover:border-dark-accent hover:shadow-lg hover:shadow-light-accent/10 dark:hover:shadow-dark-accent/10 hover:-translate-y-1 transition-all overflow-hidden"
              >
                {/* Gradient border animation */}
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-light-accent/0 via-light-accent/10 to-light-accent/0 dark:from-dark-accent/0 dark:via-dark-accent/10 dark:to-dark-accent/0 animate-gradient-border opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-light-accent/10 dark:bg-dark-accent/10 group-hover:bg-light-accent/20 dark:group-hover:bg-dark-accent/20 transition-colors">
                  <Icon size={24} className="text-light-accent dark:text-dark-accent" />
                </div>
                <span className="relative text-sm font-medium text-light-text dark:text-dark-text">
                  {t(`categories.${cat.id}`)}
                </span>
                <span className="relative text-xs text-light-muted dark:text-dark-muted">
                  {count}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Project grids per category */}
        {categories.map((cat) => (
          <div key={cat.id} id={`projects-${cat.id}`} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-light-accent to-blue-500 dark:from-dark-accent dark:to-purple-400" />
              <h3 className="font-heading text-2xl font-semibold text-light-text dark:text-dark-text">
                {t(`categories.${cat.id}`)}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(projects[cat.id] ?? []).map((proj, i) => {
                const ProjIcon = projectIcons[proj.id] || FileText;
                return (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <TiltCard className="group relative p-5 rounded-xl backdrop-blur-md bg-light-card/70 dark:bg-dark-card/70 border border-light-border dark:border-dark-border hover:border-light-accent/50 dark:hover:border-dark-accent/50 hover:shadow-lg hover:shadow-light-accent/10 dark:hover:shadow-dark-accent/10 transition-all overflow-hidden h-full">
                      {/* Hover glow */}
                      <span className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-light-accent/10 dark:bg-dark-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Animated gradient border bottom */}
                      <span className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-light-accent/50 dark:via-dark-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                      <div className="relative flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-light-accent/10 dark:bg-dark-accent/10 group-hover:bg-light-accent/20 dark:group-hover:bg-dark-accent/20 transition-colors">
                            <ProjIcon size={18} className="text-light-accent dark:text-dark-accent" />
                          </div>
                          <h4 className="font-medium text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                            {proj.id}
                          </h4>
                        </div>
                        <ChevronRight
                          size={16}
                          className="text-light-muted dark:text-dark-muted opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <p className="relative text-sm text-light-muted dark:text-dark-muted mt-3">
                        {t(`items.${proj.key}`)}
                      </p>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
