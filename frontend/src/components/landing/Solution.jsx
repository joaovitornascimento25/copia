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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0054C5]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0054C5]/10 border border-[#0054C5]/30 mb-6">
            <span className="text-sm text-[#05DBF2] font-medium">Nossa metodologia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {solutionData.title}
          </h2>
          <p className="text-lg text-[#d1d1d1]">
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
                className="group bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:border-[#05DBF2] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0054C5] to-[#05DBF2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Step number */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-white/5 group-hover:text-[#05DBF2]/10 transition-colors">
                  0{index + 1}
                </div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#0054C5]/10 flex items-center justify-center mb-6 group-hover:bg-[#0054C5]/20 transition-colors">
                    {IconComponent && <IconComponent className="w-7 h-7 text-[#05DBF2]" />}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-[#888888] leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm text-[#d1d1d1]">
                        <Check className="w-4 h-4 text-[#05DBF2] flex-shrink-0" />
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
