import React from 'react';
import { heroData } from '../../data/mock';
import { Button } from '../ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(218,255,1,0.03)] to-transparent pointer-events-none" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(218,255,1,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(218,255,1,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(26,28,30)] border border-[rgb(63,63,63)] mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[rgb(218,255,1)] animate-pulse" />
            <span className="text-sm text-[rgb(161,161,170)]">Sistema completo de vendas</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">{heroData.headline}</span>
            <br />
            <span className="text-[rgb(218,255,1)]">{heroData.headlineHighlight}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[rgb(218,218,218)] max-w-2xl mx-auto mb-10 leading-relaxed">
            {heroData.subheadline}
          </p>

          {/* CTA Button */}
          <a href={heroData.ctaLink} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button 
              className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-semibold text-lg px-8 py-6 h-auto rounded-xl transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(218,255,1,0.3)] group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {heroData.ctaText}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            {heroData.stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl md:text-4xl font-bold text-[rgb(218,255,1)] mb-1">{stat.value}</div>
                <div className="text-sm text-[rgb(161,161,170)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(17,17,19)] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
