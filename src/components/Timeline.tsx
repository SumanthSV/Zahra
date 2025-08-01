import React from 'react';
import { Calendar, Heart, Star, Gift, Plane, MessageCircle } from 'lucide-react';

const timelineEvents = [
  {
    date: "June, 2024",
    title: "First Message",
    description: "The day you replied to my random message and changed everything",
    icon: MessageCircle,
    color: "bg-blue-500"
  },
  {
    date: "June, 2024", 
    title: "First Video Call",
    description: "2 hours felt like 2 minutes. I knew you were special",
    icon: Heart,
    color: "bg-pink-500"
  },{
    date: "July, 2023",
    title: "First Care Package",
    description: "Yes, its a Umbrella 😁, but it was the thought that mattered",
    icon: Gift,
    color: "bg-green-500"
  },
  {
    date: "August 7, 2024",
    title: "Made It Official",
    description: "Best decision I ever made was asking you to be mine",
    icon: Star,
    color: "bg-purple-500"
  },

  {
    date: "December 29, 2024",
    title: "Planning Our Trip",
    description: "The day we booked our tickets to finally go out together",
    icon: Plane,
    color: "bg-indigo-500"
  },
  {
    date: "Today",
    title: "Still Going Strong",
    description: "Every day with you is a new page in our love story",
    icon: Heart,
    color: "bg-red-500"
  }
];

const Timeline = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Our Beautiful Timeline
          </h2>
          <p className="text-xl text-gray-600">Every moment that brought us closer</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-pink-300 to-purple-300"></div>
          
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-sm text-gray-500 mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
              
              {/* Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                <div className={`w-8 h-8 rounded-full ${event.color} flex items-center justify-center`}>
                  <event.icon className="text-white" size={16} />
                </div>
              </div>
              
              {/* Empty space for alternating layout */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;