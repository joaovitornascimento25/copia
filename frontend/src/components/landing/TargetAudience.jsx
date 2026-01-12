import React from 'react';
import { targetAudienceData } from '../../data/mock';
import { Stethoscope, Store, Briefcase } from 'lucide-react';

const iconMap = {
  Stethoscope,
  Store,
  Briefcase
};

const TargetAudience = () => {
  return (
    <section className="py-24 relative" id="para-quem">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {targetAudienceData.title}
          </h2>
          <p className="text-lg text-[#d1d1d1]">
            {targetAudienceData.subtitle}
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {targetAudienceData.audiences.map((audience, index) => {
            const IconComponent = iconMap[audience.icon];
            return (
              <div 
                key={index}
                className="group relative bg-black border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:border-[#05DBF2] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] text-center"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#0054C5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0054C5]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0054C5]/20 group-hover:scale-110 transition-all">
                    {IconComponent && <IconComponent className="w-8 h-8 text-[#05DBF2]" />}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-[#888888] leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
