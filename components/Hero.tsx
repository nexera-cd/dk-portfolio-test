'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { Download, ArrowRight, ShieldCheck, TrendingUp, Building2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const { content } = useLanguage();
  const { identity } = content;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-[#070e20] to-slate-950 text-white">
      {/* Subtle architectural ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-12 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Accolades (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-slate-300">
                {identity.location}
              </span>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif leading-[1.15] mb-4">
              {identity.fullName}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-blue-400 tracking-wide mb-6">
              {identity.title}
            </p>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mb-8">
              {identity.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{content.navigation.contact}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/cv.pdf"
                download="David_Kayi_Kinkela_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium tracking-wide text-slate-200 bg-slate-800/80 hover:bg-slate-750 border border-slate-700 hover:border-slate-500 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>{content.navigation.downloadCv}</span>
              </a>
            </div>

            {/* Key Metrics / Credibility Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                  {identity.experienceYears}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                  Années d&apos;Expérience
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-serif">
                  {identity.capitalDeployed}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                  Capitaux Structurés
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                  {identity.companiesAdvised}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                  Conseils d&apos;Administration
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Executive Portrait with Luxury Framing (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl p-2.5 bg-gradient-to-b from-slate-700/40 via-blue-900/30 to-slate-900/80 border border-slate-700/50 shadow-2xl">
              {/* Corner accents for luxury timepiece aesthetic */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-blue-400 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-400 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blue-400 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-blue-400 rounded-br-sm pointer-events-none" />

              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src={identity.heroImage}
                  alt={`Portrait officiel de ${identity.fullName}`}
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 420px"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Floating identity pill at portrait foot */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-700/70 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white tracking-wide uppercase">
                        {identity.fullName}
                      </p>
                      <p className="text-[11px] text-blue-300">
                        {identity.title}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 font-serif text-xs font-bold">
                      {identity.initials}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
