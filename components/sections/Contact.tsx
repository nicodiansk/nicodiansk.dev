// ABOUTME: Contact section with command-line inspired layout displaying contact links
// ABOUTME: Features email, LinkedIn, GitHub, GitLab with official brand logos and cyberpunk terminal aesthetic

'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import { Mail, CheckCircle, Lock } from 'lucide-react';
import { SiLinkedin, SiGithub, SiGitlab } from 'react-icons/si';
import { textColorClasses } from '@/lib/colorClasses';
import aboutDataRaw from '@/data/about.json';
import { AboutData } from '@/types/data';

const aboutData = aboutDataRaw as AboutData;

export default function Contact() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      label: t.contact.email,
      value: aboutData.contact.email,
      href: `mailto:${aboutData.contact.email}`,
      Icon: Mail,
      color: 'cyan' as const,
    },
    {
      label: t.contact.linkedin,
      value: 'LinkedIn Profile',
      href: aboutData.contact.linkedin,
      Icon: SiLinkedin,
      color: 'magenta' as const,
    },
    {
      label: 'GitHub',
      value: 'GitHub Profile',
      href: aboutData.contact.github,
      Icon: SiGithub,
      color: 'lime' as const,
    },
    {
      label: t.contact.gitlab,
      value: 'GitLab Profile',
      href: aboutData.contact.gitlab,
      Icon: SiGitlab,
      color: 'yellow' as const,
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative flex items-center">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-cyber-cyan mb-2 font-mono">
            {t.contact.title}
          </h2>
          <p className="text-gray-400">{t.contact.subtitle}</p>
        </div>

        {/* Terminal-style contact interface */}
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-cyber-cyan bg-black/80 p-8 md:p-12">
            {/* Terminal header */}
            <div className="border-b border-cyber-cyan pb-4 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-4 text-gray-400 font-mono text-sm">
                  contact_terminal.sh
                </span>
              </div>
              <p className="text-cyber-cyan font-mono text-sm animate-flicker">
                $ ./initiate_connection.sh --mode=contact
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              {contactMethods.map((method, idx) => {
                const IconComponent = method.Icon;
                const textColor = textColorClasses[method.color];
                return (
                  <div key={idx} className="font-mono">
                    <div className="flex items-start gap-3 mb-2">
                      <IconComponent className={`w-6 h-6 ${textColor}`} />
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">
                          &gt; PROTOCOL: {method.label.toUpperCase()}
                        </p>
                        <a
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`${textColor} hover:text-shadow-neon transition-all duration-300 break-all`}
                        >
                          {method.value}
                        </a>
                      </div>
                      <span className="text-cyber-lime text-sm whitespace-nowrap">
                        [ACTIVE]
                      </span>
                    </div>
                    {idx < contactMethods.length - 1 && (
                      <div className="border-t border-gray-800 my-4"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Connection status footer */}
            <div className="border-t border-cyber-cyan pt-6 mt-8">
              <div className="flex items-center justify-between text-sm font-mono">
                <span className="text-gray-500">CONNECTION_STATUS:</span>
                <span className="text-cyber-lime animate-neon-glow flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  {t.errors.transmitted}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm font-mono mt-2">
                <span className="text-gray-500">ENCRYPTION:</span>
                <span className="text-cyber-cyan flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  TLS_v1.3 [SECURE]
                </span>
              </div>
            </div>
          </div>

          {/* Quick contact buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <a
              href={`mailto:${aboutData.contact.email}`}
              className="border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark transition-all duration-300 p-4 text-center font-mono font-bold"
            >
              Email
            </a>
            <a
              href={aboutData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-cyber-dark transition-all duration-300 p-4 text-center font-mono font-bold"
            >
              LinkedIn
            </a>
            <a
              href={aboutData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyber-lime text-cyber-lime hover:bg-cyber-lime hover:text-cyber-dark transition-all duration-300 p-4 text-center font-mono font-bold"
            >
              GitHub
            </a>
            <a
              href={aboutData.contact.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow hover:text-cyber-dark transition-all duration-300 p-4 text-center font-mono font-bold"
            >
              GitLab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
