import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions = useMemo(() => ({
    fpsLimit: 120,
    particles: {
      number: { value: 100, density: { enable: true } },
      color: { 
        value: [
          "#B4BEFE", // Lavender
          "#74C7EC", // Sapphire
          "#94E2D5", // Teal
          "#F2CDCD", // Flamingo
          "#A6ADC8"  // Muted Gray (from previous setup)
        ] 
      },
      shape: { type: "circle" },
      opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 1 } },
      
      // Increased from { min: 1, max: 2 } to make them slightly more visible
      size: { value: { min: 1.5, max: 3 } }, 
      
      move: { enable: true, speed: 0.5, random: true, outModes: { default: "out" } },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <Particles 
      id="tsparticles" 
      className="absolute inset-0 z-0 pointer-events-none" 
      options={particlesOptions} 
    />
  );
}