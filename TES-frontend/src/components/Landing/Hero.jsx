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

      {/* Feature Cards */}
      <div className="mt-14 w-full max-w-6xl">
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
          {heroCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <Tilt
                key={index}
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                scale={1.01}
                className="rounded-2xl flex justify-center"
              >
                <div className="group p-6 rounded-2xl border border-[color:rgba(255,255,255,0.08)] bg-[color:rgba(255,255,255,0.03)] backdrop-blur-2xl flex flex-col items-center text-center w-[28vw] h-30 max-w-sm min-h-[210px] transition duration-300 hover:border-[var(--color-sapphire)]/40 hover:bg-[color:rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(116,199,236,0.15)] ">
                  
                  {/* Icon */}
                  <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-[color:rgba(255,255,255,0.05)] border border-[color:rgba(255,255,255,0.08)] group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 text-[var(--color-sapphire)]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text-main)] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed hidden sm:block">
                    {item.desc}
                  </p>

                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
      
    </div>
  )
}

export default Hero;