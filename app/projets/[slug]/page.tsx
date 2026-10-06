import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { siteContent } from '@/src/data/content';
import { ProjectDetailView } from '@/components/ProjectDetailView';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteContent.fr.projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = siteContent.fr.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Projet introuvable - David Kayi Kinkela',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://davidkayikinkela.com';

  return {
    title: `${project.title} | David Kayi Kinkela`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} - David Kayi Kinkela`,
      description: project.shortDescription,
      url: `${baseUrl}/projets/${project.slug}`,
      type: 'article',
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - David Kayi Kinkela`,
      description: project.shortDescription,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = siteContent.fr.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
