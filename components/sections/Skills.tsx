// ABOUTME: Skills section displaying tech proficiency across 4 categories (LLMs, ML/Vision, Infra, Vector DBs)
// ABOUTME: Features tabbed navigation, animated progress bars (0-100%), and bilingual skill descriptions

'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Brain, Eye, Server, Database } from 'lucide-react';
import skillsDataRaw from '@/data/skills.json';
import { SkillsData } from '@/types/data';
import { textColorClasses, bgColorClasses, borderColorClasses, bgOpacityClasses } from '@/lib/colorClasses';
import GlitchText from '@/components/effects/GlitchText';

const skillsData = skillsDataRaw as SkillsData;

export default function Skills() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(skillsData.categories[0].id);
  const [animateProgress, setAnimateProgress] = useState(false);

  const category = skillsData.categories.find(cat => cat.id === activeCategory);

  // Reset and trigger progress bar animation when category changes
  useEffect(() => {
    // Reset to 0% immediately
    setAnimateProgress(false);

    // Small delay to ensure reset renders, then animate to target width
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-b from-cyber-dark to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText text={t.skills.title} className="text-cyber-magenta" />
            </h2>
            <p className="text-gray-400 text-lg">{t.skills.subtitle}</p>
          </div>

          {/* Category tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-4 border-2 transition-all duration-300 text-left ${
                  activeCategory === cat.id
                    ? `${borderColorClasses[cat.color]} ${bgOpacityClasses[cat.color]}`
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className={`mb-2 ${activeCategory === cat.id ? textColorClasses[cat.color] : 'text-gray-500'}`}>
                  {cat.icon === 'brain' && <Brain className="w-8 h-8" />}
                  {cat.icon === 'eye' && <Eye className="w-8 h-8" />}
                  {cat.icon === 'server' && <Server className="w-8 h-8" />}
                  {cat.icon === 'database' && <Database className="w-8 h-8" />}
                </div>
                <div className={`font-bold text-sm ${activeCategory === cat.id ? textColorClasses[cat.color] : 'text-gray-400'}`}>
                  {cat.title[language]}
                </div>
              </button>
            ))}
          </div>

          {/* Skills grid */}
          {category && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {category.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="border border-gray-800 p-6 hover:border-cyber-cyan/50 transition-all duration-300 bg-black/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Skill name and level */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                    <span className={`text-sm font-bold ${textColorClasses[category.color]}`}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-900 h-2 mb-3 overflow-hidden">
                    <div
                      className={`h-full ${bgColorClasses[category.color]} transition-all duration-1000 ease-out`}
                      style={{
                        width: animateProgress ? `${skill.level}%` : '0%',
                      }}
                    />
                  </div>

                  {/* Skill details */}
                  <p className="text-gray-500 text-sm">{skill.details[language]}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
