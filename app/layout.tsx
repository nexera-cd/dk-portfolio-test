import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://davidkayikinkela.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "David Kayi Kinkela | Homme d'Affaires & Investisseur Stratégique",
  description: "Portfolio haut de gamme et vitrine d'affaires pour David Kayi Kinkela. Fusions & acquisitions, investissements d'infrastructures et gouvernance. Réalisé par Nexera.",
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "David Kayi Kinkela | Homme d'Affaires & Investisseur Stratégique",
    description: "Portfolio officiel d'affaires de David Kayi Kinkela. Capitaux structurés, mandats de gouvernance et réalisations d'envergure. Réalisé par Nexera.",
    url: baseUrl,
    siteName: 'David Kayi Kinkela',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'David Kayi Kinkela - Homme d’Affaires & Investisseur',
      },
    ],
    locale: 'fr_FR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: "David Kayi Kinkela | Homme d'Affaires & Investisseur",
    description: "Portfolio officiel de David Kayi Kinkela. Réalisé par Nexera.",
    images: ['https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'David Kayi Kinkela',
  alternateName: 'DK',
  jobTitle: "Homme d'affaires & Investisseur Stratégique",
  description: "Leader visionnaire intervenant dans les fusions-acquisitions, les infrastructures panafricaines et le private equity.",
  image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop',
  url: baseUrl,
  sameAs: [
    'https://www.linkedin.com/in/david-kayi-kinkela',
    'https://twitter.com/david_kinkela'
  ],
  knowsAbout: [
    'Mergers & Acquisitions',
    'Private Equity',
    'Corporate Governance',
    'Infrastructure Financing',
    'Energy Transition'
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Kayi Horizon Capital'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
