import React from 'react';
import { Camera, Heart, Star } from 'lucide-react';

const photos = [
  {
   caption: "Our First Eye contact",
    description: "The moment I saw your smile for the first time",
    color: "from-pink-400 to-rose-400"
  },
  {
    url: "https://images.pexels.com/photos/1024956/pexels-photo-1024956.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Your Smile That Day",
    description: "When you laughed at my terrible joke",
    color: "from-purple-400 to-pink-400"
  },
  {
    url: "https://images.pexels.com/photos/1024957/pexels-photo-1024957.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Sunday Morning Vibes",
    description: "Lazy video calls",
    color: "from-blue-400 to-purple-400"
  },
  {
    url: "https://images.pexels.com/photos/1024958/pexels-photo-1024958.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Coffee Date",
    description: "Virtual coffee dates across time zones",
    color: "from-amber-400 to-orange-400"
  },
  {
    url: "https://images.pexels.com/photos/1024959/pexels-photo-1024959.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Your Beautiful Eyes",
    description: "The way you look at me through the screen",
    color: "from-emerald-400 to-teal-400"
  },
  {
    url: "https://images.pexels.com/photos/1024961/pexels-photo-1024961.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Dream Together",
    description: "Planning our future adventures",
    color: "from-indigo-400 to-blue-400"
  },
  {
    url: "https://images.pexels.com/photos/1024962/pexels-photo-1024962.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Midnight Conversations",
    description: "When we talked until sunrise",
    color: "from-violet-400 to-purple-400"
  },
  {
    url: "https://images.pexels.com/photos/1024963/pexels-photo-1024963.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Your Sleepy Face",
    description: "When you dozed off during our call",
    color: "from-rose-400 to-pink-400"
  },
  {
    url: "https://images.pexels.com/photos/1024964/pexels-photo-1024964.jpeg?auto=compress&cs=tinysrgb&w=800",
    caption: "Dancing Together",
    description: "Our silly dance party",
    color: "from-cyan-400 to-blue-400"
  }
];

const PhotoGallery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Floating sparkles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-yellow-300 opacity-20 animate-twinkle"
            size={8 + i * 2}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Camera className="mx-auto text-purple-500 mb-4 animate-bounce" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Our Memory Gallery
          </h2>
          <p className="text-xl text-gray-600"> worth a thousand I love yous</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* <div className="relative overflow-hidden group-hover:animate-shimmer">
                <img 
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${photo.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      className="absolute text-white animate-float-up"
                      size={16}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${60 + i * 10}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div> */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">{photo.caption}</h3>
                <p className="text-gray-600 italic group-hover:text-gray-700 transition-colors duration-300">{photo.description}</p>
                
                {/* Sparkle effect on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Star className="text-yellow-400 animate-spin" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;