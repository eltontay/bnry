'use client'

import React, { useState, useEffect } from 'react';

const bubbleData = [
  { name: 'indosat', size: 120 }, // Specify the desired size for each bubble
  { name: 'plugg', size: 120 },
  { name: 'fando', size: 120 },
  { name: 'kindred', size: 120 },
  { name: 'celcomdigi', size: 120 },
];

const DynamicBubblesBackground = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {bubbleData.map((bubble, index) => {
        const translateY = offsetY * (0.1 + index * 0.05); // Different speed for parallax
        return (
          <div
            key={bubble.name}
            className={`absolute rounded-full bg-cover bg-center z-0 bg-black`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              backgroundImage: `url('/path/to/${bubble.name}.png')`, // Path to your bubble image
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${translateY}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default DynamicBubblesBackground;
