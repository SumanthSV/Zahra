import React from 'react';
import { Heart } from 'lucide-react';

const LoveLetter = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-lg shadow-2xl p-8 md:p-12 relative overflow-hidden border-2 border-pink-100" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fdf2f8' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}>
          {/* Paper texture background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-pink-50 opacity-30"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <Heart className="mx-auto text-pink-500 mb-4" size={40} />
              <h2 className="text-3xl md:text-4xl text-gray-800 mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
                A Letter From My Heart
              </h2>
              <div className="w-24 h-0.5 bg-pink-400 mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" style={{ fontFamily: 'Dancing Script, cursive' }}>
              <p className="text-2xl mb-6 first-letter:text-7xl first-letter:font-bold first-letter:text-pink-600 first-letter:float-left first-letter:mr-3 first-letter:mt-2">
                My Dearest Love,
              </p>
              
              <p className="mb-6 text-lg">
                Today, on this special Girlfriend Day, I find myself overwhelmed with gratitude for having you in my life. Every morning I wake up thinking about your beautiful smile, and every night I fall asleep with your voice echoing in my heart.
              </p>
              
              <p className="mb-6 text-lg">
                Though distance keeps us apart, it has never dimmed the light you bring to my world. You are my sunrise when days feel dark, my calm in every storm, and my greatest adventure even from miles away.
              </p>
              
              <p className="mb-6 text-lg">
                I created this little corner of the internet just for you, filled with all the reasons you make my heart skip a beat, our precious memories, and dreams of all the tomorrows we'll share together.
              </p>
              
              <p className="mb-8 text-lg">
                Distance is just a test of how far love can travel, and ours has no limits.
              </p>
              
              <p className="text-right text-3xl font-bold text-pink-600">
                Forever yours,<br />
                <span className="text-gray-800">Your Devoted Boyfriend</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;