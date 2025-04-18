import React, { useRef, useState, useEffect } from 'react';

const teamMembers = [
  { 
    name: "Lim Sheng Xiang", 
    id: "1005005", 
    image: "/lovable-uploads/f336beb8-bf00-4383-ac8f-dafd73d842a0.png" 
  },
  { 
    name: "Joseph Low", 
    id: "1005013", 
    image: "/lovable-uploads/0d636b5b-b552-4f11-aa7e-3662ee4345f5.png" 
  },
  { 
    name: "Chia Yong Kang", 
    id: "1005121", 
    image: "/lovable-uploads/cd4ef521-36c4-4d82-b16e-89ba7093be90.png" 
  },
  { 
    name: "Janessa Yang Jiajing", 
    id: "1006086", 
    image: "/lovable-uploads/b76333a9-11a9-4f48-9913-d5701644862f.png" 
  },
  { name: "Tee Zhi Zhang", id: "1005136", image: "/lovable-uploads/da6dce3c-1a74-48ce-ac34-42597854d5bc.png" },
  { name: "Ryan Pey Jun Hao", id: "1006048", image: "/lovable-uploads/0f0d671b-bb5e-457f-9c58-22536a3485ac.png" },
];

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="relative py-20 px-4"
    >
      <div className="wavy-divider absolute top-0 left-0 w-full"></div>
      
      <div className="container mx-auto max-w-6xl">
        <h2 className={`section-title transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Meet the Party Planners
        </h2>
        
        <div className={`mb-10 max-w-3xl mx-auto text-center transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-white text-lg">
            We're a crew of SUTD innovators:
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-snatch-purple/20 text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-snatch-pink/30">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-white font-bold mb-1">{member.name}</h3>
              <p className="text-white/70 text-sm">{member.id}</p>
            </div>
          ))}
        </div>
        
        <div className={`mt-10 text-center transition-all duration-700 delay-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-white italic">
            Tech and design wizards making launches legendary!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
