import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const JourneyStep = ({ title, date, location, description, image, imagePosition = 'left', showLine = true }) => {
  return (
    <div className="relative">
      {showLine && (
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#5C6247] opacity-30 transform -translate-x-1/2"></div>
      )}
      
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 relative z-10 ${
        imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
      }`}>
        {/* Image */}
        <div className={imagePosition === 'right' ? 'lg:col-start-2' : ''}>
          <img 
            src={image}
            alt={title}
            className="w-full h-72 object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className={imagePosition === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}>
          <h3 className="text-4xl font-bold text-[#5C6247] mb-6">{title}</h3>
          
          {date && (
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-[#D4A259]" />
              <p className="text-lg text-[#5C6247]">{date}</p>
            </div>
          )}
          
          {location && (
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#D4A259]" />
              <p className="text-lg text-[#5C6247]">{location}</p>
            </div>
          )}
          
          {description && (
            <p className="text-lg text-[#5C6247] opacity-80">{description}</p>
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
      image: 'https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxjb3clMjBncmF6aW5nfGVufDB8fHx8MTc4Mzc4NzExN3ww&ixlib=rb-4.1.0&q=85',
      imagePosition: 'left'
    },
    {
      title: 'Cow Milk Collection',
      date: 'May 3, 2026 - May 8, 2026',
      location: 'Village Farm: Ranitar Chakrumba, Panchthar Nepal',
      description: 'Milk Producers: Chakramba Farmers',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxtaWxrJTIwY29sbGVjdGlvbnxlbnwwfHx8fDE3ODM3ODcxMTd8MA&ixlib=rb-4.1.0&q=85',
      imagePosition: 'right'
    },
    {
      title: 'Nauni (Raw Butter) Preparation',
      date: 'May 3, 2026 - May 8, 2026',
      location: 'Ranitar Chakrumba, Panchthar Nepal',
      description: 'Nauni Producer: Mr. Biren Nembang',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBtYWtpbmd8ZW58MHx8fHwxNzgzNzg3MTE2fDA&ixlib=rb-4.1.0&q=85',
      imagePosition: 'left'
    }
  ];

  return (
    <div className="bg-[#C9D4AA] py-16 px-4">
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