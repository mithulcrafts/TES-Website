import React, { useEffect, useRef, useState } from 'react';
import { Megaphone, Hourglass } from "lucide-react";

const Announcements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 } // Triggers when 20% of the component is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-4xl mx-auto px-6 py-6 overflow-hidden">
      
      {/* Section Header */}
      <div 
        className={`flex items-center justify-center gap-3 mb-8 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <Megaphone className="w-6 h-6 text-[var(--color-sapphire)]" />
        <h2 className="text-3xl font-bold text-[var(--color-text-main)] tracking-tight">
          Latest <span className="text-[var(--color-sapphire)]">Announcements</span>
        </h2>
      </div>

      {/* "Coming Soon" Announcement Card */}
      <div 
        className={`relative group overflow-hidden rounded-2xl border border-[color:rgba(255,255,255,0.08)] bg-[color:rgba(255,255,255,0.03)] backdrop-blur-2xl p-8 flex flex-col items-center text-center transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } hover:border-[var(--color-sapphire)]/30 hover:shadow-[0_0_40px_rgba(116,199,236,0.1)]`}
      >
        
        {/* Glowing Background Effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[var(--color-sapphire)] opacity-5 blur-[80px] group-hover:opacity-15 transition-opacity duration-500" />

        
        

        {/* Text Content */}
        <h3 className="text-2xl font-semibold text-[var(--color-text-main)] mb-2 group-hover:text-[var(--color-sapphire)] transition-colors duration-300">
          Coming Soon
        </h3>
        

        
        

        {/* Decorative scan line animation */}
        <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-sapphire)]/20 to-transparent -translate-y-full group-hover:animate-[scan_2s_linear_infinite]" />
      </div>
    </div>
  );
};

export default Announcements;