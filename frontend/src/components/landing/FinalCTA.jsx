import React from 'react';
import { ctaData } from '../../data/mock';
import { Button } from '../ui/button';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contato">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(17,17,19)] via-[rgba(218,255,1,0.03)] to-[rgb(17,17,19)]" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(218,255,1,0.05)] rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(218,255,1,0.1)] border border-[rgba(218,255,1,0.2)] mb-8">
            <Sparkles className="w-4 h-4 text-[rgb(218,255,1)]" />
            <span className="text-sm text-[rgb(218,255,1)] font-medium">Análise gratuita</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {ctaData.title}
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[rgb(218,218,218)] mb-10 max-w-2xl mx-auto">
            {ctaData.subtitle}
          </p>
          
          {/* CTA Button */}
          <a href={ctaData.ctaLink} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button 
              className="bg-[rgb(218,255,1)] hover:bg-[rgb(166,190,21)] text-[rgb(17,17,19)] font-semibold text-lg px-10 py-7 h-auto rounded-xl transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_12px_35px_rgba(218,255,1,0.35)] group"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              {ctaData.ctaText}
              <ArrowRight className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          
          {/* Guarantee */}
          <p className="text-sm text-[rgb(161,161,170)] mt-6">
            {ctaData.guarantee}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
