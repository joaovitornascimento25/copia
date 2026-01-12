import React from 'react';
import { heroData } from '../../data/mock';
import { Button } from '../ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0054C5]/10 to-transparent pointer-events-none" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#05DBF2 1px, transparent 1px), linear-gradient(90deg, #05DBF2 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#0054C5]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#05DBF2]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0054C5]/10 border border-[#0054C5]/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#05DBF2] animate-pulse" />
            <span className="text-sm text-[#d1d1d1]">Sistema completo de vendas</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">{heroData.headline}</span>
            <br />
            <span className="text-[#05DBF2]">{heroData.headlineHighlight}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#d1d1d1] max-w-2xl mx-auto mb-10 leading-relaxed">
            {heroData.subheadline}
          </p>

          {/* CTA Button */}
          <a href={heroData.ctaLink} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button 
              className="bg-[#0054C5] hover:bg-[#003d91] text-white font-semibold text-lg px-8 py-6 h-auto rounded-xl transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(0,84,197,0.4)] group"
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
                <div className="text-3xl md:text-4xl font-bold text-[#05DBF2] mb-1">{stat.value}</div>
                <div className="text-sm text-[#888888]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
