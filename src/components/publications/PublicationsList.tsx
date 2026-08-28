'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpenIcon, CalendarIcon, ClipboardDocumentIcon, DocumentTextIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import type { Publication } from '@/types/publication';
import type { PublicationPageConfig } from '@/types/page';
import { cn } from '@/lib/utils';
import { useMessages } from '@/lib/i18n/useMessages';
import { useLocaleStore } from '@/lib/stores/localeStore';
import FormattedBibTeXText from './FormattedBibTeXText';

interface PublicationsListProps {
  config: PublicationPageConfig;
  publications: Publication[];
  embedded?: boolean;
}

const themeOrder = ['fairness', 'medical-reasoning', 'medical-imaging', 'cytopathology', 'other'];

const themeLabels: Record<string, { en: string; zh: string }> = {
  fairness: { en: 'Fair & Trustworthy Medical AI', zh: '公平可信医疗人工智能' },
  'medical-reasoning': { en: 'Medical Multimodal Reasoning', zh: '医学多模态推理' },
  'medical-imaging': { en: 'Medical Image & Signal Analysis', zh: '医学影像与信号分析' },
  cytopathology: { en: 'Computational Cytopathology', zh: '计算细胞病理' },
  other: { en: 'Other Research', zh: '其他研究' },
};

function statusClass(label: string): string {
  const normalized = label.toLowerCase();
  if (normalized.includes('oral')) return 'publication-status publication-status-oral';
  if (normalized.includes('early')) return 'publication-status publication-status-early';
  return 'publication-status publication-status-neutral';
}

