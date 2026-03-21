import React from 'react'
import TextType from '../TextType';
import Tilt from 'react-parallax-tilt';
import CountUp from './CountUp';
import { heroCards,heroCounts } from '../../../constants';
const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className="relative group text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
  {/* The main text with a clean gradient */}
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-[var(--color-text-main)] to-[var(--color-text-muted)]">
    The Enigma Society
  </span>
  
  {/* The "Glow" layer - slightly blurred behind the text */}
  <span className="absolute inset-0 blur-2xl bg-[var(--color-sapphire)] opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></span>
  
</h1>

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

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-10 mt-6 w-full gap-x-20  max-w-5xl justify-center ">
          {heroCounts.map((item, index) => (
        <div key={index} className=" flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-sapphire)]">
            <CountUp endValue={item.value} duration={2500} />
          </h2>
          <p className="text-sm mt-2 text-[var(--color-text-muted)]">
            {item.label}
          </p>
        </div>
      ))}
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

export default Hero