import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import PhotoGallery from './components/PhotoGallery';
import ReasonsILoveYou from './components/ReasonsILoveYou';
import OpenWhenLetters from './components/OpenWhenLetters';
import MemoryMap from './components/MemoryMap';
import Quiz from './components/Quiz';
import HiddenSurprise from './components/HiddenSurprise';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Happy Girlfriend Day, Zahra❤️";
    
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add fade-in animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }
      
      @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      @keyframes floatUp {
        0% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-30px); }
      }
      
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes dash {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: 24; }
      }
      
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.3); }
        50% { box-shadow: 0 0 30px rgba(236, 72, 153, 0.6), 0 0 40px rgba(139, 92, 246, 0.3); }
      }
      
      @keyframes gradientText {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      .animate-fade-in {
        animation: fadeIn 1s ease-out;
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out;
      }
      
      .animate-scale-in {
        animation: scaleIn 0.5s ease-out;
      }
      
      .animate-heartbeat {
        animation: heartbeat 1.5s ease-in-out infinite;
      }
      
      .animate-twinkle {
        animation: twinkle 2s ease-in-out infinite;
      }
      
      .animate-shimmer {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
      }
      
      .animate-float-up {
        animation: floatUp 2s ease-out infinite;
      }
      
      .animate-gradient-shift {
        background-size: 400% 400%;
        animation: gradientShift 8s ease infinite;
      }
      
      .animate-dash {
        animation: dash 3s linear infinite;
      }
      
      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }
      
      .animate-gradient-text {
        background: linear-gradient(45deg, #ec4899, #8b5cf6, #06b6d4, #10b981);
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientText 3s ease infinite;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      @keyframes flip {
        0% { transform: rotateY(0); }
        50% { transform: rotateY(-90deg); }
        100% { transform: rotateY(0); }
      }
      
      .animate-flip {
        animation: flip 0.6s ease-in-out;
      }
      
      .perspective-1000 {
        perspective: 1000px;
      }
      
      .backface-hidden {
        backface-visibility: hidden;
      }
      
      .rotate-y-180 {
        transform: rotateY(180deg);
      }
      
      .rotate-y-0 {
        transform: rotateY(0deg);
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: linear-gradient(to bottom, #f1f1f1, #e5e7eb);
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #ec4899, #8b5cf6);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #db2777, #7c3aed);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <LoveLetter />
      <Timeline />
      <PhotoGallery />
      <ReasonsILoveYou />
      <OpenWhenLetters />
      <MemoryMap />
      <Quiz />
      <HiddenSurprise />
      <Footer />
    </div>
  );
}

export default App;