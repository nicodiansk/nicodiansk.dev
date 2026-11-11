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

export const metadata: Metadata = {
  title: 'Nicholas Previtali — AI Engineering Lead',
  description,
  keywords: ['AI Engineer', 'RAG', 'Multi-Agent Systems', 'LangGraph', 'MCP', 'LLM Evaluation', 'Head of AI', 'Bergamo'],
  authors: [{ name: 'Nicholas Previtali' }],
  openGraph: {
    title: 'Nicholas Previtali — AI that ships. Not just demos.',
    description,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#070707',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <RoughFilters />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
