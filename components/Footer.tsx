'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { LogoDK } from './LogoDK';
import { Download, ArrowUp, ShieldCheck } from 'lucide-react';

export function Footer() {
  const { content } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-slate-900 items-start">
          {/* Col 1: Identity & Brand (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <LogoDK size={46} />
            <p className="text-sm text-slate-400 font-light max-w-sm leading-relaxed mt-4">
              Portail officiel et vitrine d’affaires de David Kayi Kinkela. Investisseur stratégique, administrateur de sociétés et conseiller exécutif international.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>Gouvernance & Intégrité Institutionnelle</span>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Sommaire
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {content.navigation.about}
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">
                  {content.navigation.expertise}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  {content.navigation.projects}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  {content.navigation.testimonials}
                </a>
              </li>
              <li>
                <a href="#meeting" className="hover:text-white transition-colors">
                  {content.navigation.meeting}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {content.navigation.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Études de Cas & Direct Action (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Études de Cas Clés
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              {content.projects.map((proj) => (
                <Link
                  key={proj.slug}
                  href={`/projets/${proj.slug}`}
                  className="block hover:text-blue-400 transition-colors line-clamp-1"
                >
                  · {proj.title}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/cv.pdf"
                download="David_Kayi_Kinkela_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>{content.navigation.downloadCv}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with mandatory Nexera signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} David Kayi Kinkela. Tous droits réservés.
          </div>

          {/* Obligatory Mention: Site réalisé par Nexera */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="font-medium tracking-wide">
              Site réalisé par <strong className="text-white font-semibold">Nexera</strong>
            </span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors focus:outline-none"
            aria-label="Remonter en haut de page"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
