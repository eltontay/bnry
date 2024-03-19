'use client'

import DynamicBubblesBackground from './DynamicBubblesBackground';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <DynamicBubblesBackground />
      {/* Rest of the hero content */}
      <h1 className="z-10 text-5xl font-bold mb-4">$BNRY Unleashing Decentralized Possibilities</h1>
      <p className="z-10 mb-6 max-w-lg mx-auto">Welcome to the heart of innovation — The $TBHC Token. Embark on a journey into a new era of decentralized connectivity within The Binary Holdings ecosystem.</p>
      <button className="z-10 bg-white text-black py-2 px-6 rounded-full font-semibold">Learn More</button>
    </div>
  );
};

export default HeroSection;
