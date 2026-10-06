import { MetadataRoute } from 'next';
import { siteContent } from '@/src/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://davidkayikinkela.com';
  const currentDate = new Date().toISOString();

  const projectRoutes = siteContent.fr.projects.map((project) => ({
    url: `${baseUrl}/projets/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
