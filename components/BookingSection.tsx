'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Calendar, Clock, Video, Shield, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

export function BookingSection() {
  const { content } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState('investissement');
  const [selectedFormat, setSelectedFormat] = useState('visio');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const topics = [
    { id: 'investissement', label: 'Opportunité d’Investissement / Co-investissement' },
    { id: 'gouvernance', label: 'Mandat de Conseil d’Administration & Gouvernance' },
    { id: 'conseil', label: 'Conseil Stratégique Exécutif & Diplomatie d’Affaires' },
  ];

  return (
    <section id="meeting" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span className="w-6 h-px bg-blue-500" />
            <span>{content.navigation.meeting}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight">
            {content.bookingTitle}
          </h2>
          <p className="text-base text-slate-400 mt-3 font-light leading-relaxed">
            {content.bookingSubtitle}
          </p>
        </div>

        {/* Booking Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Briefing Info & Prerequisites (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-[#0b132b] to-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-950/70 border border-blue-800/60 mb-6">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Protocole Exécutif Strict</span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-white mb-4">
                Entretien Préliminaire Confidentiel
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                Afin de garantir une préparation documentaire rigoureuse, tout entretien sollicité fait l’objet d’une qualification préalable par le cabinet exécutif de David Kayi Kinkela.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                      Format & Durée
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Sessions de 30 ou 45 minutes · Visioconférence sécurisée ou présentiel à Kinshasa / Paris.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                      Accord de Confidentialité (NDA)
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Transmis sur demande pour les dossiers stratégiques et acquisitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800/80">
              <a
                href={content.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Accès direct agenda en ligne</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Embedded Booking Scheduler (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-blue-950/80 border border-blue-500/50 flex items-center justify-center text-blue-400 mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white mb-2">
                  Demande d&apos;Entretien Enregistrée
                </h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
                  Le cabinet de David Kayi Kinkela a bien reçu votre créneau souhaité. Un collaborateur prendra contact sous 24h avec le lien sécurisé.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-slate-800 text-slate-200 hover:bg-slate-700"
                >
                  Planifier un autre rendez-vous
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold font-serif text-white mb-6">
                  Sélectionnez vos préférences d&apos;entretien
                </h3>

                {/* Topic selection */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Nature de l&apos;Échange
                  </label>
                  <div className="space-y-2">
                    {topics.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTopic(t.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs font-medium border transition-all ${
                          selectedTopic === t.id
                            ? 'bg-blue-950/50 border-blue-500 text-white shadow-sm'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Format choice */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Modalité
                    </label>
                    <select
                      value={selectedFormat}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option value="visio">Visioconférence Privée (Google Meet / Zoom)</option>
                      <option value="kinshasa">Présentiel · Cabinet Gombe (Kinshasa)</option>
                      <option value="paris">Présentiel · Paris (sur invitation)</option>
                      <option value="geneve">Présentiel · Genève (sur invitation)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Période ou Date Souhaitée
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/30 transition-all duration-200"
                  >
                    <span>Confirmer la réservation du créneau</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
