'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { PdfPageConfig } from '@/types/page';

export default function PdfPage({ config }: { config: PdfPageConfig }) {
    const downloadLabel = config.download_label || 'Download PDF';
    const openLabel = config.open_label || 'Open in new tab';
    const fallbackText = config.fallback_text || 'Your browser cannot display this PDF inline.';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="mb-6 sm:flex sm:items-end sm:justify-between sm:gap-6">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-3">
                        {config.title}
                    </h1>
                    {config.description && (
                        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-500">
                            {config.description}
                        </p>
                    )}
                </div>

                <div className="mt-4 sm:mt-0 flex flex-wrap gap-2">
                    <a
                        href={config.source}
                        download
                        className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
                    >
                        <Download className="h-4 w-4" aria-hidden="true" />
                        {downloadLabel}
                    </a>
                    <a
                        href={config.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus:ring-offset-neutral-900"
                    >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        {openLabel}
                    </a>
                </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
                <object
                    data={config.source}
                    type="application/pdf"
                    aria-label={`${config.title} PDF`}
                    className="h-[75vh] min-h-[520px] w-full sm:min-h-[640px]"
                >
                    <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 p-8 text-center">
                        <p className="text-neutral-600 dark:text-neutral-500">{fallbackText}</p>
                        <a
                            href={config.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-accent hover:text-accent-dark"
                        >
                            {openLabel}
                        </a>
                    </div>
                </object>
            </div>
        </motion.div>
    );
}
