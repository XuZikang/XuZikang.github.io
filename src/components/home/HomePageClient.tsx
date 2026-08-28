'use client';

import Profile from '@/components/home/Profile';
import About from '@/components/home/About';
import SelectedPublications from '@/components/home/SelectedPublications';
import News, { NewsItem } from '@/components/home/News';
import PublicationsList from '@/components/publications/PublicationsList';
import TextPage from '@/components/pages/TextPage';
import CardPage from '@/components/pages/CardPage';
import type { SiteConfig } from '@/lib/config';
import { Publication } from '@/types/publication';
import { CardPageConfig, PublicationPageConfig, TextPageConfig } from '@/types/page';
import { useLocaleStore } from '@/lib/stores/localeStore';

interface SectionConfig { id: string; type: 'markdown' | 'publications' | 'list'; title?: string; content?: string; publications?: Publication[]; items?: NewsItem[]; }
type PageData =
  | { type: 'about'; id: string; sections: SectionConfig[] }
  | { type: 'publication'; id: string; config: PublicationPageConfig; publications: Publication[] }
  | { type: 'text'; id: string; config: TextPageConfig; content: string }
  | { type: 'card'; id: string; config: CardPageConfig };

export interface HomePageLocaleData {
  author: SiteConfig['author']; social: SiteConfig['social']; features: SiteConfig['features']; enableOnePageMode?: boolean;
  researchInterests?: string[]; pagesToShow: PageData[];
}

export default function HomePageClient({ dataByLocale, defaultLocale }: { dataByLocale: Record<string, HomePageLocaleData>; defaultLocale: string }) {
  const locale = useLocaleStore((state) => state.locale);
  const data = dataByLocale[locale] || dataByLocale[defaultLocale] || Object.values(dataByLocale)[0];
  if (!data) return null;

  return (
    <div className="academic-homepage">
      <Profile author={data.author} social={data.social} features={data.features} researchInterests={data.researchInterests} />
      <div className="academic-section-stack">
        {data.pagesToShow.map((page) => (
          <section key={page.id} id={page.id} className="academic-page-section">
            {page.type === 'about' && page.sections.map((section) => {
              if (section.type === 'markdown') return <About key={section.id} content={section.content || ''} title={section.title} />;
              if (section.type === 'publications') return <SelectedPublications key={section.id} publications={section.publications || []} title={section.title} enableOnePageMode={data.enableOnePageMode} />;
              if (section.type === 'list') return <News key={section.id} items={section.items || []} title={section.title} />;
              return null;
            })}
            {page.type === 'publication' && <PublicationsList config={page.config} publications={page.publications} embedded />}
            {page.type === 'text' && <TextPage config={page.config} content={page.content} embedded />}
            {page.type === 'card' && <CardPage config={page.config} embedded />}
          </section>
        ))}
      </div>
    </div>
  );
}
