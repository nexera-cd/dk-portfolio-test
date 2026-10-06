import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BookingSection } from '@/components/BookingSection';
import { ContactSection } from '@/components/ContactSection';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Header / Sticky Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner */}
        <Hero />

        {/* Section À Propos & Galerie Tactile */}
        <AboutSection />

        {/* Section « Ce que je sais faire » */}
        <ExpertiseSection />

        {/* Section Accomplissements & Projets */}
        <ProjectsSection />

        {/* Section Avis Clients & Recommandations */}
        <TestimonialsSection />

        {/* Section Prendre Rendez-vous */}
        <BookingSection />

        {/* Section Me Contacter & Google Maps */}
        <ContactSection />
      </main>

      {/* Bouton WhatsApp Flottant */}
      <WhatsAppFloatingButton />

      {/* Pied de Page avec Mention Obligatoire : Site réalisé par Nexera */}
      <Footer />
    </div>
  );
}
