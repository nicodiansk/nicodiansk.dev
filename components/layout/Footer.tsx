// ABOUTME: Footer component with system status display, fake uptime metrics, and social links
// ABOUTME: Features cyberpunk terminal aesthetic with version info and Made in Bergamo branding

'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import aboutDataRaw from '@/data/about.json';
import { AboutData } from '@/types/data';

const aboutData = aboutDataRaw as AboutData;

export default function Footer() {
  const { t } = useLanguage();
  const [uptime, setUptime] = useState('00:00:00');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const startTime = Date.now();

    const updateUptime = () => {
      const elapsed = Date.now() - startTime;
      const hours = Math.floor(elapsed / 3600000);
      const minutes = Math.floor((elapsed % 3600000) / 60000);
      const seconds = Math.floor((elapsed % 60000) / 1000);

      setUptime(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
          seconds
        ).padStart(2, '0')}`
      );
    };

    const interval = setInterval(updateUptime, 1000);
    updateUptime();

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: 'Email',
      href: `mailto:${aboutData.contact.email}`,
      icon: '📧',
    },
    {
      name: 'LinkedIn',
      href: aboutData.contact.linkedin,
      icon: '💼',
    },
    {
      name: 'GitLab',
      href: aboutData.contact.gitlab,
      icon: '🦊',
    },
  ];

  return (
    <footer className="bg-black border-t-2 border-cyber-cyan relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* System Status */}
          <div className="space-y-3">
            <h3 className="text-cyber-cyan font-mono font-bold mb-4 text-sm">
              &gt; {t.footer.status}
            </h3>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">STATUS:</span>
                <span className="text-cyber-lime">● ONLINE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">{t.footer.uptime}:</span>
                <span className="text-cyber-cyan">{uptime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">AVAILABILITY:</span>
                <span className="text-cyber-lime">99.99%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">LATENCY:</span>
                <span className="text-cyber-yellow">&lt;50ms</span>
              </div>
            </div>
          </div>

          {/* Build Info */}
          <div className="space-y-3">
            <h3 className="text-cyber-magenta font-mono font-bold mb-4 text-sm">
              &gt; {t.footer.build}
            </h3>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">{t.footer.version}:</span>
                <span className="text-white">v1.0.0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">BUILD:</span>
                <span className="text-cyber-cyan">2025.12.06</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">ENV:</span>
                <span className="text-cyber-lime">PRODUCTION</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">{t.footer.builtWith}:</span>
                <span className="text-cyber-magenta">Next.js 16 + React 19</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-cyber-yellow font-mono font-bold mb-4 text-sm">
              &gt; CONNECT
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm group"
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="font-mono text-gray-400">
              <span className="text-cyber-cyan">&copy; {currentYear}</span> Nicholas Previtali.{' '}
              {t.footer.rights}
            </div>
            <div className="font-mono text-gray-400">
              <span className="text-cyber-magenta">❤️</span> {t.footer.madeIn}
            </div>
          </div>

          {/* Terminal footer */}
          <div className="mt-4 font-mono text-xs text-gray-600 text-center">
            <span className="text-cyber-lime">$</span> system.exit(0) → Connection closed by
            foreign host
          </div>
        </div>
      </div>
    </footer>
  );
}
