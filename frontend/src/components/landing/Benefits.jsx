import React from 'react';
import { benefitsData } from '../../data/mock';
import { MessageCircle, DollarSign, BarChart3, Zap, TrendingUp, Shield } from 'lucide-react';

const iconMap = {
  MessageCircle,
  DollarSign,
  BarChart3,
  Zap,
  TrendingUp,
  Shield
};

const Benefits = () => {
  return (
    <section className="py-24 relative" id="beneficios">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {benefitsData.title}
          </h2>
          <p className="text-lg text-[rgb(218,218,218)]">
            {benefitsData.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefitsData.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:border-[rgba(218,255,1,0.3)] hover:bg-[rgb(38,40,42)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(218,255,1,0.1)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {IconComponent && <IconComponent className="w-6 h-6 text-[rgb(218,255,1)]" />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[rgb(161,161,170)] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
