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
    image: "/lovable-uploads/0400d928-8429-43d1-a262-f811cebf2558.png" 
  },
  { 
    name: "Chia Yong Kang", 
    id: "1005121", 
    image: "/lovable-uploads/cd4ef521-36c4-4d82-b16e-89ba7093be90.png" 
  },
  { name: "Janessa Yang Jiajing", id: "1006086", image: "https://images.unsplash.com/photo-1438761696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop" },
  { name: "Tee Zhi Zhang", id: "1005136", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop" },
  { name: "Ryan Pey Jun Hao", id: "1006048", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop" },
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
