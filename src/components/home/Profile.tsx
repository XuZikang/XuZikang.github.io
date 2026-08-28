'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Github, GraduationCap, Mail, MapPin } from 'lucide-react';
import type { SiteConfig } from '@/lib/config';
import { useMessages } from '@/lib/i18n/useMessages';

interface ProfileProps {
  author: SiteConfig['author'];
  social: SiteConfig['social'];
  features: SiteConfig['features'];
  researchInterests?: string[];
}

export default function Profile({ author, social, researchInterests }: ProfileProps) {
  const messages = useMessages();
  const institutionLines = author.institution.includes(',')
    ? author.institution.split(/,\s*/)
    : author.institution.replace('人工智能研究院', '\n人工智能研究院').split('\n');
  const links = [
    social.email && { label: 'Email', href: `mailto:${social.email}`, icon: Mail },
    { label: 'CV', href: '/Zikang-Xu-CV-2026-05.pdf', icon: FileText },
    social.google_scholar && { label: 'Google Scholar', href: social.google_scholar, icon: GraduationCap },
    social.orcid && { label: 'ORCID', href: social.orcid, icon: BookOpen },
    social.github && { label: 'GitHub', href: social.github, icon: Github },
  ].filter(Boolean) as Array<{ label: string; href: string; icon: typeof Mail }>;

  return (
    <motion.header initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="academic-profile">
      <div className="academic-profile-copy">
        <p className="academic-eyebrow">{author.title}</p>
        <h1>{author.name}</h1>
        <p className="academic-institution">{institutionLines.map((line) => <span key={line}>{line}</span>)}</p>
        {researchInterests && researchInterests.length > 0 && (
          <div className="academic-interests" aria-label={messages.profile.researchInterests}>
            {researchInterests.map((interest) => <span key={interest}>{interest}</span>)}
          </div>
        )}
        <div className="academic-contact-links">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
              <Icon aria-hidden="true" /><span>{label}</span>
            </a>
          ))}
        </div>
        {(social.email || social.location) && (
          <div className="academic-contact-meta">
            {social.email && <span><Mail aria-hidden="true" />{social.email}</span>}
            {social.location && <span><MapPin aria-hidden="true" />{social.location}</span>}
          </div>
        )}
      </div>
      <div className="academic-portrait-frame">
        <Image src={author.avatar} alt={author.name} width={260} height={320} className="academic-portrait" priority />
        <span aria-hidden="true" className="academic-portrait-mark">ZX</span>
      </div>
    </motion.header>
  );
}
