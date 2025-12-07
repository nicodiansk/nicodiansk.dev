# Session 6: Enhanced Project Detail Modal - Implementation Plan

**Status**: Ready for Implementation
**Estimated Effort**: 4.5 hours
**Branch**: `feature/content-magic-ui` (continue from Session 5)

---

## Overview

Transform basic project modals into immersive **Technical Deep Dive** experiences with structured sections, animated orbiting tech stack visualization, project-specific icons, and enhanced metrics display.

### User Decisions

- ✅ **Center Icons**: Project-specific (legal scale, shopping cart, AI brain, etc.)
- ✅ **Content Source**: Auto-generate from resume and existing descriptions
- ✅ **Animation Style**: Smooth & polished (300-400ms clean animations)
- ✅ **Orbit Count**: 6 technologies per project

---

## Design Structure

### Modal Sections (5 Total)

1. **📋 Overview** - 2-3 sentence problem + solution summary
2. **🎯 Challenge** - Business problem context and pain points
3. **⚙️ Solution** - Technical approach and implementation strategy
4. **🏗️ Architecture** - Orbiting tech stack + complete badge list below
5. **📊 Results** - Enhanced metrics with better keywords

### Tech Stack Visualization

- **Center**: Project-specific icon (⚖️ legal, 🛒 e-commerce, 🤖 AI agents, etc.)
- **Orbiting**: 6 primary technologies with real logos (SVG format)
- **Below**: Complete tech stack as small rounded badges
- **Animation**: Smooth 25-second orbit with CSS animations

### Enhanced Metrics

Current → New:
- "Dev Productivity ↑ 60-70%" → **"Team Velocity +60-70%"**
- "Content Opt Time ↓ 80%" → **"Time Saved 80%"**
- "Manual Work ↓ 100%" → **"Full Automation"**
- "Recall@10: 91%" → **"Retrieval Accuracy 91%"**

---

## Implementation Tasks

### Task 1: Foundation Setup (15 min)

**Create directories:**

```bash
mkdir -p public/images/tech-logos
mkdir -p public/images/project-icons
```

