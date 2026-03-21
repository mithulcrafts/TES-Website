import React from 'react';
import { Terminal, Cpu, Globe, Layout, Share2 } from "lucide-react";

const DOMAINS = [
  {
    title: "Web & App Dev",
    description: "Building scalable, modern interfaces using React, Next.js, and Flutter. We focus on performance and seamless user journeys.",
    icon: <Globe className="w-6 h-6 text-[var(--color-sapphire)]" />,
    className: "md:col-span-2 md:row-span-1",
    accent: "var(--color-sapphire)"
  },
  {
    title: "CP & DSA",
    description: "Mastering logic and optimization for high-level problem solving and competitive coding.",
    icon: <Terminal className="w-6 h-6 text-[var(--color-teal)]" />,
    className: "md:col-span-1 md:row-span-1",
    accent: "var(--color-teal)"
  },
  {
    title: "AI & Data Science",
    description: "Training intelligent models and deriving insights from complex datasets to solve real-world problems.",
    icon: <Cpu className="w-6 h-6 text-[var(--color-lavender)]" />,
    className: "md:col-span-1 md:row-span-1",
    accent: "var(--color-lavender)"
  },
  {
    title: "Open Source & Security",
    description: "Collaborating on global projects, building tools of tomorrow, and securing the digital frontier.",
    icon: <Share2 className="w-6 h-6 text-[var(--color-flamingo)]" />,
    className: "md:col-span-2 md:row-span-1",
    accent: "var(--color-flamingo)"
  }
];

const BentoGrid = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 font-sans">
      {/* Header aligned with your Hero style */}
      <div className="flex flex-col items-start">
        <h2 className="text-3xl font-bold text-[var(--color-text-main)] tracking-tight">
          Explore our <span className="text-[var(--color-teal)]">Domains</span>
        </h2>
        <p className="text-[var(--color-text-muted)] text-sm md:text-base max-w-xl">
          From competitive programming to open source, TES covers the entire spectrum of engineering at ABV-IIITM.
        </p>
      </div>

      {/* Grid: Uses min-height to ensure no gaps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {DOMAINS.map((domain, index) => (
          <div
            key={index}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all duration-500 hover:border-[${domain.accent}]/40 ${domain.className}`}
          >
            {/* Ambient Glow */}
            <div 
              className="absolute -right-12 -top-12 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full"
              style={{ backgroundColor: domain.accent }}
            />

            <div className="relative z-10 space-y-6">
              <div className="p-3 rounded-xl bg-white/5 w-fit border border-white/5">
                {domain.icon}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-[var(--color-text-main)] font-bold text-xl tracking-tight">
                  {domain.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {domain.description}
                </p>
              </div>
            </div>

            {/* Subtle bottom indicator */}
            <div 
              className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
              style={{ backgroundColor: domain.accent }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;