import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const ProcessingSection = () => {
  return (
    <div className="bg-[#C9D4AA] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Processing Section with User's Bottle Image */}
        <div className="relative mb-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#5C6247] opacity-30 transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div>
              <h3 className="text-4xl font-bold text-[#5C6247] mb-6">Processing into Pure Cow Ghee</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-[#D4A259]" />
                <p className="text-lg text-[#5C6247]">May 18, 2026</p>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D4A259]" />
                <p className="text-lg text-[#5C6247]">Jiva Organics office, Tikhedewal, Lalitpur</p>
              </div>
            </div>

            {/* Right Image - User's Provided Bottle Image */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <img 
                  src="/assets/ghee-bottle.jpg"
                  alt="Jiva Organics Grass Fed Cow Ghee"
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Packaging Section */}
        <div className="relative mb-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#5C6247] opacity-30 transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Image */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1618080206739-14e8ac105472?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxkYWlyeSUyMGZhcm18ZW58MHx8fHwxNzgzNzg3MTMyfDA&ixlib=rb-4.1.0&q=85"
                alt="Packaging"
                className="w-full h-72 object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div>
              <h3 className="text-4xl font-bold text-[#5C6247] mb-6">Packaging</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-[#D4A259]" />
                <p className="text-lg text-[#5C6247]">May 19, 2026</p>
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-[#D4A259]" />
                <p className="text-lg text-[#5C6247]">Jiva Organics office, Tikhedewal, Lalitpur</p>
              </div>

              <p className="text-2xl font-semibold text-[#D4A259]">Freshly delivered to you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingSection;