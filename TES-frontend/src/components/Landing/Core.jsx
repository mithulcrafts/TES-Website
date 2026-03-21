import React, { useEffect, useRef, useState } from "react";
import { aboutData } from "../../../constants";
import Tilt from "react-parallax-tilt";
import { Users, Target, Rocket } from "lucide-react";

const Core = () => {
  const icons = [Users, Target, Rocket];
  const accentColors = [
    "var(--color-sapphire)",
    "var(--color-lavender)",
    "var(--color-teal)",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full pb-20 overflow-hidden">
      {/* Section Heading with Letter Spacing Animation */}
      <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-main)] transition-all duration-1000 ${isVisible ? 'tracking-tight opacity-100' : 'tracking-[0.5em] opacity-0'}`}>
        Decoding <span className="text-[var(--color-sapphire)]">Our Core</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {aboutData.map((item, index) => {
          const Icon = icons[index % icons.length];
          const accentColor = accentColors[index % accentColors.length];

          return (
            <div
              key={index}
              className="transition-all duration-1000 transform"
              style={{
                transitionDelay: `${index * 200}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.9) translateY(30px)",
              }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={1500}
                className="flex justify-center"
              >
                {/* Main Card */}
                <div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl flex flex-col items-center text-center w-full min-h-[340px] overflow-hidden transition-all duration-500 hover:border-white/20">
                  
                  {/* 1. Animated Border Beam Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--color-sapphire)_50%,transparent_100%)] opacity-20" 
                         style={{ backgroundColor: accentColor }} />
                  </div>

                  {/* 2. Inner Spotlight (Mouse Follow simulation via group-hover) */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${accentColor}15 0%, transparent 70%)`
                    }}
                  />

                  {/* 3. Floating Icon with Pulse */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity" style={{ backgroundColor: accentColor }} />
                    <div 
                      className="relative w-16 h-16 flex items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                    >
                      <Icon className="w-8 h-8" style={{ color: accentColor }} />
                    </div>
                  </div>

                  {/* 4. Text Content */}
                  <h3 className="relative text-2xl font-bold text-[var(--color-text-main)] mb-4 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="relative text-[var(--color-text-muted)] text-sm leading-relaxed transition-colors duration-300 group-hover:text-[var(--color-text-main)]">
                    {item.desc}
                  </p>

                  {/* 5. Corner Accents (The Enigma Look) */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-white/20 transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-white/20 transition-all duration-500" />
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Core;