**Tech Logos to Download** (SVG from [Simple Icons](https://simpleicons.org/)):

```
openai.svg       # OpenAI logo
anthropic.svg    # Claude/Anthropic logo
google.svg       # Gemini/Google logo
neo4j.svg        # Neo4j logo
langchain.svg    # LangChain icon
pinecone.svg     # Pinecone logo
pytorch.svg      # PyTorch logo
fastapi.svg      # FastAPI logo
qdrant.svg       # Qdrant logo (or fallback)
weaviate.svg     # Weaviate logo (or fallback)
supabase.svg     # Supabase logo
react.svg        # React logo (fallback)
```

**Project Icons to Create/Download:**

```
dev-velocity.svg      # Code/terminal icon for DEV_VELOCITY_MCP
seo-engine.svg        # Search/magnifying glass for GEO_SEO_ENGINE
legal-docs.svg        # Legal scale/gavel for LEGAL_RAG_v2
vision-ai.svg         # Eye/camera for VISION_CLASSIFY
hr-assistant.svg      # People/chat bubble for HR_ASSISTANT
recommendations.svg   # Star/graph for HYBRID_RECSYS
```

**Sources:**
- Simple Icons: https://simpleicons.org/ (MIT license)
- LobeHub: https://lobehub.com/icons/ (AI/LLM icons)
- Lucide React: Fallback for missing logos

---

### Task 2: Create OrbitingCircles Component (45 min)

**File**: `components/ui/OrbitingCircles.tsx`

```tsx
// ABOUTME: Animated orbiting circles component for tech stack visualization
// ABOUTME: Uses CSS animations with configurable radius, duration, and direction

import React from "react"
import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  radius?: number
  path?: boolean
  iconSize?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 25,
  radius = 120,
  path = true,
  iconSize = 40,
  ...props
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-cyber-cyan/20 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            style={
              {
                "--duration": `${duration}s`,
                "--radius": `${radius}px`,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              "animate-orbit absolute flex size-[var(--icon-size)] transform-gpu items-center justify-center rounded-full bg-cyber-dark/80 border border-gray-700 backdrop-blur",
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
```

**Key Features:**
- Automatic angle calculation (360° / child count)
- CSS variables for flexibility (`--radius`, `--duration`, `--angle`)
- Optional orbit path visualization
- Reverse direction support
- Cyberpunk styling (dark bg, border, backdrop blur)

---

### Task 3: Add CSS Animations (10 min)

**File**: `app/globals.css`

Add after existing animations:

```css
@theme inline {
  /* Existing animations... */

  /* Orbiting animation */
  --animate-orbit: orbit calc(var(--duration) * 1s) linear infinite;

  @keyframes orbit {
    0% {
      transform: rotate(calc(var(--angle) * 1deg))
        translateY(calc(var(--radius) * -1px))
        rotate(calc(var(--angle) * -1deg));
    }
    100% {
      transform: rotate(calc(var(--angle) * 1deg + 360deg))
        translateY(calc(var(--radius) * -1px))
        rotate(calc((var(--angle) * -1deg) - 360deg));
    }
  }
}
```

**Animation Explanation:**
- `rotate(angle)` - Position element at starting angle
- `translateY(-radius)` - Move element outward from center
- `rotate(-angle)` - Keep element upright (counter-rotate)
- Loop from 0° to 360° for smooth infinite orbit

---

### Task 4: Create Tech Logo Utility (30 min)

**File**: `lib/techLogos.ts`

```typescript
// ABOUTME: Maps technology names to logo SVG paths with fallback strategy
// ABOUTME: Supports project-specific icons and handles missing logos gracefully

export const TECH_LOGO_MAP: Record<string, string> = {
  // AI Models & Providers
  'OpenAI': '/images/tech-logos/openai.svg',
  'Claude': '/images/tech-logos/anthropic.svg',
  'Gemini': '/images/tech-logos/google.svg',
  'GPT-4': '/images/tech-logos/openai.svg',
  'GPT-4o': '/images/tech-logos/openai.svg',

  // Frameworks & Tools
  'LangChain': '/images/tech-logos/langchain.svg',
  'LangGraph': '/images/tech-logos/langchain.svg',
  'MCP': '/images/tech-logos/anthropic.svg',

  // Databases
  'Neo4j': '/images/tech-logos/neo4j.svg',
  'Pinecone': '/images/tech-logos/pinecone.svg',
  'Qdrant': '/images/tech-logos/qdrant.svg',
  'Weaviate': '/images/tech-logos/weaviate.svg',
  'Supabase': '/images/tech-logos/supabase.svg',

  // ML/AI
  'PyTorch': '/images/tech-logos/pytorch.svg',
  'TensorFlow': '/images/tech-logos/tensorflow.svg',
  'ONNX': '/images/tech-logos/onnx.svg',

  // Backend
  'FastAPI': '/images/tech-logos/fastapi.svg',
  'Python': '/images/tech-logos/python.svg',

  // Other
  'Docker': '/images/tech-logos/docker.svg',
  'Kubernetes': '/images/tech-logos/kubernetes.svg',
  'RAG': '/images/tech-logos/ai-generic.svg',
  'Vector Search': '/images/tech-logos/ai-generic.svg',
}

export const PROJECT_ICON_MAP: Record<string, string> = {
  'dev-velocity-mcp': '/images/project-icons/dev-velocity.svg',
  'geo-seo-engine': '/images/project-icons/seo-engine.svg',
  'legal-rag-v2': '/images/project-icons/legal-docs.svg',
  'vision-classify': '/images/project-icons/vision-ai.svg',
  'hr-assistant': '/images/project-icons/hr-assistant.svg',
  'hybrid-recsys': '/images/project-icons/recommendations.svg',
}

export function getTechLogoPath(tech: string): string {
  return TECH_LOGO_MAP[tech] || '/images/tech-logos/default.svg'
}

export function getProjectIconPath(projectId: string): string {
  return PROJECT_ICON_MAP[projectId] || '/images/project-icons/default.svg'
}
```

---

### Task 5: Update Data Types (5 min)

**File**: `types/data.ts`

Add to Project interface:

```typescript
export interface Project {
  id: string
  status: string
  evolution?: BilingualText
  title: BilingualText
  description: BilingualText
  longDescription: BilingualText

  // NEW FIELDS
  overview: BilingualText        // 2-3 sentence summary
  challenge: BilingualText       // Business problem context
  solution: BilingualText        // Technical approach
  primaryTech: string[]          // 6 main technologies for orbiting

  techStack: string[]
  metrics: Metric[]
  tags: string[]
  year: number
  featured: boolean
}
```

---

### Task 6: Update Translation Keys (5 min)

**File**: `data/translations.json`

Add to both `en` and `it` sections:

```json
{
  "en": {
    "projects": {
      "overview": "Overview",
      "challenge": "The Challenge",
      "solution": "The Solution",
      "architecture": "Architecture",
      "results": "Results & Impact"
    }
  },
  "it": {
    "projects": {
      "overview": "Panoramica",
      "challenge": "La Sfida",
      "solution": "La Soluzione",
      "architecture": "Architettura",
      "results": "Risultati e Impatto"
    }
  }
}
```

---

### Task 7: Update Projects Data (60 min)

**File**: `data/projects.json`

Add 4 new fields to each project. Here's the content for all 6 projects:

#### 1. DEV_VELOCITY_MCP

```json
{
  "overview": {
    "en": "AI-powered development assistant reducing context-switching by 60-70%. Integrates project documentation from Confluence, Slack, and Jira into a unified AI coding context.",
    "it": "Assistente sviluppo AI riducendo context-switching del 60-70%. Integra documentazione progetto da Confluence, Slack e Jira in contesto AI coding unificato."
  },
  "challenge": {
    "en": "Development teams wasted 40-50% of productive time context-switching between scattered documentation sources. Engineers repeatedly asked 'Where is X documented?' leading to productivity loss and knowledge silos.",
    "it": "Team sviluppo sprecavano 40-50% tempo produttivo in context-switching tra fonti documentazione disperse. Ingegneri chiedevano ripetutamente 'Dove è documentato X?' causando perdita produttività e silos conoscenza."
  },
  "solution": {
    "en": "Architected MCP-based integration establishing Confluence, Slack, and Jira as Single Source of Truth (SSOT). Designed custom AI agents with single-scope responsibilities using advanced prompt engineering. Orchestrated multi-model cooperation (Claude + Gemini) enabling real-time documentation access within coding assistants (Claude Code, Cursor).",
    "it": "Architettato integrazione MCP stabilendo Confluence, Slack e Jira come Single Source of Truth (SSOT). Progettati agenti AI custom con responsabilità specifiche usando prompt engineering avanzato. Orchestrata cooperazione multi-modello (Claude + Gemini) abilitando accesso documentazione real-time in assistenti coding (Claude Code, Cursor)."
  },
  "primaryTech": ["Claude", "Gemini", "MCP", "LangGraph", "LangChain", "Jira"],
  "metrics": [
    {
      "label": { "en": "Team Velocity", "it": "Velocità Team" },
      "value": "+60-70%",
      "color": "lime"
    }
  ]
}
```

#### 2. GEO_SEO_ENGINE

```json
{
  "overview": {
    "en": "Automated e-commerce content optimization reducing manual work by 80%. Generates product descriptions, FAQs, JSON-LD markup, and multilingual content using GPT-4.",
    "it": "Ottimizzazione contenuti e-commerce automatizzata riducendo lavoro manuale dell'80%. Genera descrizioni prodotti, FAQ, markup JSON-LD e contenuti multilingua usando GPT-4."
  },
  "challenge": {
    "en": "E-commerce teams spent weeks manually writing product descriptions, FAQs, and structured data for thousands of SKUs. Content optimization for GEO/SEO was inconsistent across languages, hurting discoverability and conversion rates.",
    "it": "Team e-commerce spendevano settimane scrivendo manualmente descrizioni prodotti, FAQ e dati strutturati per migliaia SKU. Ottimizzazione contenuti per GEO/SEO era inconsistente tra lingue, danneggiando discoverability e tassi conversione."
  },
  "solution": {
    "en": "Built end-to-end AI pipeline using latest OpenAI models (GPT-4, GPT-4o) for automatic product enhancement. System generates SEO-optimized descriptions, comprehensive FAQs, JSON-LD schema markup, and adapts tone-of-voice across multiple languages while maintaining brand consistency.",
    "it": "Costruita pipeline AI end-to-end usando modelli OpenAI più recenti (GPT-4, GPT-4o) per enhancement automatico prodotti. Sistema genera descrizioni SEO-ottimizzate, FAQ complete, markup schema JSON-LD e adatta tono-di-voce su più lingue mantenendo consistenza brand."
  },
  "primaryTech": ["OpenAI", "GPT-4", "FastAPI", "Knowledge Graphs", "NLP", "Python"],
  "metrics": [
    {
      "label": { "en": "Time Saved", "it": "Tempo Risparmiato" },
      "value": "80%",
      "color": "cyan"
    }
  ]
}
```

#### 3. LEGAL_RAG_v2

```json
{
  "overview": {
    "en": "Legal document RAG system processing 100K+ Italian documents with 91% retrieval accuracy. Evolved from hybrid search to knowledge graph-enhanced retrieval.",
    "it": "Sistema RAG documenti legali processando 100K+ documenti italiani con 91% accuratezza retrieval. Evoluto da hybrid search a retrieval potenziato knowledge graph."
  },
  "challenge": {
    "en": "Legal professionals spent hours manually searching through 100K+ documents to find relevant precedents and cross-citations. Traditional keyword search missed semantic relationships between cases, leading to incomplete legal research and potential compliance risks.",
    "it": "Professionisti legali spendevano ore cercando manualmente tra 100K+ documenti per trovare precedenti e cross-citation rilevanti. Ricerca keyword tradizionale perdeva relazioni semantiche tra casi, causando ricerca legale incompleta e rischi compliance potenziali."
  },
  "solution": {
    "en": "Architected multi-year RAG platform evolution (2023→2025) implementing hybrid search (semantic + lexical) with Neo4j knowledge graphs. System tracks legal entity relationships, cross-citation networks, and precedent chains using domain-specific embeddings and vector databases (Pinecone, Qdrant). Achieved 91% recall@10 and 89% answer relevance validated by legal experts.",
    "it": "Architettata evoluzione piattaforma RAG multi-anno (2023→2025) implementando hybrid search (semantica + lessicale) con knowledge graphs Neo4j. Sistema traccia relazioni entità legali, reti cross-citation e catene precedenti usando embeddings domain-specific e vector databases (Pinecone, Qdrant). Raggiunto 91% recall@10 e 89% rilevanza risposte validato da esperti legali."
  },
  "primaryTech": ["LangChain", "Neo4j", "Pinecone", "GPT-4", "Hybrid Search", "Qdrant"],
  "metrics": [
    {
      "label": { "en": "Retrieval Accuracy", "it": "Accuratezza Retrieval" },
      "value": "91%",
      "color": "yellow"
    },
    {
      "label": { "en": "Answer Relevance", "it": "Rilevanza Risposte" },
      "value": "89%",
      "color": "magenta"
    }
  ]
}
```

#### 4. VISION_CLASSIFY

```json
{
  "overview": {
    "en": "CNN-based computer vision system eliminating 100% manual page classification work. Processes thousands of e-commerce pages with transfer learning and custom architectures.",
    "it": "Sistema computer vision CNN eliminando 100% lavoro classificazione manuale pagine. Processa migliaia pagine e-commerce con transfer learning e architetture custom."
  },
  "challenge": {
    "en": "E-commerce teams manually classified thousands of web pages by type (product, category, blog, etc.) for SEO optimization. This tedious work consumed hundreds of hours monthly and delayed content strategy rollouts.",
    "it": "Team e-commerce classificavano manualmente migliaia pagine web per tipo (prodotto, categoria, blog, ecc.) per ottimizzazione SEO. Questo lavoro tedioso consumava centinaia ore mensili e ritardava rollout strategia contenuti."
  },
  "solution": {
    "en": "Developed complete ML pipeline—data collection, labeling, training, validation, monitoring—using CNN-based computer vision models. Implemented transfer learning and custom architectures for image classification, object detection, and visual similarity search. Integrated with Qdrant vector database for fast retrieval, enabling downstream SEO automation.",
    "it": "Sviluppata pipeline ML completa—raccolta dati, labeling, training, validazione, monitoring—usando modelli computer vision CNN. Implementato transfer learning e architetture custom per classificazione immagini, object detection e similarity search visiva. Integrato con Qdrant vector database per retrieval veloce, abilitando automazione SEO downstream."
  },
  "primaryTech": ["PyTorch", "Qdrant", "Transfer Learning", "ONNX", "Computer Vision", "Python"],
  "metrics": [
    {
      "label": { "en": "Full Automation", "it": "Automazione Completa" },
      "value": "100%",
      "color": "magenta"
    }
  ]
}
```

#### 5. HR_ASSISTANT

```json
{
  "overview": {
    "en": "Conversational AI chatbot improving HR query accuracy by 45%. Evolved from rule-based NLP to full RAG architecture with Supabase vector store.",
    "it": "Chatbot AI conversazionale migliorando accuratezza query HR del 45%. Evoluto da NLP rule-based ad architettura RAG completa con Supabase vector store."
  },
  "challenge": {
    "en": "Employees spent hours navigating scattered HR documentation to find PTO balances, room booking procedures, and company policies. HR teams were overwhelmed with repetitive questions, reducing time for strategic initiatives.",
    "it": "Dipendenti spendevano ore navigando documentazione HR dispersa per trovare bilanci ferie, procedure prenotazione sale e policy aziendali. Team HR erano sopraffatti da domande ripetitive, riducendo tempo per iniziative strategiche."
  },
  "solution": {
    "en": "Built multi-year chatbot evolution (2023→2025) migrating from rule-based NLP to full RAG architecture with Supabase vector store and semantic search. System handles PTO queries, room bookings, newsletter summaries, and policy lookups. Integrated with internal APIs implementing guardrails and human-in-the-loop escalation for sensitive requests.",
    "it": "Costruita evoluzione chatbot multi-anno (2023→2025) migrando da NLP rule-based ad architettura RAG completa con Supabase vector store e semantic search. Sistema gestisce query ferie, prenotazioni sale, riassunti newsletter e lookup policy. Integrato con API interne implementando guardrails ed escalation human-in-the-loop per richieste sensibili."
  },
  "primaryTech": ["LangChain", "Supabase", "RAG", "Vector Search", "FastAPI", "NLP"],
  "metrics": [
    {
      "label": { "en": "Query Accuracy", "it": "Accuratezza Query" },
      "value": "+45%",
      "color": "cyan"
    }
  ]
}
```

#### 6. HYBRID_RECSYS

```json
{
  "overview": {
    "en": "Low-latency recommendation engine delivering sub-100ms response times. Combines collaborative filtering with vector similarity for personalized e-commerce discovery.",
    "it": "Motore raccomandazioni low-latency con tempi risposta sub-100ms. Combina collaborative filtering con similarity vettoriale per discovery e-commerce personalizzata."
  },
  "challenge": {
    "en": "E-commerce platforms needed real-time product recommendations without increasing infrastructure costs. Traditional collaborative filtering was too slow (<100ms requirement), while pure vector search missed collaborative signals from user behavior.",
    "it": "Piattaforme e-commerce necessitavano raccomandazioni prodotti real-time senza aumentare costi infrastruttura. Collaborative filtering tradizionale era troppo lento (requisito <100ms), mentre vector search puro perdeva segnali collaborativi da comportamento utenti."
  },
  "solution": {
    "en": "Built low-latency hybrid recommendation engine combining collaborative filtering with vector similarity search. System leverages semantic ranking, embeddings, vector search, and knowledge-graph signals for personalized product discovery. Engineered for minimal compute overhead while maintaining strict sub-100ms response times for real-time user experience.",
    "it": "Costruito motore raccomandazioni ibrido low-latency combinando collaborative filtering con vector similarity search. Sistema sfrutta semantic ranking, embeddings, vector search e segnali knowledge-graph per product discovery personalizzata. Progettato per minimo overhead computazionale mantenendo tempi risposta rigorosi sub-100ms per esperienza utente real-time."
  },
  "primaryTech": ["Embeddings", "Semantic Ranking", "Vector Search", "Collaborative Filtering", "Knowledge Graphs", "Python"],
  "metrics": [
    {
      "label": { "en": "Response Time", "it": "Tempo Risposta" },
      "value": "<100ms",
      "color": "lime"
    }
  ]
}
```

---

### Task 8: Redesign Project Modal (90 min)

**File**: `components/sections/Projects.tsx`

Replace modal section (lines 122-194) with new structure:

```tsx
import { motion, AnimatePresence } from 'framer-motion'
import { OrbitingCircles } from '@/components/ui/OrbitingCircles'
import { getTechLogoPath, getProjectIconPath } from '@/lib/techLogos'
import Image from 'next/image'

// ... existing imports and component code ...

// Color mapping for metrics
const textColorClasses = {
  lime: 'text-cyber-lime',
  cyan: 'text-cyber-cyan',
  yellow: 'text-cyber-yellow',
  magenta: 'text-cyber-magenta',
}

// Replace the modal JSX (lines 122-194):
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
        className="bg-cyber-dark border-2 border-cyber-cyan max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 rounded-xl shadow-2xl shadow-cyber-cyan/20"
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

        {/* Section 4: Architecture - Orbiting Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="mb-8"
        >
          <h4 className="text-cyber-cyan font-bold mb-6 flex items-center gap-2">
            <span>🏗️</span> {t.projects.architecture}
          </h4>

          {/* Orbiting Circles Container */}
          <div className="relative h-[320px] w-full flex items-center justify-center mb-6">
            {/* Center Project Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 rounded-full bg-cyber-dark border-2 border-cyber-cyan flex items-center justify-center shadow-lg shadow-cyber-cyan/30">
                <Image
                  src={getProjectIconPath(selectedProjectData.id)}
                  alt={selectedProjectData.title[language]}
                  width={48}
                  height={48}
                  className="opacity-80"
                />
              </div>
            </div>

            {/* Orbiting Tech Logos */}
            <OrbitingCircles
              radius={120}
              duration={25}
              iconSize={50}
            >
              {selectedProjectData.primaryTech.map((tech) => (
                <Image
                  key={tech}
                  src={getTechLogoPath(tech)}
                  alt={tech}
                  width={32}
                  height={32}
                  className="opacity-90"
                  title={tech}
                />
              ))}
            </OrbitingCircles>
          </div>

          {/* Complete Tech Stack Badges */}
          <div>
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
```

**Key Features:**
- Smooth entrance/exit animations (scale + fade + slide)
- Staggered section appearance (100ms delays)
- Project-specific center icon with 6 tech logos orbiting
- 5 distinct sections with emoji icons
- Enhanced metrics display with backgrounds
- Maintains bilingual support
- Accessible (keyboard, ARIA, focus management)

---

## Testing Checklist

### Visual Testing
- [ ] All 6 projects display correctly with unique center icons
- [ ] 6 tech logos orbit smoothly (25s duration)
- [ ] Orbit path visible as subtle cyan circle
- [ ] Tech logos maintain proper orientation (stay upright)
- [ ] All 5 sections appear with correct content
- [ ] Metrics display with correct colors (lime, cyan, yellow, magenta)
- [ ] Complete tech stack badges show below orbiting visualization

### Animation Testing
- [ ] Modal entrance: smooth scale + fade + slide up (400ms)
- [ ] Modal exit: smooth scale down + fade (300ms)
- [ ] Backdrop fade in/out (300ms)
- [ ] Section stagger: 100ms delays between sections
- [ ] No animation jank or stuttering
- [ ] Orbiting circles maintain 60fps

### Responsive Testing
- [ ] Desktop (>1024px): Full layout with orbit radius 120px
- [ ] Tablet (640-1024px): Reduced orbit radius to 100px
- [ ] Mobile (<640px): Orbit radius 80px, smaller icons
- [ ] Modal scrolls correctly when content exceeds viewport
- [ ] Touch interactions work on mobile (tap to close backdrop)

### Accessibility Testing
- [ ] Modal opens with correct ARIA attributes
- [ ] ESC key closes modal
- [ ] Focus trapped within modal when open
- [ ] Close button has aria-label
- [ ] Keyboard navigation works (Tab, Shift+Tab)
- [ ] Screen reader announces modal correctly

### Bilingual Testing
- [ ] All 5 sections display in Italian when IT selected
- [ ] All 5 sections display in English when EN selected
- [ ] Metric labels switch correctly between languages
- [ ] No text overflow in either language

### Browser Testing
- [ ] Chrome/Edge (Chromium) - Full support
- [ ] Firefox - CSS animations work correctly
- [ ] Safari - Webkit animations render properly
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing
- [ ] Modal opens/closes in <500ms
- [ ] No layout shift when modal appears
- [ ] Images load within 1s (consider lazy loading)
- [ ] Smooth 60fps orbiting animation
- [ ] No memory leaks (open/close 10+ times)

---

## Files Summary

### New Files (4)
1. `components/ui/OrbitingCircles.tsx` (~150 lines)
2. `lib/techLogos.ts` (~40 lines)
3. `public/images/tech-logos/` (12 SVG files)
4. `public/images/project-icons/` (6 SVG files)

### Modified Files (5)
1. `components/sections/Projects.tsx` (~200 lines changed)
2. `data/projects.json` (~300 lines added)
3. `types/data.ts` (+4 lines)
4. `app/globals.css` (+20 lines)
5. `data/translations.json` (+10 lines)

---

## Success Criteria

✅ **Functionality:**
- All 6 projects display with new 5-section structure
- 6 technologies orbit around project-specific center icon
- Smooth animations (entrance, exit, section stagger)
- Complete tech stack shown as badges below orbiting visualization

✅ **Content Quality:**
- Auto-generated Overview/Challenge/Solution extracted from resume
- Enhanced metric labels (Team Velocity, Time Saved, etc.)
- Bilingual support maintained throughout (IT/EN)

✅ **Visual Polish:**
- Cyberpunk aesthetic maintained (cyan borders, dark bg, glows)
- Modern rounded corners and smooth transitions
- Project-specific icons create unique identity
- Real tech logos from Simple Icons/LobeHub

✅ **Technical Quality:**
- No TypeScript errors
- Successful build (`npm run build`)
- 60fps animations
- Accessible (ARIA, keyboard, screen readers)
- Responsive (mobile/tablet/desktop)

---

## Resources

- **Simple Icons**: https://simpleicons.org/ (12,000+ brand SVGs, MIT license)
- **LobeHub Icons**: https://lobehub.com/icons/ (AI/LLM specific icons)
- **Lucide Icons**: Fallback for missing logos (already installed)
- **Framer Motion Docs**: https://www.framer.com/motion/ (animation reference)
- **Magic UI Components**: https://magicui.design/docs/components (inspiration)

---

## Future Enhancements (Session 7+)

1. **Interactive Architecture Diagrams**: Add data flow visualizations with React Flow or D3.js
2. **Tech Stack Details on Hover**: Show tooltips with version info, purpose, alternatives
3. **Project Timeline Visualization**: Add interactive timeline showing evolution phases
4. **Metrics Graphs**: Replace static numbers with animated charts (chart.js, recharts)
5. **Demo Videos**: Embed project demo videos or GIFs
6. **Related Projects**: Show connections between projects (e.g., "Also uses Neo4j")

---

*Created: Session 5 | Ready for Implementation: Session 6*
