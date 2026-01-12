import React from 'react';
import { problemsData } from '../../data/mock';
import { MessageSquareX, TrendingDown, Clock, UserX } from 'lucide-react';

const iconMap = {
  MessageSquareX,
  TrendingDown,
  Clock,
  UserX
};

const Problems = () => {
  return (
    <section className="py-24 relative" id="problemas">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {problemsData.title}
          </h2>
          <p className="text-lg text-[rgb(218,218,218)]">
            {problemsData.subtitle}
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problemsData.problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon];
            return (
              <div 
                key={index}
                className="group bg-[rgb(26,28,30)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:border-red-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
              >
                {/* Hover accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    {IconComponent && <IconComponent className="w-6 h-6 text-red-400" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-[rgb(161,161,170)] leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
