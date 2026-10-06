'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { ArrowUpRight, Calendar, Building, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function ProjectsSection() {
  const { content } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
              <span className="w-6 h-px bg-blue-500" />
              <span>{content.navigation.projects}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight">
              {content.projectsTitle}
            </h2>
            <p className="text-base text-slate-400 mt-3 font-light">
              {content.projectsSubtitle}
            </p>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-blue-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/30"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale contrast-105 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-slate-900/90 text-blue-300 backdrop-blur-md border border-slate-700/80">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-300 bg-slate-950/70 backdrop-blur-md border border-slate-700/60">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white font-serif mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed mb-6 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-slate-800/80 mb-6">
                    {project.results.slice(0, 2).map((res, rIdx) => (
                      <div key={rIdx}>
                        <span className="text-lg font-bold text-blue-400 font-mono">
                          {res.value}
                        </span>
                        <p className="text-[11px] text-slate-400 uppercase tracking-wider">
                          {res.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link to Case Study */}
              <div className="px-7 pb-7">
                <Link
                  href={`/projets/${project.slug}`}
                  className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-200 bg-slate-900 hover:bg-blue-600 hover:text-white border border-slate-800 hover:border-blue-500 transition-all duration-200 group/btn"
                >
                  <span>Consulter l’étude de cas</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
