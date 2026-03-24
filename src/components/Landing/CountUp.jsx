import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  
  // Extract number and suffix (e.g., "1700+" -> number: 1700, suffix: "+")
  const numericValue = parseInt(endValue.replace(/[^0-9]/g, ''), 10);
  const suffix = endValue.replace(/[0-9]/g, '');

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for a smooth finish (Power2.easeOut)
      const easeProgress = 1 - Math.pow(1 - progress, 2);
      
      const currentCount = Math.floor(easeProgress * numericValue);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Use Intersection Observer to start animation only when visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animationFrame = requestAnimationFrame(animate);
      }
    }, { threshold: 0.1 });

    if (countRef.current) observer.observe(countRef.current);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [numericValue, duration]);

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};

export default CountUp;