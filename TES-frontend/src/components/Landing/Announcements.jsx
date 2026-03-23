import React, { useEffect, useRef, useState } from 'react';
import { Megaphone, ExternalLink, PenLine } from "lucide-react";

/**
 * REUSABLE DATA
 * Update this object to change the content across the site.
 */
const ANNOUNCEMENT_CONTENT = {
  badge: "Blogging Event",
  title: "Tech Lekhan",
  description: "An online tech blogging event to give your ideas a platform. Write an original blog on any tech topic and get a chance to be featured on our official Medium page. From code to AI, startups to cybersecurity—if it's tech, your voice matters.",
  links: [
    { label: "Register Here", url: "https://forms.gle/QkzT3Bcsaukr5Lib6", isPrimary: true },
    { label: "Refer Rules", url: "https://robust-calcium-ce6.notion.site/Tech-Lekhan-2f53e328d0a4807481ffe287fcc92460", isPrimary: false },
    { label: "Official Medium", url: "https://medium.com/@tes.abviiitm", isPrimary: false },
  ]
};

const Announcements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full max-w-5xl mx-auto px-6 py-24 font-sans"
    >
      {/* Header aligned with Geist Variable tracking */}
      <div className={`flex items-center gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-4'}`}>
        <div className="w-8 h-[2px] bg-[var(--color-sapphire)]" />
        <h2 className="text-3xl font-bold text-[var(--color-text-main)] tracking-tight flex items-center gap-3">
          Latest <span className="text-[var(--color-sapphire)]">Announcements</span>
          <Megaphone className="w-6 h-6 text-[var(--color-sapphire)] opacity-40" />
        </h2>
      </div>

      {/* Main Card: Uses --color-surface and --color-border from your theme */}
      <div 
        className={`relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } hover:border-[var(--color-sapphire)]/40 hover:shadow-[0_0_50px_rgba(116,199,236,0.03)]`}
      >
        {/* Event Badge */}
        <div className="mb-6 flex">
          <span className="px-3 py-1 rounded-md bg-[var(--color-sapphire)]/10 text-[var(--color-sapphire)] text-[10px] font-bold uppercase tracking-[0.2em] border border-[var(--color-sapphire)]/20">
            {ANNOUNCEMENT_CONTENT.badge}
          </span>
        </div>

        <div className="space-y-6">
          {/* Title with Teal Accent Icon */}
          <h3 className="text-2xl md:text-4xl font-bold text-[var(--color-text-main)] flex items-center gap-3 tracking-tighter">
            {ANNOUNCEMENT_CONTENT.title} 
            <PenLine className="w-6 h-6 text-[var(--color-teal)] opacity-60" />
          </h3>
          
          {/* Description: High visibility using Text-Main with adjusted opacity */}
          {/* Description: Perfectly aligned and high visibility */}
          <p className="text-[var(--color-text-main)] text-left text-sm  lg:text-lg leading-relaxed font-normal max-w-3xl opacity-85">
            {ANNOUNCEMENT_CONTENT.description}
          </p>

          {/* Links Grid */}
          <div className="pt-8 flex flex-wrap gap-x-12 gap-y-4 border-t border-[var(--color-border)] mt-10">
            {ANNOUNCEMENT_CONTENT.links.map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank" 
                rel="noreferrer"
                className={`flex items-center gap-2 text-sm font-semibold transition-all group/link underline-offset-8 hover:underline ${
                  link.isPrimary 
                    ? 'text-[var(--color-sapphire)] hover:text-[var(--color-teal)]' 
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
                }`}
              >
                {link.label} 
                <ExternalLink className="w-4 h-4 opacity-40 group-hover/link:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Ambient Glow matching Sapphire accent */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-sapphire)] opacity-[0.03] blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
};

export default Announcements;