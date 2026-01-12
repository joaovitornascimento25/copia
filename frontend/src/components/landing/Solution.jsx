import React from 'react';
import { solutionData } from '../../data/mock';
import { Palette, Target, Bot, Check } from 'lucide-react';

const iconMap = {
  Palette,
  Target,
  Bot
};

const Solution = () => {
  return (
    <section className="py-24 relative" id="solucoes">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(218,255,1,0.02)] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(218,255,1,0.1)] border border-[rgba(218,255,1,0.2)] mb-6">
            <span className="text-sm text-[rgb(218,255,1)] font-medium">Nossa metodologia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {solutionData.title}
          </h2>
          <p className="text-lg text-[rgb(218,218,218)]">
            {solutionData.subtitle}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutionData.solutions.map((solution, index) => {
            const IconComponent = iconMap[solution.icon];
            return (
              <div 
                key={index}
                className="group bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:border-[rgb(218,255,1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[rgb(218,255,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Step number */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-[rgba(255,255,255,0.05)] group-hover:text-[rgba(218,255,1,0.1)] transition-colors">
                  0{index + 1}
                </div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[rgba(218,255,1,0.1)] flex items-center justify-center mb-6 group-hover:bg-[rgba(218,255,1,0.2)] transition-colors">
                    {IconComponent && <IconComponent className="w-7 h-7 text-[rgb(218,255,1)]" />}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-[rgb(161,161,170)] leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm text-[rgb(218,218,218)]">
                        <Check className="w-4 h-4 text-[rgb(218,255,1)] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
