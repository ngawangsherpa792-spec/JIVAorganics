import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#C9D4AA] py-8 px-4">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-2xl px-12 py-6 shadow-sm">
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#4A7C59"/>
              <path d="M16 8C18 8 19 10 19 12C19 14 17 16 16 18C15 16 13 14 13 12C13 10 14 8 16 8Z" fill="#7CB342"/>
              <ellipse cx="16" cy="19" rx="3" ry="1.5" fill="#7CB342"/>
            </svg>
            <div>
              <h1 className="text-2xl font-serif italic text-gray-800 leading-none">Jiva</h1>
              <p className="text-xs tracking-widest text-gray-600 leading-none mt-0.5">ORGANICS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-center text-5xl font-bold text-[#5C6247] mb-12">
        Your Cow Ghee&apos;s Journey
      </h2>

      {/* Hero Card */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#F5F3E8] rounded-3xl p-12 shadow-lg relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="relative">
              <div className="border-l-4 border-[#5C6247] pl-6">
                <h3 className="text-5xl font-bold text-[#5C6247] mb-2">GRASS FED</h3>
                <h3 className="text-5xl font-bold text-[#D4A259]">COW GHEE</h3>
              </div>
              <div className="mt-8 space-y-2">
                <p className="text-lg text-[#5C6247]">
                  <span className="font-semibold">Batch No.:</span> JO-GH-26518-08
                </p>
                <p className="text-lg text-[#5C6247]">
                  <span className="font-semibold">Volume:</span> 1 Ltre, 500ml, 300ml
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-end items-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-8 py-3 shadow-md z-10">
                <p className="text-2xl font-bold text-[#5C6247]">11th</p>
                <p className="text-xl font-semibold text-[#5C6247]">Batch</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxnaGVlfGVufDB8fHx8MTc4Mzc4NzEyM3ww&ixlib=rb-4.1.0&q=85"
                alt="Cow Ghee"
                className="w-72 h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;