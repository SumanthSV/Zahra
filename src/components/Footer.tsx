import React, { useState } from 'react';
import { Heart, Send, Sparkles } from 'lucide-react';

const Footer = () => {
  const [showHugMessage, setShowHugMessage] = useState(false);
  const [hugAnimation, setHugAnimation] = useState(false);

  const sendHug = () => {
    setShowHugMessage(true);
    setHugAnimation(true);
    
    // Vibrate if supported
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200]);
    }
    
    // Reset animations
    setTimeout(() => setShowHugMessage(false), 3000);
    setTimeout(() => setHugAnimation(false), 2000);
  };

  return (
    <footer className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-16 relative overflow-hidden">
      {/* Heart particles animation */}
      {hugAnimation && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-300 animate-float-up"
              size={20 + Math.random() * 20}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + Math.random()}s`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Background sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-white opacity-20 animate-twinkle"
            size={8 + i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Heart className="mx-auto mb-6 animate-heartbeat" size={48} />
        
        <blockquote className="text-2xl md:text-3xl font-serif italic mb-8">
          "Distance gives us a reason to love harder."
        </blockquote>
        
        <div className="mb-8">
          <p className="text-lg mb-4">
            This website was made with endless love and countless cups of coffee ☕
          </p>
          <p className="text-sm opacity-75">
            Every pixel, every word, every animation was crafted thinking of your smile ❤️
          </p>
        </div>
        
        {/* Hug Button */}
        <div className="relative">
          <button
            onClick={sendHug}
            className="group px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <Send className="inline mr-2 group-hover:animate-pulse" size={20} />
            Send me a hug 💌
          </button>
          
          {/* Floating Hug Message */}
          {showHugMessage && (
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white text-purple-600 px-6 py-3 rounded-lg shadow-lg animate-bounce z-10">
              <p className="font-bold">🤗 Just like that, you're in my arms ❤️</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;