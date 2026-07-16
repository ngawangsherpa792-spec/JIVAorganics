import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const ProcessingSection = () => {
  return (
    <div className="bg-[#C9D4AA] py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Processing Section */}
        <div className="relative mb-16 md:mb-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#4A5D3F] opacity-20 transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#4A5D3F] mb-4 md:mb-6">Processing into Pure Cow Ghee</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-[#D4A259]" />
                <p className="text-base md:text-lg text-[#4A5D3F]">July 16, 2026</p>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#D4A259] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base md:text-lg text-[#4A5D3F] font-semibold">Location:</p>
                  <p className="text-base md:text-lg text-[#4A5D3F]">Jiva Organics office</p>
                  <p className="text-base md:text-lg text-[#4A5D3F]">Tikhedewal, Lalitpur</p>
                </div>
              </div>
            </div>

            {/* Right Image - User's Bottle */}
            <div className="flex justify-center items-center">
              <img 
                src="/assets/ghee-bottle.jpg"
                alt="Jiva Organics Grass Fed Cow Ghee"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Packaging Section */}
        <div className="relative mb-16 md:mb-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#4A5D3F] opacity-20 transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            {/* Left Image */}
            <div>
              <img 
                src="https://cup-com.my.canva.site/jiva-organics/_assets/media/8b8f95ed726771e4573dab0061105d17.png"
                alt="Packaging"
                className="w-full h-64 md:h-80 object-contain rounded-3xl shadow-lg bg-white p-4"
              />
            </div>

            {/* Right Content */}
            <div className="px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#4A5D3F] mb-4 md:mb-6">Packaging</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-[#D4A259]" />
                 <p className="text-base md:text-lg text-[#4A5D3F]">July 16, 2026</p>
              </div>
              
              <div className="flex items-start gap-2 mb-6">
                <MapPin className="w-5 h-5 text-[#D4A259] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base md:text-lg text-[#4A5D3F] font-semibold">Location:</p>
                  <p className="text-base md:text-lg text-[#4A5D3F]">Jiva Organics office</p>
                  <p className="text-base md:text-lg text-[#4A5D3F]">Tikhedewal, Lalitpur</p>
                </div>
              </div>

              <p className="text-xl md:text-2xl font-semibold text-[#D4A259]">Freshly delivered to you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingSection;