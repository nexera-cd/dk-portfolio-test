'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Twitter } from 'lucide-react';

export function ContactSection() {
  const { content } = useLanguage();
  const { contactInfo, socials } = content;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Impossible de joindre le serveur pour le moment. Veuillez envoyer un e-mail direct.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
            <span className="w-6 h-px bg-blue-500" />
            <span>{content.navigation.contact}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight">
            {content.contactTitle}
          </h2>
          <p className="text-base text-slate-400 mt-3 font-light leading-relaxed">
            {content.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Google Maps (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#070f24] border border-slate-800">
              <h3 className="text-xl font-bold font-serif text-white mb-6">
                Coordonnées du Cabinet
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800 text-blue-400 border border-slate-700/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email Officiel
                    </span>
                    <p className="text-sm text-slate-200 mt-0.5">
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition-colors">
                        {contactInfo.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800 text-blue-400 border border-slate-700/60">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Ligne Directe Secrétariat
                    </span>
                    <p className="text-sm text-slate-200 mt-0.5">
                      <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-400 transition-colors">
                        {contactInfo.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800 text-blue-400 border border-slate-700/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Siège & Représentation
                    </span>
                    <p className="text-sm text-slate-200 mt-0.5 leading-relaxed">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 mt-8 border-t border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-4">
                  Réseaux Professionnels Officiels
                </span>
                <div className="flex items-center gap-3">
                  {socials.map((soc) => (
                    <a
                      key={soc.platform}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all duration-200"
                      aria-label={`Profil ${soc.label}`}
                    >
                      {soc.platform === 'linkedin' && <Linkedin className="w-4 h-4" />}
                      {soc.platform === 'twitter' && <Twitter className="w-4 h-4" />}
                      {soc.platform === 'email' && <Mail className="w-4 h-4" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Google Maps (responsive iframe) */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  Kinshasa · District Financier de la Gombe
                </span>
                <span className="text-[11px] text-slate-500">Google Maps</span>
              </div>
              <div className="relative aspect-[16/9] w-full">
                <iframe
                  title="Emplacement Google Maps de David Kayi Kinkela"
                  src={contactInfo.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold font-serif text-white mb-2">
              Formulaire de Correspondance
            </h3>
            <p className="text-sm text-slate-400 mb-8 font-light">
              Remplissez les champs ci-dessous pour adresser une demande confidentielle directe.
            </p>

            {status === 'success' ? (
              <div className="p-8 rounded-xl bg-blue-950/40 border border-blue-500/40 text-center">
                <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">
                  Message Transmis avec Succès
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Le cabinet de David Kayi Kinkela a bien reçu votre communication. Une réponse vous sera apportée avec la plus grande diligence.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-500"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-600/40 flex items-start gap-3 text-rose-200 text-xs">
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Nom & Prénom *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Jean-Marc Dumont"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Adresse Email Professionnelle *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: jm.dumont@holding.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Objet de la Correspondance
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ex: Mandat d’acquisition / Tour de table infrastructure"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message / Présentation du Dossier *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez succinctement la portée de votre projet ou sollicitation..."
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 shadow-lg shadow-blue-950/40 transition-all duration-200"
                >
                  {status === 'loading' ? (
                    <span>Transmission en cours...</span>
                  ) : (
                    <>
                      <span>Transmettre la Demande Confidentielle</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
