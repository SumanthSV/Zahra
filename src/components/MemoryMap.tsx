import React from 'react';
import { MapPin, Heart, Star, Sparkles, Plane, Coffee, Camera, Music } from 'lucide-react';

const memories = [
  {
    location: "Coffee Shop Corner",
    position: { top: '20%', left: '15%' },
    memory: "Where we had our first virtual coffee date",
    color: "bg-gradient-to-r from-amber-500 to-orange-500",
    icon: Coffee,
    size: "large"
  },
  {
    location: "Your City",
    position: { top: '40%', left: '70%' },
    memory: "The place that holds my heart",
    color: "bg-gradient-to-r from-pink-500 to-rose-500",
    icon: Heart,
    size: "extra-large"
  },
  {
    location: "My City", 
    position: { top: '60%', left: '25%' },
    memory: "Where I dream of you every night",
    color: "bg-gradient-to-r from-blue-500 to-indigo-500",
    icon: Star,
    size: "large"
  },
  {
    location: "Paris",
    position: { top: '30%', left: '50%' },
    memory: "Our dream destination for anniversaries",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    icon: Heart,
    size: "medium"
  },
  {
    location: "Beach Resort",
    position: { top: '70%', left: '60%' },
    memory: "Where we'll watch sunsets together",
    color: "bg-gradient-to-r from-orange-500 to-yellow-500",
    icon: Star,
    size: "medium"
  },
  {
    location: "Mountain Cabin",
    position: { top: '15%', left: '80%' },
    memory: "Cozy winter getaways we've planned",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    icon: Star,
    size: "medium"
  },
  {
    location: "Tokyo",
    position: { top: '45%', left: '85%' },
    memory: "Cherry blossoms and sushi dates",
    color: "bg-gradient-to-r from-pink-400 to-purple-400",
    icon: Sparkles,
    size: "medium"
  },
  {
    location: "New York",
    position: { top: '25%', left: '30%' },
    memory: "Broadway shows and Central Park walks",
    color: "bg-gradient-to-r from-yellow-500 to-red-500",
    icon: Star,
    size: "medium"
  },
  {
    location: "London",
    position: { top: '35%', left: '45%' },
    memory: "Rainy days and cozy tea shops",
    color: "bg-gradient-to-r from-gray-500 to-blue-500",
    icon: Coffee,
    size: "small"
  },
  {
    location: "Santorini",
    position: { top: '55%', left: '55%' },
    memory: "Blue domes and endless sunsets",
    color: "bg-gradient-to-r from-blue-400 to-cyan-400",
    icon: Camera,
    size: "small"
  },
  {
    location: "Concert Hall",
    position: { top: '65%', left: '40%' },
    memory: "Our favorite songs played live",
    color: "bg-gradient-to-r from-purple-400 to-indigo-400",
    icon: Music,
    size: "small"
  },
  {
    location: "Airport",
    position: { top: '50%', left: '20%' },
    memory: "The day we finally meet again",
    color: "bg-gradient-to-r from-emerald-500 to-teal-500",
    icon: Plane,
    size: "large"
  }
];

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'extra-large': return 'w-8 h-8 hover:scale-200';
    case 'large': return 'w-6 h-6 hover:scale-175';
    case 'medium': return 'w-5 h-5 hover:scale-150';
    case 'small': return 'w-4 h-4 hover:scale-125';
    default: return 'w-4 h-4 hover:scale-150';
  }
};
const MemoryMap = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 via-purple-50 to-green-50 relative overflow-hidden">
      {/* Animated background sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300 opacity-30 animate-twinkle"
            size={8 + Math.random() * 12}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <MapPin className="mx-auto text-green-500 mb-4 animate-bounce" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Map of Our Memories
          </h2>
          <p className="text-xl text-gray-600">Places we've been and dreams we'll chase</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 animate-fade-in-up">
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 via-purple-100 via-pink-100 via-green-100 to-yellow-100 rounded-lg overflow-hidden animate-gradient-shift">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full animate-float"></div>
              <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-20 left-32 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-32 right-16 w-12 h-12 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 left-1/2 w-18 h-18 bg-gradient-to-br from-indigo-300 to-blue-300 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {memories.map((memory, index) => (
              <div
                key={index}
                className="absolute group animate-fade-in"
                style={memory.position}
              >
                <div className={`${getSizeClasses(memory.size)} ${memory.color} rounded-full animate-pulse cursor-pointer transform transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <memory.icon className="text-white" size={memory.size === 'extra-large' ? 20 : memory.size === 'large' ? 16 : memory.size === 'medium' ? 12 : 8} />
                  </div>
                </div>
                
                {/* Ripple effect on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping">
                  <div className={`w-full h-full ${memory.color} rounded-full opacity-30`}></div>
                </div>
                
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none min-w-52 z-10 animate-scale-in border-2 border-pink-100">
                  <h4 className="font-bold text-gray-800 text-sm mb-1">{memory.location}</h4>
                  <p className="text-gray-600 text-xs">{memory.memory}</p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
                  <stop offset="25%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="75%" stopColor="#10b981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M 15% 20% Q 30% 10% 50% 30% Q 70% 35% 70% 40% Q 65% 55% 60% 70% Q 45% 75% 25% 60% Q 20% 45% 15% 20%"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                className="animate-dash"
              />
            </svg>
            
            <div className="absolute bottom-4 right-4 flex items-center text-gray-600 animate-fade-in">
              <Heart className="mr-2 text-red-500 animate-heartbeat" size={16} />
              <span className="text-sm">Hover over pins to see memories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryMap;