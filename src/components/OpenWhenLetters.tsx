import React, { useState } from 'react';
import { Mail, Heart, Sun, Smile, X, Coffee, Moon, Gift, Zap, Cloud, Star, Frown, Users, Brain, Angry, Eye, Lightbulb, Umbrella, Target } from 'lucide-react';

const letters = [
  {
    title: "Open when you're sad",
    icon: Frown,
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    content: "My darling, I know life can feel overwhelming sometimes, but please remember that you are the strongest, most beautiful person I know. Your sadness is temporary, but my love for you is eternal. Close your eyes and imagine me holding you tight, whispering that everything will be okay. You've overcome every challenge before, and you'll conquer this too. I believe in you with all my heart. You are loved, you are valued, and you are never alone. ❤️"
  },
  {
    title: "Open when you miss me",
    icon: Heart,
    color: "bg-gradient-to-br from-pink-400 to-pink-600", 
    content: "Sweet love, I miss you too - more than words could ever express. Look outside at the same sky I'm looking at, and know that we're sharing this moment even from miles away. Remember our last video call? Your smile, your laugh, the way your eyes light up? That's what I carry with me every day. Distance is just a test of how far love can travel, and ours travels across continents. Soon, very soon, I'll be holding you in my arms again. Until then, keep me close to your heart. 💕"
  },
  {
    title: "Open when you need to smile",
    icon: Smile,
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    content: "Hey beautiful! Remember when I tried to cook for you over video call and nearly burned down my kitchen? Or that time I fell asleep during our movie night and you took screenshots of my 'sleeping face'? You said I looked like a peaceful baby dinosaur! 😂 Your laughter is my favorite sound in the world. So here's a virtual hug, a terrible dad joke (Why don't scientists trust atoms? Because they make up everything!), and a reminder that your smile can light up my entire universe. Keep shining, gorgeous! ✨"
  },
  {
    title: "Open when you can't sleep",
    icon: Sun,
    color: "bg-gradient-to-br from-purple-400 to-indigo-600",
    content: "My love, I wish I could be there to sing you to sleep or hold you until your worries fade away. Instead, let my words wrap around you like a warm blanket. Close your eyes and imagine we're lying under the stars together, your head on my chest, listening to my heartbeat. Think of all our future adventures - lazy Sunday mornings, cooking breakfast together, building our dreams side by side. Let these happy thoughts carry you to peaceful dreams. Sleep tight, my angel. I'll be dreaming of you too. 🌙"
  },
  {
    title: "Open when you need coffee",
    icon: Coffee,
    color: "bg-gradient-to-br from-amber-400 to-brown-500",
    content: "Good morning, sunshine! ☀️ I know you're probably reaching for your coffee right now, and I wish I could be there to make it for you just the way you like it. Remember our virtual coffee dates? The way you'd scrunch your nose at the first sip if it was too hot? I love every little thing about your morning routine. Here's to all the coffee dates we'll have together soon, where I can watch you wake up slowly and see that beautiful sleepy smile in person. Until then, enjoy your coffee and know that I'm thinking of you with every sip of mine. ☕💕"
  },
  {
    title: "Open when you're stressed",
    icon: Cloud,
    color: "bg-gradient-to-br from-teal-400 to-cyan-600",
    content: "Take a deep breath, my love. In... and out. I know everything feels overwhelming right now, but you've got this. You're the strongest person I know, and you've handled everything life has thrown at you with such grace. Remember, stress is temporary, but you are resilient. Take a moment to step back, maybe make some tea, and know that I'm here cheering you on from afar. You don't have to carry everything alone - I'm always here to listen, to support you, and to remind you how incredible you are. This too shall pass, beautiful. 🌈"
  },
  {
    title: "Open when you're excited",
    icon: Zap,
    color: "bg-gradient-to-br from-green-400 to-emerald-600",
    content: "YES! I can practically feel your excitement through the screen! 🎉 Your enthusiasm is one of my favorite things about you - the way your eyes light up, how you bounce a little when you're really happy, and that infectious energy that makes me smile no matter what. I wish I could be there to celebrate with you right now, to see that beautiful excited expression in person and maybe spin you around in a hug. Tell me everything! I want to hear every detail and share in your joy. Your happiness is my happiness, always. ✨"
  },
  {
    title: "Open when it's raining",
    icon: Cloud,
    color: "bg-gradient-to-br from-gray-400 to-blue-500",
    content: "I love rainy days because they remind me of cozy moments we could share together. 🌧️ Picture this: we're curled up on the couch, listening to the rain against the windows, maybe with some hot chocolate and a good movie. You're wearing one of my hoodies (because you always steal them), and we're just enjoying the peaceful sound together. Rain has always felt romantic to me, especially when I think about dancing with you in it someday. Until then, enjoy the cozy vibes and know that every raindrop is like a little kiss from the sky. 💙"
  },
  {
    title: "Open when you achieve something",
    icon: Star,
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
    content: "I am SO proud of you! 🌟 I knew you could do it! Watching you work towards your goals and seeing you succeed fills my heart with so much joy and pride. You inspire me every single day with your determination, your talent, and your beautiful heart. This achievement is just the beginning - you're capable of absolutely anything you set your mind to. I can't wait to celebrate with you properly when we're together, but for now, please know that I'm doing a happy dance for you wherever I am. You're amazing, and you deserve every bit of success that comes your way! 🎊"
  },
  {
    title: "Open when you're being silly",
    icon: Smile,
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    content: "There's my goofball! 😄 I absolutely LOVE your silly side - your random dance moves, the funny faces you make during our calls, the way you laugh at your own jokes before you even finish telling them. Your playfulness is like sunshine to my soul. Never lose that beautiful, carefree spirit of yours. Life is so much better when we can be completely ourselves with someone, and with you, I never have to pretend to be anyone else. Keep being wonderfully, perfectly, adorably you. The world needs more of your kind of joy! 🎭"
  },
  {
    title: "Open when you're angry",
    icon: Angry,
    color: "bg-gradient-to-br from-red-400 to-orange-500",
    content: "Hey love, I can feel your frustration even from here. It's okay to be angry - your feelings are always valid. Take some deep breaths with me. In... and out. Remember that this feeling will pass, just like a storm passes through the sky. You're allowed to feel everything you're feeling right now. When you're ready, maybe we can talk about it? I'm always here to listen without judgment. Your anger doesn't make you any less beautiful to me. I love every part of you, including the parts that get fired up when things aren't right. 🔥💕"
  },
  {
    title: "Open when you're overthinking",
    icon: Brain,
    color: "bg-gradient-to-br from-purple-400 to-indigo-500",
    content: "My beautiful overthinker, I see that mind of yours spinning like a carousel. First, take a deep breath. Your thoughts are like clouds - they look so solid and important, but they're just passing through your mental sky. You don't have to solve everything right now. Sometimes the best thing we can do is step back and trust that things will work out. Remember: you've survived 100% of your worst days so far. That's a pretty good track record! Let's focus on this moment, right here, right now. You're safe, you're loved, and you're exactly where you need to be. 🧠💙"
  },
  {
    title: "Open when you feel lonely",
    icon: Users,
    color: "bg-gradient-to-br from-indigo-400 to-purple-500",
    content: "Sweet love, loneliness is just love with nowhere to go, and you have SO much love to give. Even when you feel alone, you're carrying a piece of my heart with you everywhere you go. Look around you - see that chair? I've imagined sitting there with you. That window? I've pictured us looking out of it together. You're never truly alone because you live in my thoughts every single day. Call a friend, hug a pillow, or just sit with the feeling - it's temporary. Soon enough, we'll never have to feel this kind of loneliness again. 🤗💜"
  },
  {
    title: "Open when you doubt us",
    icon: Eye,
    color: "bg-gradient-to-br from-teal-400 to-blue-500",
    content: "My love, doubt is just fear wearing a disguise. It's normal to feel uncertain sometimes - distance can play tricks on our minds. But let me remind you of something: every single day, I choose you. Every morning when I wake up, every night before I sleep, in every quiet moment in between - I choose us. Our love isn't fragile; it's been tested by miles and time zones and still burns bright. Look at everything we've built together, all the obstacles we've overcome. We're not just surviving the distance - we're thriving despite it. Trust in us, trust in me, but most importantly, trust in the love that brought us together. 💙✨"
  },
  {
    title: "Open when you just want to feel loved",
    icon: Heart,
    color: "bg-gradient-to-br from-pink-400 to-red-500",
    content: "You are loved. You are loved. You are loved. Let me say it again because it's the truest thing I know: YOU ARE LOVED. Not just by me (though I love you with every fiber of my being), but by the universe itself for creating someone so perfectly wonderful. You are loved for your morning bedhead, for the way you sing off-key, for your random 2 AM thoughts, for your kindness, for your strength, for your vulnerability, for simply existing. You don't have to earn this love or prove you deserve it. You are loved exactly as you are, right now, in this moment. Feel it wrapping around you like the warmest hug. 💕🌟"
  },
  {
    title: "Open when it's a rainy day",
    icon: Umbrella,
    color: "bg-gradient-to-br from-gray-400 to-blue-400",
    content: "I love rainy days because they remind me that even the sky needs to cry sometimes, and that's perfectly okay. 🌧️ There's something so cozy and romantic about rain, isn't there? I imagine us curled up together, listening to the drops against the window, maybe with some hot tea and a good book. Rain makes everything smell fresh and clean - it's nature's way of starting over. Let this rain wash away any worries you have today. Dance in it, splash in puddles, or just watch it from inside while thinking of me thinking of you. Every raindrop is like a little kiss from the sky. 💙☔"
  },
  {
    title: "Open when you need motivation",
    icon: Target,
    color: "bg-gradient-to-br from-green-400 to-teal-500",
    content: "You've got this, superstar! 🌟 I've watched you tackle challenges that would make others give up, and you always find a way through. You're stronger than you realize, smarter than you think, and more capable than you give yourself credit for. Remember why you started, remember what you're working toward, and remember that I believe in you 1000%. Every step forward, no matter how small, is progress. You don't have to be perfect - you just have to keep going. I'm cheering you on from here, and I can't wait to celebrate your success with you! 💪✨"
  },
  {
    title: "Open when you have good news",
    icon: Lightbulb,
    color: "bg-gradient-to-br from-yellow-400 to-orange-400",
    content: "YES! I can practically feel your excitement radiating through the screen! 🎉 Your joy is contagious, and knowing that you're happy makes my entire world brighter. I wish I could be there to see that beautiful smile in person, to give you the biggest hug, and to celebrate properly with you. Tell me everything! I want to hear every single detail because your happiness is my happiness. You deserve all the good things coming your way and so much more. This is just the beginning of all the amazing things in store for you! 🌟💛"
  }
];

const OpenWhenLetters = () => {
  const [openLetter, setOpenLetter] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-300 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <Mail className="mx-auto text-indigo-500 mb-4 animate-bounce" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Open When... Letters
          </h2>
          <p className="text-xl text-gray-600">For when you need me most</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {letters.map((letter, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div 
                onClick={() => setOpenLetter(index)}
                className={`${letter.color} p-6 rounded-lg shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-rotate-2 text-white text-center relative overflow-hidden group-hover:animate-glow min-h-[160px] flex flex-col justify-center`}
              >
                {/* Sparkle effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 transform -skew-y-12 origin-top-left animate-pulse"></div>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 15}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                
                <letter.icon className="mx-auto mb-4 group-hover:animate-bounce" size={48} />
                <h3 className="text-lg font-bold mb-2">{letter.title}</h3>
                <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Click to open</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {openLetter !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in shadow-2xl">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {letters[openLetter].title}
                  </h3>
                  <button
                    onClick={() => setOpenLetter(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors hover:rotate-90 duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {letters[openLetter].content}
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setOpenLetter(null)}
                    className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Close with Love ❤️
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenWhenLetters;