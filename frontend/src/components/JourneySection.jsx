import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const JourneyStep = ({ title, date, location, description, image, imagePosition = 'left', showLine = true }) => {
  return (
    <div className="relative">
      {showLine && (
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#4A5D3F] opacity-20 transform -translate-x-1/2 hidden lg:block"></div>
      )}
      
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 relative z-10 ${
        imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
      }`}>
        {/* Image */}
        <div className={imagePosition === 'right' ? 'lg:col-start-2' : ''}>
          <img 
            src={image}
            alt={title}
            className="w-full h-64 md:h-80 object-contain rounded-3xl shadow-lg bg-white p-4"
          />
        </div>

        {/* Content */}
        <div className={`px-4 ${imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-[#4A5D3F] mb-4 md:mb-6">{title}</h3>
          
          {date && (
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-[#D4A259]" />
              <p className="text-base md:text-lg text-[#4A5D3F]">{date}</p>
            </div>
          )}
          
          {location && (
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#D4A259]" />
              <p className="text-base md:text-lg text-[#4A5D3F]">{location}</p>
            </div>
          )}
          
          {description && (
            <p className="text-base md:text-lg text-[#4A5D3F] opacity-80">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const JourneySection = () => {
  const journeySteps = [
    {
      title: '11th Batch',
      description: 'Naturally grass & plant-fed cows raised by local farmers',
      image: 'https://cup-com.my.canva.site/jiva-organics/_assets/media/b89548f5a7e83bdc56b286d8e79cb280.png',
      imagePosition: 'left'
    },
    {
      title: 'Cow Milk Collection',
      date: 'July 1 to July 12',
      location: 'Village Farm: Ranitar Chakrumba, Panchthar Nepal',
      description: 'Milk Producers: Chakramba Farmers',
      image: 'https://cup-com.my.canva.site/jiva-organics/_assets/media/8cf485661789c31d86c0e8fe12d7477a.png',
      imagePosition: 'right'
    },
    {
      title: 'Nauni (Raw Butter) Preparation',
      date: 'July 1 to July 12',
      location: 'Ranitar Chakrumba, Panchthar Nepal',
      description: 'Nauni Producer: Mr. Biren Nembang',
      image: 'https://cup-com.my.canva.site/jiva-organics/_assets/media/e58dbc734d0bf5d6639806f76d8d09d6.png',
      imagePosition: 'left'
    }
  ];

  return (
    <div className="bg-[#C9D4AA] py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {journeySteps.map((step, index) => (
          <JourneyStep
            key={index}
            {...step}
            showLine={index < journeySteps.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneySection;