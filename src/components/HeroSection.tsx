import React from 'react';
import { Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';

const HeroSection = () => {
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
      {/* Background Music */}
      <audio ref={audioRef} loop muted>
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
      </audio>
      
      {/* Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
      >
        {isMusicPlaying ? (
          <Volume2 className="text-pink-600 group-hover:scale-110 transition-transform" size={24} />
        ) : (
          <VolumeX className="text-pink-600 group-hover:scale-110 transition-transform" size={24} />
        )}
      </button>
      
      {/* Floating hearts and sparkles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 opacity-30 animate-bounce"
            size={20 + i * 5}
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + i * 7}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-yellow-300 opacity-40 animate-pulse"
            size={12 + i * 2}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-6">
            Happy Girlfriend Day,
            <br />
            <span className="text-pink-600  animate-gradient-text">My Love <span className='font-bold'>Zahra</span></span>
            <Heart className="inline-block ml-4 text-red-500 animate-heartbeat" size={60} />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light italic">
            "Even miles apart, my heart is wrapped around you."
          </p>
        </div>
        
        <div className="mt-12 animate-float">
          <div className="inline-block p-2 bg-white/30 rounded-full backdrop-blur-sm animate-glow">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Scroll down for your surprises</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;