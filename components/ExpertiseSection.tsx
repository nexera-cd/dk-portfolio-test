'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Briefcase, TrendingUp, ShieldCheck, Building2, Award, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function ExpertiseSection() {
  const { content } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-blue-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="expertise" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span className="w-6 h-px bg-blue-500" />
            <span>{content.navigation.expertise}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight">
            {content.servicesTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-4 font-light leading-relaxed">
            {content.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0b132b]/80 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/20"
            >
              <div>
                {/* Card Top: Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-slate-600 group-hover:text-blue-400 transition-colors">
                    {service.number}
                  </span>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-blue-500/40 group-hover:bg-blue-950/40 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white font-serif mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bullet Details */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                {service.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
