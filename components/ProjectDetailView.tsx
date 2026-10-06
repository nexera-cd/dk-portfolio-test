'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectCaseStudy } from '@/src/data/content';
import { LogoDK } from './LogoDK';
import { ThemeToggle } from './ThemeToggle';
import {
  ArrowLeft,
  Calendar,
  Building,
  CheckCircle2,
  Quote,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Download
} from 'lucide-react';

interface ProjectDetailViewProps {
  project: ProjectCaseStudy;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      activeImageIndex === 0 ? project.gallery.length - 1 : activeImageIndex - 1
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      activeImageIndex === project.gallery.length - 1 ? 0 : activeImageIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
            <span>Retour aux réalisations</span>
          </Link>

          <LogoDK size={38} withText={false} />

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/cv.pdf"
              download="David_Kayi_Kinkela_CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative pt-16 pb-20 border-b border-slate-900 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-950/80 text-blue-300 border border-blue-800/60">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-white tracking-tight leading-[1.15] mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8">
            {project.shortDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Commanditaire / Consortium
                </span>
                <p className="text-sm font-medium text-slate-200">
                  {project.client}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Calendrier d’Exécution
                </span>
                <p className="text-sm font-medium text-slate-200">
                  {project.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cover Visual */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-20">
        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* In-depth Narrative: Context, Role, Methodology */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Context & Role (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                01. Contexte & Enjeux Stratégiques
              </h2>
              <h3 className="text-2xl font-bold font-serif text-white mb-4">
                La genèse et les défis du mandat
              </h3>
              <p className="text-base text-slate-300 font-light leading-relaxed">
                {project.context}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                02. Mandat & Rôle de David Kayi Kinkela
              </h2>
              <h3 className="text-2xl font-bold font-serif text-white mb-4">
                Direction exécutive & arbitrage des intérêts
              </h3>
              <p className="text-base text-slate-300 font-light leading-relaxed">
                {project.role}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                03. Méthodologie & Jalons Opérationnels
              </h2>
              <h3 className="text-2xl font-bold font-serif text-white mb-4">
                Discipline de clôture et structuration
              </h3>
              <div className="space-y-3.5 mt-4">
                {project.methodology.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 leading-relaxed font-light">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Key Measurable Results Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0b132b] border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <TrendingUp className="w-4 h-4" />
                <span>Résultats Mesurables</span>
              </div>

              <div className="space-y-5">
                {project.results.map((res, rIdx) => (
                  <div key={rIdx} className="pb-4 border-b border-slate-800/80 last:border-b-0 last:pb-0">
                    <span className="text-2xl font-bold font-mono text-white">
                      {res.value}
                    </span>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300 mt-0.5">
                      {res.label}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                ))}
              </div>

              {project.quote && (
                <div className="pt-6 border-t border-slate-800/80">
                  <Quote className="w-5 h-5 text-blue-400 mb-2" />
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    &ldquo;{project.quote.text}&rdquo;
                  </p>
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-white">
                      {project.quote.author}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {project.quote.role}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery of 5+ Images */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Photographies Exclusives
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1">
              Galerie documentaire du projet ({project.gallery.length} vues HD)
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Cliquez sur une photo pour l’afficher en plein écran.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer shadow-md hover:border-blue-500/60 transition-all duration-300"
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-105 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 right-3 p-2 rounded-lg bg-slate-950/70 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block">
                    Vue {idx + 1}
                  </span>
                  <p className="text-xs text-slate-200 line-clamp-1 mt-0.5">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 focus:outline-none"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
          >
            <div className="relative aspect-[16/10] w-full max-h-[70vh] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              <Image
                src={project.gallery[activeImageIndex].url}
                alt={project.gallery[activeImageIndex].caption}
                fill
                className="object-contain"
                sizes="100vw"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-slate-200 mt-4 text-center max-w-2xl px-4">
              {project.gallery[activeImageIndex].caption}
            </p>
          </div>
        </div>
      )}

      {/* Bottom CTA & Return */}
      <section className="py-20 bg-slate-950 border-t border-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold font-serif text-white mb-4">
            Vous souhaitez échanger sur un projet similaire ?
          </h3>
          <p className="text-sm text-slate-400 mb-8 font-light leading-relaxed">
            David Kayi Kinkela et son équipe étudient tout mandat stratégique avec la plus haute confidentialité.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg"
            >
              Prendre contact
            </Link>
            <Link
              href="/#projects"
              className="px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800"
            >
              Voir toutes les réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Mandatory Signature Footer: Site réalisé par Nexera */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
        <div className="flex items-center justify-center gap-2">
          <span>© {new Date().getFullYear()} David Kayi Kinkela ·</span>
          <span className="text-slate-300 font-medium">Site réalisé par <strong>Nexera</strong></span>
        </div>
      </footer>
    </div>
  );
}
