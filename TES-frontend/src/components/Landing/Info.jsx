import React, { useEffect, useRef, useState } from 'react';
import Tilt from "react-parallax-tilt";
import { contributions, pillars } from '../../../constants';
import { ChevronRight } from 'lucide-react';

const Info = () => {
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
    <div ref={sectionRef} className="w-full max-w-6xl mx-auto px-6 py-20 overflow-hidden">
      
      {/* Header Section */}
      <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-main)] mb-4">
          Empowering a <span className="text-[var(--color-sapphire)]">New Tech Culture</span>
        </h2>
        <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg">
          TES is ABV-IIITM Gwalior's tech hub for discussions, guidance, peer learning, and building a strong culture across all domains.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {pillars.map((pillar, idx) => (
          <div 
            key={idx} 
            className="transition-all duration-700 transform"
            style={{ 
              transitionDelay: `${idx * 200}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="h-full">
              <div className="h-full p-8 rounded-2xl border border-[color:rgba(255,255,255,0.08)] bg-[color:rgba(255,255,255,0.02)] backdrop-blur-xl hover:bg-[color:rgba(255,255,255,0.04)] transition-all">
                <pillar.icon className="w-10 h-10 mb-6" style={{ color: pillar.color }} />
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-3">{pillar.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      {/* Contribution Section */}
      <div 
        className={`rounded-3xl border border-[color:rgba(255,255,255,0.08)] bg-[color:rgba(255,255,255,0.01)] p-8 md:p-12 transition-all duration-1000 delay-500 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <h3 className="text-2xl font-bold text-center mb-12 text-[var(--color-text-main)]">
          How to <span className="text-[var(--color-teal)]">Contribute</span>
        </h3>
        
        <div className="grid md:grid-cols-3 gap-12">
          {contributions.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center group transition-all duration-700"
              style={{ 
                transitionDelay: `${(idx * 150) + 800}ms`,
                opacity: isVisible ? 1 : 0 
              }}
            >
              <div className="w-12 h-12 rounded-full bg-[color:rgba(255,255,255,0.05)] border border-[color:rgba(255,255,255,0.1)] flex items-center justify-center mb-4 group-hover:border-[var(--color-teal)]/50 transition-colors">
                <item.icon className="w-5 h-5 text-[var(--color-teal)]" />
              </div>
              <h4 className="font-bold text-[var(--color-text-main)] mb-2">{item.label}</h4>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[color:rgba(255,255,255,0.05)] text-center">
          <p className="animate-pulse text-[var(--color-sapphire)] font-mono text-sm tracking-widest flex items-center justify-center gap-2">
            SEE YOU AT THE TOP <ChevronRight className="w-4 h-4" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;