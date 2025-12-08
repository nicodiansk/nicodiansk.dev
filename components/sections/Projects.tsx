// ABOUTME: Projects section displaying 6 deployed AI systems with database-style cards
// ABOUTME: Features filtering by status, detail modals, metrics display, and bilingual support

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';
import projectsDataRaw from '@/data/projects.json';
import { ProjectsData } from '@/types/data';
import { textColorClasses } from '@/lib/colorClasses';
import GlitchText from '@/components/effects/GlitchText';
import { ArchitectureFlow } from '@/components/ui/ArchitectureFlow';

const projectsData = projectsDataRaw as ProjectsData;

export default function Projects() {
  const { language, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = projectsData.projects.filter(project =>
    filter === 'all' || project.status.toLowerCase() === filter.toLowerCase()
  );

  const selectedProjectData = projectsData.projects.find(p => p.id === selectedProject);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="min-h-screen py-20 bg-cyber-dark snap-start">
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
                className={`px-4 py-2 border transition-all duration-300 rounded-lg ${
                  filter === filterOption
                    ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10 shadow-lg shadow-cyber-cyan/20'
                    : 'border-gray-700 text-gray-400 hover:border-cyber-cyan/50 hover:bg-gray-800/30'
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
                className="relative border border-gray-800 hover:border-cyber-cyan transition-all duration-500 p-6 bg-gray-900 cursor-pointer group rounded-lg overflow-hidden"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 via-cyber-magenta/20 to-cyber-lime/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />

                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-2 relative z-10">
                      <span className={`px-2 py-1 text-xs font-bold rounded-md ${
                        project.status === 'LIVE' ? 'bg-cyber-lime/20 text-cyber-lime border border-cyber-lime/30' : 'bg-gray-700 text-gray-400'
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
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description[language]}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 border border-gray-600 text-gray-300 rounded-md bg-cyber-dark/80 hover:border-gray-400 transition-colors duration-200"
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
                        <span className="text-gray-400">{metric.label[language]}</span>
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
          <AnimatePresence>
            {selectedProjectData && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setSelectedProject(null);
                }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-cyber-dark border-2 border-cyber-cyan max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 rounded-xl shadow-2xl shadow-cyber-cyan/20 custom-scrollbar"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header with close button */}
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
                      className="text-gray-400 hover:text-cyber-cyan text-2xl transition-colors"
                    >
                      ×
                    </button>
                  </div>

                  {/* Section 1: Overview */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="mb-8"
                  >
                    <h4 className="text-cyber-magenta font-bold mb-3 flex items-center gap-2">
                      <span>📋</span> {t.projects.overview}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProjectData.overview[language]}
                    </p>
                  </motion.div>

                  {/* Section 2: Challenge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="mb-8"
                  >
                    <h4 className="text-cyber-yellow font-bold mb-3 flex items-center gap-2">
                      <span>🎯</span> {t.projects.challenge}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProjectData.challenge[language]}
                    </p>
                  </motion.div>

                  {/* Section 3: Solution */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="mb-8"
                  >
                    <h4 className="text-cyber-lime font-bold mb-3 flex items-center gap-2">
                      <span>⚙️</span> {t.projects.solution}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProjectData.solution[language]}
                    </p>
                  </motion.div>

                  {/* Section 4: Architecture Flow Diagram */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="mb-8"
                  >
                    <h4 className="text-cyber-cyan font-bold mb-6 flex items-center gap-2">
                      <span>🏗️</span> {t.projects.architecture}
                    </h4>

                    {/* Architecture Flow Diagram */}
                    <ArchitectureFlow
                      nodes={selectedProjectData.architecture.map(node => ({
                        ...node,
                        label: node.label[language]
                      }))}
                      connections={[]}
                    />

                    {/* Complete Tech Stack Badges */}
                    <div className="mt-6">
                      <p className="text-gray-400 text-sm mb-2">{t.projects.techStack}:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProjectData.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 border border-cyber-magenta/50 text-cyber-magenta text-sm rounded-md hover:bg-cyber-magenta/10 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Section 5: Results & Metrics */}
                  {selectedProjectData.metrics.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <h4 className="text-cyber-lime font-bold mb-4 flex items-center gap-2">
                        <span>📊</span> {t.projects.results}
                      </h4>
                      <div className="space-y-3">
                        {selectedProjectData.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                            <span className="text-gray-400">{metric.label[language]}</span>
                            <span className={`font-bold text-xl ${textColorClasses[metric.color]}`}>
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
