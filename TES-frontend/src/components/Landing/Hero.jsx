import React, { useState, useEffect } from 'react';
import TextType from '../TextType';
import Tilt from 'react-parallax-tilt';
import CountUp from './CountUp';
import { heroCards, heroCounts } from '../../../constants';

// Moved outside the component so it doesn't re-create on every single render
const logoColors = [
  'var(--color-text-main)', 
  'var(--color-lavender)',
  'var(--color-sapphire)',
  'var(--color-teal)',
  'var(--color-flamingo)'
];

const Hero = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // The timer effect that cycles colors when hovering
  useEffect(() => {
    let intervalId;
    
    if (isHovered) {
      // Change color every 800ms to match the 700ms CSS transition smoothly
      intervalId = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % logoColors.length);
      }, 400);
    }

    // Cleanup function: stops the timer when you unhover or if the component unmounts
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovered]);

  return (
    <div className='flex flex-col items-center justify-center'>
      
      {/* Hoverable Logo Wrapper
        Added onMouseEnter and onMouseLeave to trigger the auto-cycle 
      */}
      <div 
        className="relative group mb-6 flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Masking Div: Added transition-all and group-hover:scale-105 for the zoom effect */}
        <div 
          className="w-64 h-24 md:w-80 md:h-32 transition-all duration-700 ease-in-out group-hover:scale-105"
          style={{
            backgroundColor: logoColors[colorIndex],
            WebkitMaskImage: "url('/teslogo-nobg-text-white.png')",
            maskImage: "url('/teslogo-nobg-text-white.png')",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center"
          }}
        />
        
        {/* Dynamic Glow Layer: Also added scale so the glow grows with the logo */}
        <div 
          className="absolute inset-0 blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700 -z-10 group-hover:scale-105"
          style={{ backgroundColor: logoColors[colorIndex] }}
        ></div>
      </div>

      {/* Typing Text */}
      <div className="text-2xl md:text-3xl my-6 text-[var(--color-text-muted)]">
        <TextType 
          text={["A place where CODERS", "learn and collaborate"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={40}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
        />
      </div>

      <div>
        
      </div>
      {/* Club Description - High Visibility & ABV-IIITM Branded */}
      <div className="max-w-6xl px-6 text-center mt-6">
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-[var(--color-sapphire)]/40 to-transparent">
          {/* Using var(--color-surface) for the background as per your CSS */}
          <div className="bg-[var(--color-surface)]/90 backdrop-blur-2xl p-8 rounded-2xl border border-white/5 shadow-2xl space-y-8">
            
            {/* Header with Flamingo accent for the College name */}
            <h2 className="text-[var(--color-text-main)] text-xl md:text-2xl font-semibold tracking-tight leading-snug">
              TES is the official tech hub of <span className="text-[var(--color-flamingo)] font-bold">ABV-IIITM</span>, 
              fostering a culture of <span style={{ color: logoColors[colorIndex], transition: 'color 0.7s' }}>innovation and peer learning</span>.
            </h2>

            {/* Feature Grid with Lavender and Teal accents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-base leading-relaxed">
              
              <div className="text-left border-l-2 border-[var(--color-sapphire)] pl-6">
                <span className="block text-[var(--color-lavender)] font-bold mb-2 uppercase tracking-widest text-xs">
                  Accelerate Growth
                </span>
                <p className="text-[var(--color-text-main)] leading-relaxed">
                  Learn from seniors, avoid common mistakes, and 
                  <span className="text-white font-semibold ml-1 underline decoration-[var(--color-sapphire)]/30 underline-offset-4">
                    collaborate on real-world projects
                  </span> 
                  with the ABV-IIITM community.
                </p>
              </div>
              
              <div className="text-left border-l-2 border-[var(--color-teal)] pl-6">
                <span className="block text-[var(--color-teal)] font-bold mb-2 uppercase tracking-widest text-xs">
                  Contribute & Get Featured
                </span>
                <p className="text-[var(--color-text-main)] leading-relaxed">
                  Share knowledge, solve doubts, or create content. Get 
                  <span className="text-white font-semibold ml-1 underline decoration-[var(--color-teal)]/30 underline-offset-4">
                    recognized and featured
                  </span> 
                  across our college platforms.
                </p>
              </div>

            </div>

            {/* Bottom Mantra with animated color cycle */}
            <div className="pt-4 flex items-center justify-center gap-6">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[var(--color-text-muted)]/30" />
              <p 
                className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-black transition-colors duration-700 whitespace-nowrap"
                style={{ color: logoColors[colorIndex] }}
              >
                Transparent • Unbiased • Community First
              </p>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[var(--color-text-muted)]/30" />
            </div>
            
          </div>
        </div>
      </div>
       
      </div>
      
    
  )
}

export default Hero;