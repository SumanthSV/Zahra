import React, { useState } from 'react';
import { Gift, Music, Download, Clock, Heart } from 'lucide-react';

const HiddenSurprise = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState('playlist');

  const revealSurprise = () => {
    setIsRevealed(true);
  };

  const calculateTimeUntilMeet = () => {
    // Example date - user can edit this
    const meetDate = new Date('2024-12-25'); // Christmas as example
    const now = new Date();
    const timeDiff = meetDate.getTime() - now.getTime();
    
    if (timeDiff <= 0) {
      return "We're together! 🎉";
    }
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return `${days} days and ${hours} hours`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Gift className="mx-auto text-purple-500 mb-4" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Special Surprise Just For You
          </h2>
          <p className="text-xl text-gray-600">Click the button to reveal your gifts</p>
        </div>
        
        {!isRevealed ? (
          <div className="text-center">
            <button
              onClick={revealSurprise}
              className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-xl font-bold rounded-full hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-500 transform hover:scale-110 shadow-2xl animate-pulse overflow-hidden"
            >
              {/* Sparkle animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                    style={{
                      left: `${10 + i * 10}%`,
                      top: `${20 + (i % 3) * 20}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              <Gift className="inline mr-3 group-hover:animate-bounce" size={24} />
              Click for Your Surprise!
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <p className="mt-6 text-gray-500 italic">I promise it's worth the click! 💕</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden animate-scale-in">
            {/* Tab Navigation */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('playlist')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'playlist' 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Music className="inline mr-2" size={20} />
                Our Playlist
              </button>
              <button
                onClick={() => setActiveTab('wallpaper')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'wallpaper' 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Download className="inline mr-2" size={20} />
                Wallpaper
              </button>
              <button
                onClick={() => setActiveTab('countdown')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  activeTab === 'countdown' 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Clock className="inline mr-2" size={20} />
                Countdown
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'playlist' && (
                <div className="text-center">
                  <Music className="mx-auto text-green-500 mb-6" size={64} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Love Songs Playlist</h3>
                  <p className="text-gray-600 mb-6">
                    I've created a special playlist with all the songs that remind me of you. 
                    Each song tells a part of our story. ❤️
                  </p>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg mb-6">
                    <h4 className="font-bold text-gray-800 mb-4">Featured Songs:</h4>
                    <div className="space-y-2 text-left max-w-md mx-auto">
                      <div className="flex justify-between">
                        <span>💕 "Perfect" - Ed Sheeran</span>
                        <span className="text-sm text-gray-500">Our song</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🌙 "All of Me" - John Legend</span>
                        <span className="text-sm text-gray-500">How I feel</span>
                      </div>
                      <div className="flex justify-between">
                        <span>✨ "A Thousand Years" - Christina Perri</span>
                        <span className="text-sm text-gray-500">Forever</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🎵 "Can't Help Falling in Love" - Elvis</span>
                        <span className="text-sm text-gray-500">My mood</span>
                      </div>
                      <div className="flex justify-between">
                        <span>💖 "Thinking Out Loud" - Ed Sheeran</span>
                        <span className="text-sm text-gray-500">Always</span>
                      </div>
                      <div className="flex justify-between">
                        <span>🌟 "Make You Feel My Love" - Adele</span>
                        <span className="text-sm text-gray-500">Promise</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors shadow-lg"
                  >
                    <Music className="mr-2" size={20} />
                    Open Our Love Playlist 💕
                  </a>
                </div>
              )}
              
              {activeTab === 'wallpaper' && (
                <div className="text-center">
                  <Download className="mx-auto text-blue-500 mb-6" size={64} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Custom Wallpaper</h3>
                  <p className="text-gray-600 mb-6">
                    A beautiful wallpaper with your name and our love quote, 
                    made especially for your phone and computer. 📱💻
                  </p>
                  
                  {/* Preview */}
                  <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 p-8 rounded-lg text-white mb-6 max-w-sm mx-auto">
                    <div className="text-center">
                      <Heart className="mx-auto mb-4" size={40} />
                      <h4 className="text-2xl font-bold mb-2">My Beautiful Love</h4>
                      <p className="text-sm opacity-90 italic">
                        "Distance means nothing when you mean everything"
                      </p>
                      <div className="mt-4 text-xs opacity-75">
                        With endless love ❤️
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <button className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-lg mr-4">
                      Download Phone Wallpaper (1080x1920)
                    </button>
                    <button className="w-full md:w-auto px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors shadow-lg">
                      Download Desktop Wallpaper (1920x1080)
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'countdown' && (
                <div className="text-center">
                  <Clock className="mx-auto text-orange-500 mb-6" size={64} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Until We Meet Again</h3>
                  <p className="text-gray-600 mb-8">
                    Every second brings us closer to being in each other's arms again! 🤗
                  </p>
                  
                  <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-8 rounded-lg mb-6">
                    <div className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                      {calculateTimeUntilMeet()}
                    </div>
                    <p className="text-gray-600 text-lg">
                      Until our next adventure together
                    </p>
                  </div>
                  
                  <div className="text-left max-w-md mx-auto space-y-4">
                    <h4 className="font-bold text-gray-800 mb-4 text-center">Our Next Plans:</h4>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span>Cozy movie marathon weekend</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Trying that new restaurant we talked about</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Long walks and deep conversations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Making up for all the missed hugs</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HiddenSurprise;