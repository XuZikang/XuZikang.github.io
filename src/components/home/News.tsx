'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMessages } from '@/lib/i18n/useMessages';
import { useLocaleStore } from '@/lib/stores/localeStore';

export interface NewsItem { date: string; content: string; }

export default function News({ items, title }: { items: NewsItem[]; title?: string }) {
  const messages = useMessages();
  const locale = useLocaleStore((state) => state.locale);
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 5);
  return (
    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="academic-content-block academic-news">
      <h2>{title || messages.home.news}</h2>
      <ol className="academic-news-list">
        {visibleItems.map((item, index) => (
          <li key={`${item.date}-${index}`}><span className="academic-news-dot" aria-hidden="true" /><time>{item.date}</time><p>{item.content}</p></li>
        ))}
      </ol>
      {items.length > 5 && (
        <button type="button" className="academic-news-toggle" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
          {expanded ? (locale === 'zh' ? '收起动态' : 'Show less') : (locale === 'zh' ? `查看全部 ${items.length} 条动态` : `View all ${items.length} updates`)}
        </button>
      )}
    </motion.section>
  );
}
