'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function TestimonialsSection() {
  const { content } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span className="w-6 h-px bg-blue-500" />
            <span>{content.navigation.testimonials}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight">
            {content.testimonialsTitle}
          </h2>
          <p className="text-base text-slate-400 mt-3 font-light leading-relaxed">
            {content.testimonialsSubtitle}
          </p>
        </div>

        {/* Testimonials Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-[#070e20] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 shadow-lg"
            >
              <div>
                {/* Top: 5 Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700/60" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info & Avatar */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-800 border border-slate-700 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">
                    {item.name}
                  </h4>
                  <p className="text-xs text-blue-400 font-medium mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
