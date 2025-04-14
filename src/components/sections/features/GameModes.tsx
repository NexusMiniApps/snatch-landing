
import React, { useState } from 'react';
import { Medal, Ticket, UserRound } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";

interface GameModesProps {
  isVisible: boolean;
}

const GameModes: React.FC<GameModesProps> = ({ isVisible }) => {
  return (
    <div className={`mt-16 mb-16 transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h3 className="text-center text-snatch-pink font-fredoka text-3xl mb-10">Game Modes</h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        <GameModeCard 
          title="Skill Based"
          icon={<Medal className="text-snatch-darkpurple h-6 w-6" />}
          description="Test your reflexes and knowledge with fast-paced gaming challenges that reward the quickest and smartest players."
          tag="Most competitive"
          badge="High Engagement"
          gifUrl="https://i.imgur.com/8oIdKxm.gif"
        />
        
        <GameModeCard 
          title="Raffle"
          icon={<Ticket className="text-snatch-darkpurple h-6 w-6" />}
          description="Everyone gets a fair chance to win with our digital raffle system. More participation means more chances!"
          tag="Luck based"
          badge="Inclusive"
          gifUrl="/lovable-uploads/giveaway-gif.gif"
        />
        
        <GameModeCard 
          title="Host Chosen"
          icon={<UserRound className="text-snatch-darkpurple h-6 w-6" />}
          description="Put the power in the host's hands to select winners based on creativity, enthusiasm, or any criteria they choose."
          tag="Personalized"
          badge="Interactive"
          gifUrl="https://i.imgur.com/TVDFpl3.gif"
        />
      </div>
    </div>
  );
};

interface GameModeCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  tag: string;
  badge: string;
  gifUrl: string;
  isImgurEmbed?: boolean;
}

const GameModeCard: React.FC<GameModeCardProps> = ({ 
  title, 
  icon, 
  description, 
  tag, 
  badge, 
  gifUrl,
  isImgurEmbed = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl border border-snatch-pink/20 overflow-hidden group hover:border-snatch-pink/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]">
      <div className="h-48 relative overflow-hidden">
        <AspectRatio ratio={16/9} className="w-full h-full">
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-snatch-darkpurple/30">
              <div className="animate-pulse w-10 h-10 rounded-full bg-snatch-pink/40"></div>
            </div>
          )}
          
          {isImgurEmbed ? (
            <iframe 
              className="w-full h-full object-cover"
              src={`https://imgur.com/${gifUrl.replace('https://imgur.com/', '')}/embed?pub=true`}
              allowFullScreen
              onLoad={() => {
                console.log(`Imgur embed loaded successfully: ${gifUrl}`);
                setIsLoaded(true);
              }}
              onError={() => {
                console.error(`Failed to load Imgur embed: ${gifUrl}`);
                setHasError(true);
                setIsLoaded(false);
              }}
            />
          ) : (
            <img 
              src={gifUrl}
              alt={`${title} Game Mode`}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isLoaded && !hasError ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => {
                console.log(`GIF loaded successfully: ${gifUrl}`);
                setIsLoaded(true);
              }}
              onError={() => {
                console.error(`Failed to load GIF: ${gifUrl}`);
                setHasError(true);
                setIsLoaded(false);
              }}
            />
          )}
          
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-snatch-darkpurple/50 text-snatch-pink">
              <span className="text-sm">Image unavailable</span>
            </div>
          )}
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-snatch-darkpurple/90 via-snatch-darkpurple/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex items-center gap-3">
            <div className="bg-snatch-yellow/90 p-2 rounded-lg">
              {icon}
            </div>
            <h4 className="text-white font-fredoka text-xl">{title}</h4>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-white/90">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-snatch-yellow text-sm font-medium">{tag}</span>
          <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">{badge}</span>
        </div>
      </div>
    </div>
  );
};

export default GameModes;
