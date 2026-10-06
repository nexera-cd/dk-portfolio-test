export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  shortDescription: string;
  coverImage: string;
  context: string;
  role: string;
  methodology: string[];
  results: {
    label: string;
    value: string;
    description: string;
  }[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  gallery: {
    url: string;
    caption: string;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'instagram' | 'email' | 'phone';
  label: string;
  url: string;
  icon: string;
}

export interface SiteContent {
  identity: {
    fullName: string;
    initials: string;
    title: string;
    subtitle: string;
    location: string;
    experienceYears: string;
    capitalDeployed: string;
    companiesAdvised: string;
    cvUrl: string;
    heroImage: string;
    aboutImage: string;
    aboutCarousel: {
      url: string;
      caption: string;
    }[];
    shortBio: string;
    fullBio: string[];
  };
  navigation: {
    about: string;
    expertise: string;
    projects: string;
    testimonials: string;
    meeting: string;
    contact: string;
    downloadCv: string;
  };
  servicesTitle: string;
  servicesSubtitle: string;
  services: ServiceItem[];
  projectsTitle: string;
  projectsSubtitle: string;
  projects: ProjectCaseStudy[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: TestimonialItem[];
  bookingTitle: string;
  bookingSubtitle: string;
  calendlyUrl: string;
  contactTitle: string;
  contactSubtitle: string;
  contactInfo: {
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappMessage: string;
    address: string;
    mapsEmbedUrl: string;
  };
  socials: SocialLink[];
  footerNote: string;
}

export const siteContent: Record<'fr' | 'en', SiteContent> = {
  fr: {
    identity: {
      fullName: 'David Kayi Kinkela',
      initials: 'DK',
      title: "Homme d'affaires & Investisseur Stratégique",
      subtitle: "Bâtisseur d'écosystèmes d'envergure internationale, catalyseur de capitaux et conseiller de confiance pour les grandes transformations industrielles et technologiques.",
      location: 'Kinshasa · Paris · Genève',
      experienceYears: '18+',
      capitalDeployed: '$650M+',
      companiesAdvised: '45+',
      cvUrl: '/cv.pdf',
      // High-resolution curated portraits representing a distinguished executive
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop',
      aboutImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
      aboutCarousel: [
        {
          url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop',
          caption: 'Forum Économique Panafricain – Négociations institutionnelles & partenariats bilatéraux',
        },
        {
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
          caption: 'Quartier d’Affaires International – Siège des opérations de capital-développement',
        },
        {
          url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
          caption: 'Comité Stratégique & Conseil d’Administration – Structuration de fusions-acquisitions',
        },
        {
          url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
          caption: 'Salle du Conseil & Gouvernance – Alignement des actionnaires et gestion des risques',
        },
        {
          url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
          caption: 'Inspection terrain – Projets d’infrastructures durables et énergies renouvelables',
        },
      ],
      shortBio: "Avec plus de dix-huit années d'engagement au sommet des affaires internationales, David Kayi Kinkela allie vision géopolitique affûtée, rigueur financière et exécution d'excellence pour transformer les opportunités complexes en actifs à haute valeur ajoutée.",
      fullBio: [
        "David Kayi Kinkela est un chef d'entreprise et investisseur reconnu pour son leadership exigeant et sa maîtrise des montages financiers complexes. Diplômé des plus grandes écoles de gestion et formé auprès d'institutions bancaires de premier plan, il déploie des capitaux stratégiques sur des secteurs à fort impact : infrastructures énergétiques, plateformes logistiques multimodales, et champions technologiques panafricains.",
        "Sa signature repose sur une approche holistique de la création de valeur : allier une discipline de gouvernance aux standards internationaux les plus rigoureux avec une connaissance intime et nuancée des dynamiques locales du continent africain et des marchés mondiaux.",
        "Administrateur influent au sein de multiples conseils d'administration et conseiller stratégique auprès de gouvernements et de multinationales, David s'attache à bâtir un héritage économique pérenne guidé par l'innovation, la souveraineté industrielle et l'intégrité sans compromis."
      ],
    },
    navigation: {
      about: 'À propos',
      expertise: 'Expertise',
      projects: 'Réalisations',
      testimonials: 'Recommandations',
      meeting: 'Rendez-vous',
      contact: 'Contact',
      downloadCv: 'Télécharger mon CV',
    },
    servicesTitle: 'Ce que je sais faire',
    servicesSubtitle: 'Une expertise éprouvée au confluent de la haute finance, de la gouvernance d’entreprise et du développement économique souverain.',
    services: [
      {
        id: 'ma',
        number: '01',
        title: 'Fusions, Acquisitions & Cessions Stratégiques',
        description: 'Origination, structuration et clôture de transactions majeures transfrontalières, alliant valorisation précise et négociations d’influence.',
        details: [
          'Due diligence financière et juridique approfondie',
          'Syndication de dette et montages mezzanine',
          'Intégration post-acquisition et synergies opérationnelles',
        ],
        icon: 'Briefcase',
      },
      {
        id: 'capital',
        number: '02',
        title: 'Private Equity & Capital-Croissance',
        description: 'Déploiement de fonds propres dans des entreprises à forte rentabilité et des leaders industriels émergents.',
        details: [
          'Prises de participation majoritaires ou minoritaires qualifiées',
          'Accélération de la croissance organique et externe',
          'Optimisation du bilan et stratégies de sortie valorisantes',
        ],
        icon: 'TrendingUp',
      },
      {
        id: 'governance',
        number: '03',
        title: 'Gouvernance de Haut Niveau & Conseil d’Administration',
        description: 'Mandats d’administrateur indépendant et présidence de comités d’audit et de stratégie auprès de grands groupes.',
        details: [
          'Supervision prudentielle et conformité réglementaire',
          'Gestion des risques systémiques et géopolitiques',
          'Médiation d’actionnaires et alignement des intérêts',
        ],
        icon: 'ShieldCheck',
      },
      {
        id: 'ppp',
        number: '04',
        title: 'Partenariats Public-Privé & Grands Projets (PPP)',
        description: 'Conception et sécurisation de projets d’infrastructures nationales à long terme auprès des institutions et banques multilatérales.',
        details: [
          'Montage de concessions portuaires, ferroviaires et énergétiques',
          'Garanties souveraines et dérisquage d’actifs',
          'Coordination multi-acteurs (gouvernements, banques, EPC)',
        ],
        icon: 'Building2',
      },
      {
        id: 'advisory',
        number: '05',
        title: 'Conseil Stratégique aux Dirigeants & États',
        description: 'Accompagnement feutré de directeurs généraux, ministères et holdings patrimoniales dans leurs tournants décisifs.',
        details: [
          'Redéfinition de portefeuille d’actifs',
          'Diplomatie économique et accès aux marchés de capitaux',
          'Gestion de crise et restructuration de passif',
        ],
        icon: 'Award',
      },
      {
        id: 'transition',
        number: '06',
        title: 'Transition Énergétique & Minéraux Critiques',
        description: 'Financement et déploiement de solutions d’énergie propre et valorisation locale des chaînes de valeur minérales.',
        details: [
          'Projets solaires et hydroélectriques en réseau isolé ou raccordé',
          'RSE de classe mondiale et acceptabilité sociale',
          'Traçabilité et transformation industrielle locale',
        ],
        icon: 'Zap',
      },
    ],
    projectsTitle: 'Accomplissements & Projets Stratégiques',
    projectsSubtitle: 'Découvrez les études de cas détaillées illustrant l’ampleur des mandats dirigés et la création de valeur tangible générée.',
    projects: [
      {
        slug: 'expansion-energetique-afrique-centrale',
        title: 'Complexe Hydroélectrique & Transition Énergétique Régionale',
        category: 'Énergie & Infrastructures',
        client: 'Consortium Énergétique Panafricain & Partenaires Internationaux',
        year: '2023 - 2025',
        shortDescription: 'Structuration et closing financier d’une centrale hydroélectrique de 350 MW alimentant les pôles industriels et miniers clés.',
        coverImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
        context: "Face à un déficit énergétique chronique freinant l'industrialisation régionale, le projet visait à mobiliser un tour de table complexe associant bailleurs de fonds internationaux, institutions de financement du développement (DFI) et investisseurs privés pour ériger un complexe hydroélectrique moderne.",
        role: "Chef de file financier et négociateur en chef du consortium. David Kayi Kinkela a conduit la structuration du contrat de concession sur 30 ans (BOOT), l'accord d'achat d'électricité (PPA) garanti, et la syndication bancaire internationale.",
        methodology: [
          "Négociation des garanties souveraines et couverture contre le risque de change.",
          "Coordination de la modélisation financière multi-devises et des audits environnementaux (normes IFC / Banque Mondiale).",
          "Mise en place d'un mécanisme de compte séquestre garantissant le service de la dette sans aléas.",
          "Sélection et contractualisation sous contrat EPC clef en main avec un constructeur de rang mondial."
        ],
        results: [
          { label: 'Capacité Installée', value: '350 MW', description: 'Énergie propre continue injectée dans le réseau interconnecté.' },
          { label: 'Financement Clôturé', value: '$420M', description: 'Mobilisation complète en dette syndiquée et fonds propres.' },
          { label: 'Foyers & PME Impactés', value: '1.2M+', description: 'Accès sécurisé à une électricité compétitive et décarbonée.' },
          { label: 'Emplois Créés', value: '3 400', description: 'Emplois directs et indirects durant la phase de construction et exploitation.' }
        ],
        quote: {
          text: "La rigueur chirurgicale de David et sa capacité à aligner des intérêts étatiques et des banques multilatérales ont été l'élément décisif qui a rendu possible ce closing historique.",
          author: "Christian V. de Montluc",
          role: "Directeur des Investissements Infrastructures, Fonds Européen d'Assistance"
        },
        gallery: [
          { url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop', caption: 'Vue panoramique du site d’aménagement du barrage et des vannes' },
          { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop', caption: 'Séance plénière de signature des conventions financières avec les banques' },
          { url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop', caption: 'Corridor écologique préservé et intégration environnementale stricte' },
          { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop', caption: 'Sous-station haute tension et raccordement au réseau de transport' },
          { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop', caption: 'Direction de projet et coordination des comités techniques de pilotage' }
        ]
      },
      {
        slug: 'fonds-capital-croissance-tech',
        title: 'Fonds Panafricain de Capital-Croissance Tech & Fintech',
        category: 'Private Equity & Fintech',
        client: 'Kayi Horizon Capital & Family Offices Internationaux',
        year: '2022 - 2024',
        shortDescription: 'Levée et déploiement d’un véhicule d’investissement de $150M ciblant les champions de l’inclusion financière et du commerce digital.',
        coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        context: "Alors que l'Afrique subsaharienne enregistre l'adoption la plus rapide au monde des services bancaires mobiles, les pépites technologiques matures peinaient à trouver des tickets d'investissement série B et C compris entre 10 et 25 millions de dollars sans diluer leur ancrage local.",
        role: "Managing Partner & Sponsor du véhicule. David Kayi Kinkela a conçu la thèse d'investissement, recruté l'équipe de gestion d'actifs à Londres, Genève et Johannesburg, et convaincu des investisseurs institutionnels de premier ordre.",
        methodology: [
          "Structuration réglementaire sous juridiction financière premium avec reporting ESG strict.",
          "Sélection rigoureuse : analyse de plus de 240 entreprises pour n'en retenir que 14 champions.",
          "Accompagnement opérationnel : renforcement de la gouvernance, des comités de risques et des audits Big 4.",
          "Mise en réseau internationale avec les géants mondiaux des paiements et des télécoms pour préparer des sorties à forte plus-value."
        ],
        results: [
          { label: 'Actifs sous Gestion', value: '$150M', description: 'Levée bouclée avec sursouscription de 18%.' },
          { label: 'Scale-ups Financées', value: '14', description: 'Présentes dans 11 pays avec rentabilité prouvée.' },
          { label: 'Utilisateurs Finaux', value: '18M+', description: 'Bénéficiant d’outils de paiement et micro-crédits accessibles.' },
          { label: 'TRI Brut Réalisé', value: '27.4%', description: 'Performance financière supérieure au benchmark régional.' }
        ],
        quote: {
          text: "David a su bâtir un pont de confiance inébranlable entre les family offices suisses les plus conservateurs et le dynamisme bouillonnant de la tech africaine.",
          author: "Alexandre von Bernstorff",
          role: "Senior Partner, Geneva Private Wealth Alliance"
        },
        gallery: [
          { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', caption: 'Tableau de bord et modélisation de performance des participations' },
          { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop', caption: 'Rencontre annuelle des investisseurs institutionnels et des fondateurs' },
          { url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop', caption: 'Validation des protocoles de sécurité transactionnelle et cyber-résilience' },
          { url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop', caption: 'Direction générale et comités stratégiques de valorisation' },
          { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop', caption: 'Atelier de passage à l’échelle et pénétration de nouveaux marchés régionaux' }
        ]
      },
      {
        slug: 'hub-logistique-portuaire-atlantique',
        title: 'Hub Logistique Multimodal & Port Sec Stratégique',
        category: 'Transport & Commerce International',
        client: 'Holding Portuaire & Ministère des Transports',
        year: '2021 - 2023',
        shortDescription: 'Développement d’une plateforme multimodale de 120 hectares réduisant de 45% les coûts de transit marchandise en Afrique Centrale.',
        coverImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
        context: "L'engorgement chronique des corridors d'import-export pénalisait les filières industrielles et agricoles régionales avec des temps d'attente moyens de 21 jours par conteneur. L'objectif était de créer un port sec ultramoderne relié par rail et autoroute aux bassins de consommation.",
        role: "Conseiller stratégique principal du consortium exploitant. Élaboration du schéma directeur, négociation de la franchise douanière sous douane simplifiée et négociation avec les armateurs mondiaux.",
        methodology: [
          "Mise en place d'un guichet unique numérisé interopérable avec les douanes nationales.",
          "Aménagement lourd d'infrastructures de stockage frigorifique et de terminaux conteneurs haute sécurité.",
          "Contractualisation d'alliances exclusives avec les armateurs majeurs (Maersk, CMA CGM, MSC).",
          "Structuration d'une obligation verte (Green Bond) pour financer les équipements de manutention 100% électriques."
        ],
        results: [
          { label: 'Délais de Transit', value: '-45%', description: 'Temps de passage réduit de 21 jours à seulement 4 jours ouvrés.' },
          { label: 'Capacité de Traitement', value: '450 000 EVP', description: 'Capacité annuelle de conteneurs équivalents vingt pieds.' },
          { label: 'Investissement Global', value: '$285M', description: 'Programme livré dans les délais et sans dépassement de budget.' },
          { label: 'Emplois Locaux', value: '2 800', description: 'Emplois directs créés avec un programme de formation certifié.' }
        ],
        quote: {
          text: "Grâce à la ténacité et à l'intelligence relationnelle de David Kayi Kinkela, ce qui n'était qu'un plan sur papier est devenu l'épine dorsale logistique de tout notre corridor économique.",
          author: "Hon. Jean-Marc Mbemba",
          role: "Ancien Ministre délégué aux Infrastructures et aux Voies de Communication"
        },
        gallery: [
          { url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop', caption: 'Vue aérienne des terminaux portuaires et des voies d’accès ferroviaires' },
          { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop', caption: 'Plateforme logistique d’entreposage climatisé et gestion automatisée' },
          { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop', caption: 'Portiques de manutention électriques et réduction de l’empreinte carbone' },
          { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop', caption: 'Centre opérationnel de contrôle douanier et traçabilité satellitaire' },
          { url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop', caption: 'Célébration officielle de l’inauguration et remise des premiers titres de transit' }
        ]
      }
    ],
    testimonialsTitle: 'Recommandations & Confiance de Pairs',
    testimonialsSubtitle: 'Ils ont collaboré avec David Kayi Kinkela sur des opérations d’envergure et témoignent de sa rigueur et de sa vision.',
    testimonials: [
      {
        id: '1',
        name: 'Édouard de La Baume',
        role: 'Associé Gérant',
        company: 'La Baume Capital Partners (Paris / Londres)',
        quote: "David possède cette rare capacité à naviguer avec une aisance égale dans les couloirs feutrés des banques privées suisses et au cœur des réalités industrielles les plus exigeantes d'Afrique Centrale. Un allié d'une valeur inestimable.",
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
      {
        id: '2',
        name: 'Aïssatou Traoré Diallo',
        role: 'Directrice Générale',
        company: 'West Africa Infrastructure Fund',
        quote: "Dans nos négociations de syndication pour la centrale hydroélectrique, la précision juridique et l'autorité naturelle de David ont débloqué des situations que beaucoup pensaient insolubles. Son intégrité force le respect.",
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
      {
        id: '3',
        name: 'Henrik van Der Meer',
        role: 'Président du Conseil',
        company: 'Nordic Commodities & Energy Group',
        quote: "Un esprit d'analyse redoutable combiné à un sens aigu de la diplomatie des affaires. David sait créer de la valeur durable là où d'autres ne voient que des risques insurmontables.",
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
      {
        id: '4',
        name: 'Prof. Mamadou Sangaré',
        role: 'Ancien Ministre de l’Économie',
        company: 'Conseil Économique Sous-Régional',
        quote: "David Kayi Kinkela incarne la nouvelle génération de grands bâtisseurs africains : ultra-compétent, souverain dans ses arbitrages, et guidé par un sens profond du développement des communautés locales.",
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
      {
        id: '5',
        name: 'Béatrice de Saint-Aubin',
        role: 'Senior Vice-President M&A',
        company: 'Banque d’Affaires Privée Internationale',
        quote: "Chaque transaction pilotée avec David s'est conclue avec un niveau de préparation et d'anticipation documentaire exceptionnel. Il protège les intérêts de ses partenaires comme s'il s'agissait des siens.",
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
      {
        id: '6',
        name: 'Tariq Al-Mansoor',
        role: 'Directeur des Investissements Stratégiques',
        company: 'Gulf & Africa Sovereign Horizon Fund',
        quote: "Collaborer avec David Kinkela sur nos véhicules d'investissement d'infrastructure a été un catalyseur exceptionnel. Son carnet d'adresses et sa rigueur d'exécution sont incomparables.",
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
    ],
    bookingTitle: 'Prendre Rendez-vous',
    bookingSubtitle: 'Planifiez un échange stratégique direct ou un entretien préliminaire avec le cabinet exécutif de David Kayi Kinkela.',
    calendlyUrl: 'https://calendly.com',
    contactTitle: 'Me Contacter',
    contactSubtitle: 'Pour toute opportunité d’investissement, mandat d’administrateur ou échange institutionnel de haut niveau.',
    contactInfo: {
      email: 'contact@davidkayikinkela.com',
      phone: '+243 81 000 0000',
      whatsappNumber: '243810000000',
      whatsappMessage: 'Bonjour Monsieur David Kayi Kinkela, je vous contacte suite à la consultation de votre portfolio d’affaires pour discuter d’une opportunité stratégique.',
      address: 'Tour Commerciale du Fleuve, Boulevard du 30 Juin, Gombe, Kinshasa · RDC',
      mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.887611029279!2d15.293427!3d-4.305452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c2e1763fd7%3A0xbcf03a302636f2f2!2sGombe%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1700000000000!5m2!1sfr!2scd',
    },
    socials: [
      {
        platform: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/david-kayi-kinkela',
        icon: 'Linkedin',
      },
      {
        platform: 'twitter',
        label: 'X / Twitter',
        url: 'https://twitter.com/david_kinkela',
        icon: 'Twitter',
      },
      {
        platform: 'email',
        label: 'Email Privé',
        url: 'mailto:contact@davidkayikinkela.com',
        icon: 'Mail',
      },
    ],
    footerNote: 'Site réalisé par Nexera',
  },
  en: {
    identity: {
      fullName: 'David Kayi Kinkela',
      initials: 'DK',
      title: 'Business Leader & Strategic Investor',
      subtitle: 'Architect of international high-scale ecosystems, capital catalyst and trusted advisor for monumental industrial and technological transformations.',
      location: 'Kinshasa · Paris · Geneva',
      experienceYears: '18+',
      capitalDeployed: '$650M+',
      companiesAdvised: '45+',
      cvUrl: '/cv.pdf',
      heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop',
      aboutImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
      aboutCarousel: [
        {
          url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop',
          caption: 'Pan-African Economic Forum – Institutional diplomacy and bilateral agreements',
        },
        {
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
          caption: 'International Financial District – Growth capital operations headquarters',
        },
        {
          url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
          caption: 'Executive Boardroom – Structuring strategic cross-border M&A transactions',
        },
        {
          url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
          caption: 'Corporate Governance & Advisory – Fiduciary oversight and risk mitigation',
        },
        {
          url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
          caption: 'Field Due Diligence – Sustainable infrastructure and clean energy assets',
        },
      ],
      shortBio: 'With over eighteen years at the apex of global business and finance, David Kayi Kinkela combines astute geopolitical foresight, rigorous financial engineering, and operational excellence to turn intricate challenges into compounding assets.',
      fullBio: [
        'David Kayi Kinkela is an accomplished corporate executive and investor renowned for uncompromising leadership and mastery of multifaceted capital structuring. A graduate of leading business schools and trained alongside world-class banking institutions, he deploys catalytic capital into high-impact sectors: clean energy complexes, multimodal dry port logistics, and breakthrough Pan-African tech leaders.',
        'His hallmark is a holistic approach to sustainable value generation: blending international governance rigor with intimate and nuanced command of African economic dynamics and international liquidity corridors.',
        'An esteemed board member across prominent corporations and a confidential advisor to state leadership and multinational conglomerates, David is dedicated to establishing a lasting economic legacy rooted in innovation, industrial sovereignty, and unflinching integrity.'
      ],
    },
    navigation: {
      about: 'About',
      expertise: 'Expertise',
      projects: 'Track Record',
      testimonials: 'Endorsements',
      meeting: 'Schedule Meeting',
      contact: 'Contact',
      downloadCv: 'Download Executive CV',
    },
    servicesTitle: 'Core Capabilities & Strategic Focus',
    servicesSubtitle: 'Battle-tested leadership at the nexus of high finance, institutional governance, and sovereign economic growth.',
    services: [
      {
        id: 'ma',
        number: '01',
        title: 'Cross-Border M&A & Strategic Divestitures',
        description: 'Origination, structuring, and closing of complex multi-jurisdiction transactions combining valuation accuracy with high-stakes diplomacy.',
        details: [
          'In-depth legal and financial due diligence',
          'Syndicated debt structuring and mezzanine facilities',
          'Post-merger integration and operational synergy harvesting',
        ],
        icon: 'Briefcase',
      },
      {
        id: 'capital',
        number: '02',
        title: 'Private Equity & Growth Capital Deployment',
        description: 'Direct equity allocations into high-yield enterprises, market champions, and scalable industrial infrastructure.',
        details: [
          'Majority and qualified minority equity stakes',
          'Accelerating organic and acquisitive growth pathways',
          'Balance sheet optimization and value-maximizing exits',
        ],
        icon: 'TrendingUp',
      },
      {
        id: 'governance',
        number: '03',
        title: 'Board Directorship & Corporate Governance',
        description: 'Independent board member positions, audit committee leadership, and fiduciary oversight for blue-chip conglomerates.',
        details: [
          'Prudential compliance and regulatory alignment',
          'Geopolitical and macroeconomic risk management',
          'Shareholder mediation and long-term interest convergence',
        ],
        icon: 'ShieldCheck',
      },
      {
        id: 'ppp',
        number: '04',
        title: 'Public-Private Partnerships (PPP) & Mega-Projects',
        description: 'Structuring and securing sovereign-grade infrastructure initiatives in tandem with multilateral development banks (DFIs).',
        details: [
          'Concession arrangements for port, rail, and energy grids',
          'Sovereign guarantees and credit-enhancement mechanisms',
          'Multilateral alignment between ministries, financiers, and EPCs',
        ],
        icon: 'Building2',
      },
      {
        id: 'advisory',
        number: '05',
        title: 'Executive Advisory to C-Suite & Governments',
        description: 'Discreet advisory counsel to CEOs, sovereign investment funds, and family offices navigating pivotal inflection points.',
        details: [
          'Portfolio restructuring and core asset realignment',
          'Economic statecraft and access to global debt markets',
          'Crisis containment and sovereign liability restructuring',
        ],
        icon: 'Award',
      },
      {
        id: 'transition',
        number: '06',
        title: 'Energy Transition & Critical Mineral Value Chains',
        description: 'Financing and executing clean power installations alongside local beneficiation of strategic mineral resources.',
        details: [
          'Grid-connected and captive utility-scale renewable systems',
          'World-class ESG integration and social license to operate',
          'Domestic processing and industrial value capture',
        ],
        icon: 'Zap',
      },
    ],
    projectsTitle: 'Strategic Engagements & Case Studies',
    projectsSubtitle: 'Explore in-depth case studies illustrating executive leadership, capital deployment, and tangible industrial outcomes.',
    projects: [
      {
        slug: 'expansion-energetique-afrique-centrale',
        title: 'Regional Hydroelectric Complex & Energy Transition',
        category: 'Energy & Infrastructure',
        client: 'Pan-African Energy Consortium & International Co-Financiers',
        year: '2023 - 2025',
        shortDescription: 'Structuring and commercial closing of a 350 MW clean energy facility powering heavy industrial and mining clusters.',
        coverImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
        context: 'Facing a legacy regional deficit constraining industrial expansion, this project mobilized an intricate financing syndicate combining DFIs, sovereign guarantee providers, and institutional equity to construct a state-of-the-art run-of-river hydroelectric facility.',
        role: 'Consortium Lead Financial Sponsor & Chief Negotiator. David Kayi Kinkela orchestrated the 30-year BOOT concession, the sovereign-backed Power Purchase Agreement (PPA), and the multi-tranche debt syndication.',
        methodology: [
          'Negotiated sovereign credit-enhancement wrap and currency-hedging facilities.',
          'Supervised complex multi-currency financial models under IFC performance standards.',
          'Structured an offshore escrow payment waterfall ensuring uninterrupted debt amortization.',
          'Selected and locked turnkey EPC contract terms with Tier-1 engineering conglomerates.'
        ],
        results: [
          { label: 'Installed Capacity', value: '350 MW', description: 'Continuous baseload clean energy injected into the grid.' },
          { label: 'Financing Closed', value: '$420M', description: 'Fully syndicated multi-tranche debt and sponsor equity.' },
          { label: 'Beneficiary Population', value: '1.2M+', description: 'Secured access to competitive, reliable green power.' },
          { label: 'Workforce Generated', value: '3,400', description: 'Direct and indirect quality employment created.' }
        ],
        quote: {
          text: "David's surgical precision and innate capacity to align sovereign priorities with demanding international banking syndicates were the catalyst for this landmark milestone.",
          author: 'Christian V. de Montluc',
          role: 'Infrastructure Investment Director, European Support Fund'
        },
        gallery: [
          { url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop', caption: 'Panoramic view of the dam structure and spillway engineering works' },
          { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop', caption: 'Official closing signing ceremony with multilateral banking delegates' },
          { url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop', caption: 'Preserved ecological corridor adhering strictly to Equator Principles' },
          { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop', caption: 'High-voltage substation and regional transmission grid interconnection' },
          { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop', caption: 'Project governance council and quarterly technical monitoring review' }
        ]
      },
      {
        slug: 'fonds-capital-croissance-tech',
        title: 'Pan-African Tech & Fintech Growth Capital Fund',
        category: 'Private Equity & Fintech',
        client: 'Kayi Horizon Capital & Global Family Offices',
        year: '2022 - 2024',
        shortDescription: 'Fundraising and strategic allocation of a $150M growth equity fund backing digital commerce and financial inclusion frontrunners.',
        coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        context: 'While sub-Saharan Africa boasts the highest mobile finance adoption rates globally, mature tech leaders struggled to secure Series B & C growth checks ($10M-$25M) without losing local sovereignty.',
        role: 'Managing Partner & Anchor Sponsor. David Kayi Kinkela formulated the investment thesis, hand-picked the asset management team across London, Geneva, and Johannesburg, and secured institutional limited partners.',
        methodology: [
          'Established top-tier jurisdiction regulatory structure with institutional ESG benchmarks.',
          'Rigorous proprietary funnel: vetted over 240 opportunities to back 14 resilient winners.',
          'Hands-on portfolio stewardship: upgrading internal controls, risk committees, and Big 4 audits.',
          'Orchestrated strategic alliances with global payment giants to engineer high-multiple trade sales.'
        ],
        results: [
          { label: 'Assets Under Management', value: '$150M', description: 'Final closing reached with 18% oversubscription.' },
          { label: 'Scale-ups Funded', value: '14', description: 'Operating across 11 nations with audited profitability.' },
          { label: 'End Users Served', value: '18M+', description: 'Gaining access to formal digital payments and banking.' },
          { label: 'Gross Portfolio IRR', value: '27.4%', description: 'Materially outperforming regional benchmark indexes.' }
        ],
        quote: {
          text: "David built an unshakeable bridge of trust between conservative Swiss private banks and the vibrant dynamism of African enterprise.",
          author: 'Alexandre von Bernstorff',
          role: 'Senior Partner, Geneva Private Wealth Alliance'
        },
        gallery: [
          { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', caption: 'Real-time performance portfolio intelligence analytics system' },
          { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop', caption: 'Annual General Meeting with institutional LPs and portfolio company founders' },
          { url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop', caption: 'Verification of multi-jurisdiction regulatory compliance and bank-grade cyber resilience' },
          { url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop', caption: 'Executive valuation committee aligning liquidity pathways' },
          { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop', caption: 'Regional scale-up workshop expanding cross-border commerce operations' }
        ]
      },
      {
        slug: 'hub-logistique-portuaire-atlantique',
        title: 'Multimodal Dry Port & Strategic Trade Logistics Hub',
        category: 'Logistics & Global Trade',
        client: 'Port Holding Corporation & Ministry of Transport',
        year: '2021 - 2023',
        shortDescription: 'Turnkey delivery of a 120-hectare multimodal dry port corridor cutting regional trade transit timelines by 45%.',
        coverImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
        context: 'Chronic bottlenecks along vital import-export corridors previously inflicted 21-day average dwell times per freight container. The mandate was to engineer and finance an advanced dry port with direct bonded rail and expressway connectivity.',
        role: 'Chief Strategic Advisor to the Operating Consortium. Directed master planning, customs bonded free-zone accords, and negotiated exclusivity arrangements with global shipping lines.',
        methodology: [
          'Engineered a digital single-window portal integrated with national customs services.',
          'Constructed heavy-duty bonded container yards and climate-controlled cold storage facilities.',
          'Secured long-term anchor commitments with world-leading shipping liners (Maersk, CMA CGM, MSC).',
          'Structured an oversubscribed Green Bond financing 100% electrified cargo handling machinery.'
        ],
        results: [
          { label: 'Transit Turnaround', value: '-45%', description: 'Clearance dropped from 21 days to under 4 business days.' },
          { label: 'Annual Handling Volume', value: '450,000 TEU', description: 'Twenty-foot equivalent container throughput capacity.' },
          { label: 'Capital Invested', value: '$285M', description: 'Delivered strictly on schedule without budget cost overruns.' },
          { label: 'Local Employment', value: '2,800', description: 'Direct jobs supported through certified technical training programs.' }
        ],
        quote: {
          text: "Through David Kayi Kinkela's unwavering tenacity and diplomatic acumen, what was once a conceptual plan became the lifeblood of our regional trade corridor.",
          author: 'Hon. Jean-Marc Mbemba',
          role: 'Former Minister of Infrastructure & Transport Corridors'
        },
        gallery: [
          { url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop', caption: 'Aerial panoramic perspective of container terminals and bonded rail lines' },
          { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop', caption: 'Automated temperature-controlled pharmaceutical and agricultural warehouses' },
          { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop', caption: 'Zero-emission electric gantry cranes reducing port carbon footprint' },
          { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop', caption: 'Central digital operations nerve room with satellite freight tracking' },
          { url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop', caption: 'Inaugural ribbon cutting and handover of first bonded transit bills' }
        ]
      }
    ],
    testimonialsTitle: 'Endorsements & Fiduciary Trust',
    testimonialsSubtitle: 'Reflections from international partners, fellow board members, and institutional leaders.',
    testimonials: [
      {
        id: '1',
        name: 'Édouard de La Baume',
        role: 'Managing Partner',
        company: 'La Baume Capital Partners (Paris / London)',
        quote: 'David possesses the rare ability to transition seamlessly between the discreet boardrooms of Swiss private wealth and the intense industrial ground realities of Central Africa. An ally of incomparable worth.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
      {
        id: '2',
        name: 'Aïssatou Traoré Diallo',
        role: 'Chief Executive Officer',
        company: 'West Africa Infrastructure Fund',
        quote: 'During our complex syndication negotiations for the hydroelectric facility, David’s legal rigor and command unlocked deadlocks many considered impossible. His integrity commands respect.',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
      {
        id: '3',
        name: 'Henrik van Der Meer',
        role: 'Chairman of the Board',
        company: 'Nordic Commodities & Energy Group',
        quote: 'A formidable analytical intellect paired with subtle business diplomacy. David creates lasting value where others perceive only insurmountable obstacles.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
      {
        id: '4',
        name: 'Prof. Mamadou Sangaré',
        role: 'Former Minister of Economy',
        company: 'Regional Economic Council',
        quote: 'David Kayi Kinkela embodies the new vanguard of African builders: impeccably trained, sovereign in decision-making, and committed to lasting community prosperity.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
      {
        id: '5',
        name: 'Béatrice de Saint-Aubin',
        role: 'Senior Vice-President M&A',
        company: 'International Private Merchant Bank',
        quote: 'Every transaction led alongside David closed with exceptional documentary precision and tactical foresight. He defends his partners’ interests as rigorously as his own.',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
      {
        id: '6',
        name: 'Tariq Al-Mansoor',
        role: 'Head of Strategic Deployments',
        company: 'Gulf & Africa Sovereign Horizon Fund',
        quote: 'Teaming with David Kinkela on our regional infrastructure co-investments has been a masterclass in execution. His Rolodex and fiduciary stamina are peerless.',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
        rating: 5,
      },
    ],
    bookingTitle: 'Schedule an Executive Briefing',
    bookingSubtitle: 'Book a direct strategic consultation or an introductory advisory meeting with the executive office of David Kayi Kinkela.',
    calendlyUrl: 'https://calendly.com',
    contactTitle: 'Direct Inquiries & Office',
    contactSubtitle: 'For institutional partnerships, board appointments, or high-level investment opportunities.',
    contactInfo: {
      email: 'contact@davidkayikinkela.com',
      phone: '+243 81 000 0000',
      whatsappNumber: '243810000000',
      whatsappMessage: 'Hello Mr. David Kayi Kinkela, I am reaching out through your business portfolio to discuss a strategic partnership.',
      address: 'River Commercial Tower, Boulevard du 30 Juin, Gombe, Kinshasa · DRC',
      mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.887611029279!2d15.293427!3d-4.305452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33c2e1763fd7%3A0xbcf03a302636f2f2!2sGombe%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1700000000000!5m2!1sfr!2scd',
    },
    socials: [
      {
        platform: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/david-kayi-kinkela',
        icon: 'Linkedin',
      },
      {
        platform: 'twitter',
        label: 'X / Twitter',
        url: 'https://twitter.com/david_kinkela',
        icon: 'Twitter',
      },
      {
        platform: 'email',
        label: 'Direct Email',
        url: 'mailto:contact@davidkayikinkela.com',
        icon: 'Mail',
      },
    ],
    footerNote: 'Site réalisé par Nexera',
  },
};
