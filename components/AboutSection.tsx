'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { Download, ChevronLeft, ChevronRight, Award, Compass, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutSection() {
  const { content } = useLanguage();
  const { identity } = content;

  // Touch carousel state for the 5 additional photos
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = identity.aboutCarousel;
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carousel.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carousel.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative hairline line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span className="w-6 h-px bg-blue-500" />
            <span>{content.navigation.about}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight">
            Vision, Discipline d’Exécution & Héritage Économique
          </h2>
        </div>

        {/* Top Part: Detailed Bio + 1 Primary Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Main Portrait of About Section (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-[440px] mx-auto rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
              <Image
                src={identity.aboutImage}
                alt="David Kayi Kinkela en consultation d'affaires"
                fill
                className="object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 440px"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80">
                <p className="text-sm font-semibold text-white font-serif">
                  David Kayi Kinkela
                </p>
                <p className="text-xs text-blue-400 mt-0.5">
                  Président & Administrateur
                </p>
              </div>
            </div>
          </div>

          {/* Bio Text (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-slate-300">
            {identity.fullBio.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg leading-relaxed font-light">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Credo */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
                <Compass className="w-5 h-5 text-blue-400 mb-2" />
                <h3 className="text-sm font-semibold text-white">Prévoyance</h3>
                <p className="text-xs text-slate-400 mt-1">Anticipation des cycles macroéconomiques et géopolitiques.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
                <Award className="w-5 h-5 text-blue-400 mb-2" />
                <h3 className="text-sm font-semibold text-white">Intégrité</h3>
                <p className="text-xs text-slate-400 mt-1">Gouvernance de classe mondiale et respect des engagements.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40">
                <Globe2 className="w-5 h-5 text-blue-400 mb-2" />
                <h3 className="text-sm font-semibold text-white">Impact Durable</h3>
                <p className="text-xs text-slate-400 mt-1">Création de valeur mesurable pour les générations futures.</p>
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="pt-4">
              <a
                href="/cv.pdf"
                download="David_Kayi_Kinkela_CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-blue-500 shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>{content.navigation.downloadCv}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Part: Tactile Carousel of 5 Additional Photos */}
        <div className="pt-12 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Galerie Exécutive
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                En immersion : Décisions, Sommets & Chantiers
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Faites glisser au doigt sur mobile ou utilisez les contrôles ci-contre.
              </p>
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tactile Carousel Container */}
          <div
            className="relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
              {carousel.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={item.url}
                    alt={item.caption}
                    fill
                    className="object-cover object-center filter brightness-90 contrast-105"
                    sizes="100vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Caption badge */}
                  <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-auto md:max-w-xl p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                      Vue {index + 1} sur {carousel.length}
                    </span>
                    <p className="text-sm font-medium text-slate-100 mt-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Pagination */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 p-2 rounded-full bg-slate-950/70 backdrop-blur-sm border border-slate-700/50">
              {carousel.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    dotIdx === currentIndex ? 'w-6 bg-blue-500' : 'w-2 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Aller à la photo ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
