
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-800 to-sky-600 text-slate-100 py-20 pt-32 md:pt-20">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="block">👋 Hey there, I'm</span>
          <span 
            className="block text-sky-400 mt-2" 
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
          >
            Anuj Shah
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-slate-200" style={{ fontFamily: "'Inter', sans-serif" }}>
          A Software Engineer focused on building next-generation technologies that change how billions of users connect, explore, and interact with information.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-100 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll to about section">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5M4.5 11.25l7.5 7.5 7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;