export default function PublicationsList({ config, publications, embedded = false }: PublicationsListProps) {
  const messages = useMessages();
  const locale = useLocaleStore((state) => state.locale);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<string | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedBibtexId, setExpandedBibtexId] = useState<string | null>(null);
  const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>(null);

  const years = useMemo(() => Array.from(new Set(publications.map((pub) => pub.year))).sort((a, b) => b - a), [publications]);
  const types = useMemo(() => Array.from(new Set(publications.map((pub) => pub.type))).sort(), [publications]);

  const filteredPublications = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return publications.filter((pub) => {
      const matchesSearch = !query || [pub.title, pub.journal, pub.conference, ...(pub.keywords || []), ...pub.authors.map((author) => author.name)]
        .filter(Boolean)
        .some((value) => value?.toLowerCase().includes(query));
      return matchesSearch && (selectedYear === 'all' || pub.year === selectedYear) && (selectedType === 'all' || pub.type === selectedType);
    });
  }, [publications, searchQuery, selectedType, selectedYear]);

  const groupedPublications = useMemo(() => {
    const groups = new Map<string, Publication[]>();
    filteredPublications.forEach((pub) => {
      const key = pub.theme || 'other';
      groups.set(key, [...(groups.get(key) || []), pub]);
    });
    return themeOrder.filter((key) => groups.has(key)).map((key) => ({ key, publications: groups.get(key) || [] }));
  }, [filteredPublications]);

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="academic-publications">
      <div className="mb-5">
        <h1 className={`${embedded ? 'text-2xl' : 'text-4xl'} font-serif font-bold text-primary mb-3`}>{config.title}</h1>
        {config.description && <p className="publication-legend">{config.description}</p>}
      </div>

      <div className="publication-controls">
        <div className="publication-search">
          <MagnifyingGlassIcon aria-hidden="true" />
          <input type="text" placeholder={messages.publications.searchPlaceholder} value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
        </div>
        <button type="button" className={cn('publication-filter-toggle', showFilters && 'is-active')} onClick={() => setShowFilters((value) => !value)}>
          <FunnelIcon aria-hidden="true" />{messages.publications.filters}
        </button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="publication-filter-panel">
            <div>
              <span><CalendarIcon aria-hidden="true" />{messages.publications.year}</span>
              <button type="button" className={selectedYear === 'all' ? 'is-active' : ''} onClick={() => setSelectedYear('all')}>{messages.common.all}</button>
              {years.map((year) => <button type="button" key={year} className={selectedYear === year ? 'is-active' : ''} onClick={() => setSelectedYear(year)}>{year}</button>)}
            </div>
            <div>
              <span><BookOpenIcon aria-hidden="true" />{messages.publications.type}</span>
              <button type="button" className={selectedType === 'all' ? 'is-active' : ''} onClick={() => setSelectedType('all')}>{messages.common.all}</button>
              {types.map((type) => <button type="button" key={type} className={selectedType === type ? 'is-active' : ''} onClick={() => setSelectedType(type)}>{type.replace('-', ' ')}</button>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {groupedPublications.length === 0 ? (
        <div className="publication-empty">{messages.publications.noResults}</div>
      ) : groupedPublications.map((group) => (
        <section key={group.key} className="publication-theme-group" data-theme={group.key}>
          <header className="publication-theme-header">
            <span aria-hidden="true" />
            <h2>{themeLabels[group.key]?.[locale === 'zh' ? 'zh' : 'en'] || themeLabels.other[locale === 'zh' ? 'zh' : 'en']}</h2>
            <small>{group.publications.length}</small>
          </header>
          <div className="publication-compact-list">
            {group.publications.map((pub) => (
              <article key={pub.id} className="publication-compact-item">
                <div className="publication-main-row">
                  <div className="publication-copy">
                    <h3><FormattedBibTeXText nodes={pub.titleNodes} fallback={pub.title} /></h3>
                    <p className="publication-authors">
                      {pub.authors.map((author, index) => (
                        <span key={`${pub.id}-${author.name}-${index}`}>
                          <span className={author.isHighlighted ? 'is-owner' : ''}>{author.name}</span>
                          {author.isCoAuthor && <sup title={locale === 'zh' ? '共同贡献' : 'Equal contribution'}>#</sup>}
                          {author.isCorresponding && <sup title={locale === 'zh' ? '通讯作者' : 'Corresponding author'}>†</sup>}
                          {index < pub.authors.length - 1 && ', '}
                        </span>
                      ))}
                    </p>
                    <div className="publication-meta-row">
                      <span className="publication-venue">{pub.journal || pub.conference} · {pub.year}</span>
                      {pub.note?.split(',').map((label) => <span key={label.trim()} className={statusClass(label)}>{label.trim()}</span>)}
                    </div>
                  </div>
                  <div className="publication-actions">
                    {pub.doi && <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">DOI</a>}
                    {pub.url && <a href={pub.url} target="_blank" rel="noopener noreferrer">Paper</a>}
                    {pub.code && <a href={pub.code} target="_blank" rel="noopener noreferrer">{messages.publications.code}</a>}
                    {pub.abstract && <button type="button" onClick={() => setExpandedAbstractId(expandedAbstractId === pub.id ? null : pub.id)} className={expandedAbstractId === pub.id ? 'is-active' : ''}><DocumentTextIcon aria-hidden="true" />{messages.publications.abstract}</button>}
                    {pub.bibtex && <button type="button" onClick={() => setExpandedBibtexId(expandedBibtexId === pub.id ? null : pub.id)} className={expandedBibtexId === pub.id ? 'is-active' : ''}><BookOpenIcon aria-hidden="true" />BibTeX</button>}
                  </div>
                </div>
                <AnimatePresence>
                  {expandedAbstractId === pub.id && pub.abstract && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="publication-detail"><p>{pub.abstract}</p></motion.div>}
                  {expandedBibtexId === pub.id && pub.bibtex && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="publication-detail publication-bibtex">
                      <pre>{pub.bibtex}</pre>
                      <button type="button" onClick={() => navigator.clipboard.writeText(pub.bibtex || '')} title={messages.common.copyToClipboard}><ClipboardDocumentIcon aria-hidden="true" /></button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            ))}
          </div>
        </section>
      ))}
    </motion.div>
  );
}
