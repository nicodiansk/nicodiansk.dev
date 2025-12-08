// ABOUTME: About section displaying bio, mission, education, work experience, hobbies, and languages
// ABOUTME: Uses system info panel aesthetic with database-style layout and bilingual support

'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import aboutDataRaw from '@/data/about.json';
import { AboutData } from '@/types/data';

const aboutData = aboutDataRaw as AboutData;

export default function About() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="min-h-screen py-20 relative snap-start">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cyber-magenta mb-2 font-mono">
            {t.about.title}
          </h2>
          <p className="text-gray-400">{t.about.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column: Bio, Mission, Work */}
          <div className="space-y-6">
            {/* Bio Panel */}
            <div className="border-2 border-cyber-magenta bg-black/50 p-6 rounded-lg hover:shadow-lg hover:shadow-cyber-magenta/20 transition-shadow duration-500">
              <h3 className="text-xl font-bold text-cyber-cyan mb-4 font-mono">
                &gt; {t.about.bio}
              </h3>
              <p className="text-gray-300 leading-relaxed">{aboutData.bio[language]}</p>
            </div>

            {/* Mission Panel */}
            <div className="border-2 border-cyber-cyan bg-black/50 p-6 rounded-lg hover:shadow-lg hover:shadow-cyber-cyan/20 transition-shadow duration-500">
              <h3 className="text-xl font-bold text-cyber-lime mb-4 font-mono">
                &gt; {t.about.mission}
              </h3>
              <p className="text-cyber-lime text-lg font-semibold">
                "{aboutData.mission[language]}"
              </p>
            </div>

            {/* Current Work Panel */}
            <div className="border-2 border-cyber-yellow bg-black/50 p-6 rounded-lg hover:shadow-lg hover:shadow-cyber-yellow/20 transition-shadow duration-500">
              <h3 className="text-xl font-bold text-cyber-yellow mb-4 font-mono">
                &gt; {t.about.work}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-bold">{aboutData.work.current.role[language]}</p>
                    <p className="text-gray-400">{aboutData.work.current.company}</p>
                    <p className="text-gray-500 text-sm">{aboutData.work.current.location}</p>
                  </div>
                  <span className="text-cyber-cyan text-sm whitespace-nowrap ml-4">
                    {aboutData.work.current.period.display[language]}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm pt-2">
                  <div className="text-gray-400">
                    <span className="text-cyber-cyan">{t.about.team}:</span> {aboutData.work.current.team}
                  </div>
                  <div className="text-gray-400">
                    <span className="text-cyber-cyan">{t.about.projects}:</span> {aboutData.work.current.projects}
                  </div>
                </div>
                <ul className="space-y-2 pt-2">
                  {aboutData.work.current.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex gap-2">
                      <span className="text-cyber-cyan">▸</span>
                      <span>{highlight[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Education, Hobbies, Languages */}
          <div className="space-y-6">
            {/* Education Panel */}
            <div className="border-2 border-cyber-lime bg-black/50 p-6 rounded-lg hover:shadow-lg hover:shadow-cyber-lime/20 transition-shadow duration-500">
              <h3 className="text-xl font-bold text-cyber-lime mb-4 font-mono">
                &gt; {t.about.education}
              </h3>
              <div className="space-y-6">
                {aboutData.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-cyber-lime pl-4 rounded-r-md">
                    <p className="text-white font-bold">{edu.degree[language]}</p>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                    <p className="text-cyber-cyan text-sm mt-1">{edu.period.display[language]}</p>
                    {edu.grade && (
                      <p className="text-cyber-yellow text-sm mt-1">{edu.grade[language]}</p>
                    )}
                    <div className="mt-2 text-sm">
                      <p className="text-gray-300 font-semibold">{edu.thesis.title[language]}</p>
                      <p className="text-gray-400">{edu.thesis.description[language]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies Panel */}
            <div className="border-2 border-cyber-cyan bg-black/50 p-6 rounded-lg hover:shadow-lg hover:shadow-cyber-cyan/20 transition-shadow duration-500">
              <h3 className="text-xl font-bold text-cyber-cyan mb-4 font-mono">
                &gt; {t.about.hobbies}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {aboutData.hobbies.map((hobby, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <span className="text-cyber-magenta text-xl">●</span>
                    <span>{hobby.name[language]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Panel */}
            <div className="border-2 border-cyber-magenta bg-black/50 p-6 rounded-lg hover:shadow-lg hover:shadow-cyber-magenta/20 transition-shadow duration-500">
              <h3 className="text-xl font-bold text-cyber-magenta mb-4 font-mono">
                &gt; {t.about.languages}
              </h3>
              <div className="space-y-3">
                {aboutData.languages.map((lang, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white">{lang.name}</span>
                      <span className="text-cyber-cyan text-sm">{lang.level[language]}</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-cyber-magenta transition-all duration-500 rounded-full"
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-8 border-2 border-cyber-yellow bg-black/50 p-4 inline-block rounded-lg hover:shadow-lg hover:shadow-cyber-yellow/20 transition-shadow duration-500">
          <p className="text-gray-400">
            <span className="text-cyber-yellow">{t.about.location}:</span>{' '}
            <span className="text-white">
              {aboutData.location.city}, {aboutData.location.country}
            </span>
            <span className="text-gray-500 text-sm ml-2">
              [{aboutData.location.coordinates.lat}, {aboutData.location.coordinates.lng}]
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
