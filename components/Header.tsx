'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { LogoDK } from './LogoDK';
import { ThemeToggle } from './ThemeToggle';
import { Download, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const { language, setLanguage, content } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: content.navigation.about },
    { href: '#expertise', label: content.navigation.expertise },
    { href: '#projects', label: content.navigation.projects },
    { href: '#testimonials', label: content.navigation.testimonials },
    { href: '#meeting', label: content.navigation.meeting },
    { href: '#contact', label: content.navigation.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 dark:bg-[#070b16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LogoDK size={42} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-wide uppercase text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: CV + Lang + Theme */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800/60 dark:bg-slate-800/80 rounded-full p-0.5 border border-slate-700/60">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  language === 'fr'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-label="Passer en Français"
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Download CV CTA */}
            <a
              href="/cv.pdf"
              download="David_Kayi_Kinkela_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-slate-100 bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-600 hover:to-indigo-700 rounded-lg shadow-sm border border-blue-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{content.navigation.downloadCv}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/98 border-b border-slate-800 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-wide uppercase text-slate-200 hover:text-blue-400 py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span className="text-xs uppercase text-slate-400">Langue:</span>
                  <div className="flex bg-slate-800 rounded-full p-0.5 border border-slate-700">
                    <button
                      onClick={() => setLanguage('fr')}
                      className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                        language === 'fr' ? 'bg-blue-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                        language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </div>

              <a
                href="/cv.pdf"
                download="David_Kayi_Kinkela_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-blue-700 rounded-lg shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>{content.navigation.downloadCv}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
