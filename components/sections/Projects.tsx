// ABOUTME: Projects section displaying 6 deployed AI systems with database-style cards
// ABOUTME: Features filtering by status, detail modals, metrics display, and bilingual support

'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import projectsDataRaw from '@/data/projects.json';
import { ProjectsData } from '@/types/data';
import { textColorClasses } from '@/lib/colorClasses';
import GlitchText from '@/components/effects/GlitchText';

const projectsData = projectsDataRaw as ProjectsData;

export default function Projects() {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projectsData.projects.filter(project =>
    filter === 'all' || project.status.toLowerCase() === filter.toLowerCase()
  );

  const selectedProjectData = projectsData.projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="min-h-screen py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText text={t.projects.title} className="text-cyber-cyan" />
            </h2>
            <p className="text-gray-400 text-lg">{t.projects.subtitle}</p>
          </div>

          {/* Filter buttons */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {['all', 'live'].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-4 py-2 border transition-all duration-300 ${
                  filter === filterOption
                    ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10'
                    : 'border-gray-700 text-gray-400 hover:border-cyber-cyan/50'
                }`}
              >
                {filterOption === 'all' ? t.projects.filterAll : t.projects.status.live}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border border-gray-800 hover:border-cyber-cyan transition-all duration-300 p-6 bg-cyber-dark/50 backdrop-blur cursor-pointer group"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-bold ${
                        project.status === 'LIVE' ? 'bg-cyber-lime/20 text-cyber-lime' : 'bg-gray-700 text-gray-400'
                      }`}>
                        {project.status}
                      </span>
                      {project.evolution && (
                        <span className="text-gray-500 text-xs italic">
                          {project.evolution[language]}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-cyber-cyan group-hover:text-cyber-lime transition-colors">
                      {project.title[language]}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description[language]}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 border border-gray-700 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div className="space-y-2">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{metric.label[language]}</span>
                        <span className={`font-bold ${textColorClasses[metric.color]}`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Project detail modal */}
          {selectedProjectData && (
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setSelectedProject(null);
              }}
            >
              <div
                className="bg-cyber-dark border-2 border-cyber-cyan max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 id="modal-title" className="text-3xl font-bold text-cyber-cyan mb-2">
                      {selectedProjectData.title[language]}
                    </h3>
                    {selectedProjectData.evolution && (
                      <p className="text-gray-500 text-sm italic">
                        {selectedProjectData.evolution[language]}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close modal"
                    className="text-gray-400 hover:text-cyber-cyan text-2xl"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProjectData.longDescription[language]}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-cyber-magenta font-bold mb-2">{t.projects.techStack}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 border border-cyber-magenta/50 text-cyber-magenta text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProjectData.metrics.length > 0 && (
                    <div>
                      <h4 className="text-cyber-lime font-bold mb-2">{t.projects.metrics}</h4>
                      <div className="space-y-2">
                        {selectedProjectData.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-gray-400">{metric.label[language]}</span>
                            <span className={`font-bold ${textColorClasses[metric.color]}`}>
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
