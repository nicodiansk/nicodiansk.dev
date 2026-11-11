import type { Metadata, Viewport } from 'next';
import '@fontsource/archivo-black/400.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import '@fontsource-variable/inter';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import { RoughFilters } from '@/components/primitives';

const description =
  'AI Engineering Lead and Head of AI at S.I. 2001. Production RAG, multi-agent systems and LLM evaluation for Fortune Global 500 clients.';

// Public URL of the deployed site (GitHub Pages). Social cards need absolute URLs.
const siteUrl = 'https://nicodiansk.github.io/nicodiansk.dev';
const shareTitle = 'Nicholas Previtali — AI that ships. Not just demos.';
// Rebuild with `npm run og` (scripts/og/og.html).
const ogImage = { url: `${siteUrl}/og.jpg`, width: 1200, height: 630, alt: 'Nicholas Previtali — AI Engineering Lead' };

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: 'Nicholas Previtali — AI Engineering Lead',
  description,
  keywords: ['AI Engineer', 'RAG', 'Multi-Agent Systems', 'LangGraph', 'MCP', 'LLM Evaluation', 'Head of AI', 'Bergamo'],
  authors: [{ name: 'Nicholas Previtali' }],
  openGraph: {
    title: shareTitle,
    description,
    type: 'website',
    url: `${siteUrl}/`,
    siteName: 'Nicholas Previtali',
    locale: 'en_US',
    alternateLocale: ['it_IT'],
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: shareTitle,
    description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: '#070707',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mark JS as available before paint so scroll-reveal content stays visible without JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <RoughFilters />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
