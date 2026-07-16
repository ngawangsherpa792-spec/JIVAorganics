import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#C9D4AA] py-8 px-4">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-3xl px-12 py-8 shadow-sm">
          <img 
            src="/assets/jiva-logo.png" 
            alt="Jiva Organics"
            className="h-32 w-auto"
          />
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-center text-5xl md:text-6xl font-bold text-[#4A5D3F] mb-12 px-4">
        Your Cow Ghee&apos;s Journey
      </h2>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Text Content */}
          <div className="relative text-center bg-[#E8EBD8] rounded-3xl p-8 md:p-12 shadow-lg w-full max-w-3xl">
            <div className="inline-block">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A5D3F] mb-2">GRASS FED</h3>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4A259]">COW GHEE</h3>
            </div>
            <div className="mt-6 md:mt-8 space-y-2">
              <p className="text-lg md:text-xl lg:text-2xl text-[#4A5D3F]">
                <span className="font-bold">Batch No.:</span> JO-GH-26716-12
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-[#4A5D3F]">
                <span className="font-bold">Volume:</span> 1 Litre, 500ml, 300ml
              </p>
            </div>
            
            {/* 11th Batch Badge */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <div className="bg-[#4A5D3F] text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl shadow-lg">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">11th Batch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;