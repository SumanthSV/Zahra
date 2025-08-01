import React, { useState } from 'react';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';

const reasons = [
  "Your laugh makes my whole day brighter",
  "The way you scrunch your nose when you're thinking",
  "How you remember the little things I tell you",
  "Your endless patience with my bad jokes",
  "The sparkle in your eyes when you're excited",
  "How you make ordinary moments feel magical",
  "Your kind heart that loves everyone",
  "The way you sing in the shower (even off-key)",
  "How you believe in me when I don't believe in myself",
  "Your adorable bedhead in the morning",
  "The way you get excited about small surprises",
  "How you make me want to be a better person",
  "Your terrible dance moves that I absolutely love",
  "The way you fall asleep during movies",
  "How you steal my hoodies and look amazing in them",
  "Your random 3 AM philosophical thoughts",
  "The way you comfort me when I'm stressed",
  "How you make every conversation interesting",
  "Your beautiful smile that lights up my screen",
  "The way you get passionate about things you love",
  "How you make me laugh until my stomach hurts",
  "Your sleepy voice in the morning calls",
  "The way you care about everyone around you",
  "How you remember my favorite everything",
  "Your determination to make our relationship work",
  "The way you text me good morning every day",
  "How you make distance feel like nothing",
  "Your incredible strength and independence",
  "The way you believe in our future together",
  "How you make me feel like the luckiest person alive",
  "Your cute habit of talking to yourself",
  "The way you get excited about food",
  "How you make every day an adventure",
  "Your beautiful heart that chose to love me",
  "The way you make me feel understood",
  "How you turn my worst days into the best ones",
  "Your amazing ability to multitask",
  "The way you get lost in books for hours",
  "How you make me want to share everything with you",
  "Your incredible cooking skills (even from photos)",
  "The way you worry about me eating enough",
  "How you make simple conversations feel deep",
  "Your beautiful mind that amazes me daily",
  "The way you make me feel safe and loved",
  "How you're my best friend and soulmate",
  "Your incredible strength in tough times",
  "The way you make me excited for tomorrow",
  "How you love me exactly as I am",
  "Your beautiful soul that completes mine",
  "The way you make forever feel not long enough"
];

const ReasonsILoveYou = () => {
  const [visibleReasons, setVisibleReasons] = useState(5);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  
  const flipCard = (index: number) => {
    setFlippedCards(prev => new Set([...prev, index]));
    // Play flip sound effect (placeholder)
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };
  
  const showMoreReasons = () => {
    setVisibleReasons(prev => Math.min(prev + 10, reasons.length));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="mx-auto text-red-500 mb-4 animate-pulse" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            50 Reasons I Love You
          </h2>
          <p className="text-xl text-gray-600">And countless more I discover every day</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.slice(0, visibleReasons).map((reason, index) => (
              <div
                key={index}
                onClick={() => flipCard(index)}
                className={`group relative h-32 cursor-pointer transition-all duration-700 transform-gpu perspective-1000 ${
                  flippedCards.has(index) ? 'animate-flip' : 'hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Card Front */}
                <div className={`absolute inset-0 w-full h-full rounded-lg shadow-lg transition-all duration-700 transform-gpu backface-hidden ${
                  flippedCards.has(index) ? 'rotate-y-180' : ''
                } bg-gradient-to-br from-pink-100 to-rose-100 border-2 border-pink-200`}>
                  <div className="flex items-center justify-center h-full p-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">
                        {index + 1}
                      </div>
                      <p className="text-pink-600 font-semibold">Click to reveal</p>
                      <Sparkles className="mx-auto mt-2 text-pink-400 animate-pulse" size={16} />
                    </div>
                  </div>
                </div>
                
                {/* Card Back */}
                <div className={`absolute inset-0 w-full h-full rounded-lg shadow-lg transition-all duration-700 transform-gpu backface-hidden rotate-y-180 ${
                  flippedCards.has(index) ? 'rotate-y-0' : ''
                } bg-gradient-to-br from-red-100 to-pink-100 border-2 border-red-200`}>
                  <div className="flex items-center justify-center h-full p-4">
                    <div className="text-center">
                      <Heart className="mx-auto mb-2 text-red-500" size={20} />
                      <p className="text-gray-700 text-sm leading-relaxed">{reason}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {visibleReasons < reasons.length && (
            <div className="text-center mt-12">
              <button
                onClick={showMoreReasons}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Show More Reasons
                <ChevronDown className="ml-2" size={20} />
              </button>
            </div>
          )}
          
          {visibleReasons >= reasons.length && (
            <div className="text-center mt-12 p-6 bg-gradient-to-r from-pink-100 to-red-100 rounded-lg">
              <Heart className="mx-auto text-red-500 mb-4" size={32} />
              <p className="text-lg text-gray-700 italic">
                And there are still infinite more reasons I discover about you every single day... ❤️
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;