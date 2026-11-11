// ABOUTME: Single source of truth for all portfolio copy, bilingual (EN/IT).
// ABOUTME: Content mirrors the CV in public/docs — update both together.

export type Lang = 'en' | 'it';
export type L = { en: string; it: string };
export type Accent = 'pink' | 'teal' | 'mustard' | 'cream';

export const profile = {
  name: 'Nicholas Previtali',
  handle: 'nicodiansk',
  role: { en: 'AI Engineering Lead', it: 'AI Engineering Lead' },
  location: 'Bergamo, Italy',
  email: 'nicholasprevitali96@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nicholas-previtali-660b83190',
  github: 'https://github.com/nicodiansk',
  cv: '/docs/Nicholas_Previtali_CV.pdf',
  photo: '/images/nicholas.jpg',
};

export const ui = {
  nav: {
    work: { en: 'work', it: 'progetti' },
    experience: { en: 'experience', it: 'esperienza' },
    stack: { en: 'stack', it: 'stack' },
    about: { en: 'about', it: 'chi sono' },
    cv: { en: 'Download CV', it: 'Scarica CV' },
  },
  hero: {
    eyebrow: { en: 'AI engineer · Bergamo, Italy', it: 'AI engineer · Bergamo' },
    lines: [
      { text: { en: 'Building AI', it: 'Costruisco AI' }, accent: 'cream' as Accent },
      { text: { en: 'that works', it: 'che funziona' }, accent: 'teal' as Accent },
      { text: { en: 'in production.', it: 'in produzione.' }, accent: 'pink' as Accent },
    ],
    intro: {
      en: 'I lead the AI unit at S.I. 2001. Together with a small team I design and build RAG, multi-agent and LLM evaluation systems for companies in legal, retail, e-commerce and HR.',
      it: 'Guido la unit AI di S.I. 2001. Con un piccolo team progetto e sviluppo sistemi RAG, multi-agente e di valutazione LLM per aziende nel legale, retail, e-commerce e HR.',
    },
    ctaWork: { en: 'See the work', it: 'Guarda i progetti' },
    ctaCv: { en: 'Download CV', it: 'Scarica il CV' },
  },
  stats: [
    { value: '5', label: { en: 'years in AI', it: 'anni in AI' } },
    { value: '10+', label: { en: 'projects in production', it: 'progetti in produzione' } },
    { value: '5+', label: { en: 'people in the team', it: 'persone nel team' } },
    { value: '91%', label: { en: 'legal RAG recall@10', it: 'recall@10 RAG legale' } },
  ],
  whatIDo: {
    eyebrow: { en: 'What I do', it: 'Cosa faccio' },
    title: [
      { en: 'From prototype', it: 'Dal prototipo' },
      { en: 'to production.', it: 'alla produzione.' },
    ],
    sub: {
      en: 'Most of my work is about the step after the demo: retrieval that holds up on real documents, agents with clear boundaries, and numbers that show whether it works.',
      it: 'Gran parte del mio lavoro è il passo dopo la demo: retrieval che regge su documenti veri, agenti con confini chiari e numeri che dicono se funziona.',
    },
  },
  work: {
    eyebrow: { en: '// selected work', it: '// progetti scelti' },
    title: [
      { en: 'Selected work', it: 'Progetti scelti' },
      { en: '2021 – today.', it: '2021 – oggi.' },
    ],
    open: { en: 'Read the case', it: 'Leggi il caso' },
    close: { en: 'Close', it: 'Chiudi' },
    challenge: { en: 'The problem', it: 'Il problema' },
    solution: { en: 'What we built', it: 'Cosa abbiamo costruito' },
    stack: { en: 'Stack', it: 'Stack' },
  },
  experience: {
    eyebrow: { en: 'Experience', it: 'Esperienza' },
    title: [
      { en: 'Where I work', it: 'Dove lavoro' },
      { en: 'S.I. 2001, since 2021.', it: 'S.I. 2001, dal 2021.' },
    ],
  },
  stack: {
    eyebrow: { en: 'Stack', it: 'Stack' },
    title: [
      { en: 'What I use', it: 'Cosa uso' },
      { en: 'day to day.', it: 'ogni giorno.' },
    ],
  },
  about: {
    eyebrow: { en: 'About', it: 'Chi sono' },
    title: [
      { en: 'Studies, research', it: 'Studi, ricerca' },
      { en: '& open source.', it: '& open source.' },
    ],
    education: { en: 'Education', it: 'Formazione' },
    openSource: { en: 'Open source', it: 'Open source' },
    research: { en: 'Research', it: 'Ricerca' },
    languages: { en: 'Languages', it: 'Lingue' },
    thesis: { en: 'Thesis', it: 'Tesi' },
  },
  contact: {
    eyebrow: { en: 'Contact', it: 'Contatti' },
    lines: [
      { text: { en: 'Working on', it: 'Stai lavorando' }, accent: 'cream' as Accent },
      { text: { en: 'something similar?', it: 'a qualcosa di simile?' }, accent: 'pink' as Accent },
      { text: { en: "Let's talk.", it: 'Parliamone.' }, accent: 'teal' as Accent },
    ],
    cta: { en: 'Write me', it: 'Scrivimi' },
    note: { en: 'Based in Bergamo, Italy.', it: 'Base a Bergamo.' },
    navigate: { en: 'Navigate', it: 'Naviga' },
    connect: { en: 'Connect', it: 'Contatti' },
    rights: {
      en: 'Made in Bergamo.',
      it: 'Fatto a Bergamo.',
    },
  },
};

export const pillars: { num: string; tag: L; title: L; body: L; accent: Accent }[] = [
  {
    num: '01',
    tag: { en: 'Retrieval', it: 'Retrieval' },
    title: { en: 'Retrieval on real documents.', it: 'Retrieval su documenti veri.' },
    body: {
      en: 'Hybrid retrieval (dense + BM25, RRF), reranking and LLM-built knowledge graphs on specialised corpora.',
      it: 'Retrieval ibrido (dense + BM25, RRF), reranking e knowledge graph costruiti da LLM su corpora specialistici.',
    },
    accent: 'pink',
  },
  {
    num: '02',
    tag: { en: 'Agents', it: 'Agenti' },
    title: { en: 'Agents with one job each.', it: 'Agenti con un solo compito.' },
    body: {
      en: 'Multi-agent platforms on LangGraph, LangChain and MCP. Single-scope agents, clear hand-offs, multi-model.',
      it: 'Piattaforme multi-agente su LangGraph, LangChain e MCP. Agenti mono-scopo, passaggi chiari, multi-modello.',
    },
    accent: 'teal',
  },
  {
    num: '03',
    tag: { en: 'Evaluation', it: 'Valutazione' },
    title: { en: 'Measure before shipping.', it: 'Misurare prima di rilasciare.' },
    body: {
      en: 'RAGAS, recall@k, MRR, nDCG, LLM-as-judge and golden sets built with domain experts. Regression-tested.',
      it: 'RAGAS, recall@k, MRR, nDCG, LLM-as-judge e golden set con esperti di dominio. Con test di regressione.',
    },
    accent: 'mustard',
  },
  {
    num: '04',
    tag: { en: 'Reliability', it: 'Affidabilità' },
    title: { en: 'Guardrails and fallbacks.', it: 'Guardrail e fallback.' },
    body: {
      en: 'Fallback policies, tool-call constraints, structured outputs, human-in-the-loop, Langfuse tracing of cost and hallucinations.',
      it: 'Fallback, vincoli sui tool call, output strutturati, human-in-the-loop, tracing Langfuse di costi e allucinazioni.',
    },
    accent: 'cream',
  },
];

export type Project = {
  id: string;
  tag: L;
  status: L;
  client: L;
  title: L;
  summary: L;
  challenge: L;
  solution: L[];
  metrics: { value: string; label: L }[];
  stack: string[];
  accent: Accent;
  link?: string;
};

export const projects: Project[] = [
  {
    id: 'legal-rag',
    tag: { en: 'Legal RAG', it: 'RAG legale' },
    status: { en: 'Live', it: 'Live' },
    client: { en: '5 law firms', it: '5 studi legali' },
    title: {
      en: '100K legal documents. One grounded answer.',
      it: '100K documenti legali. Una risposta fondata.',
    },
    summary: {
      en: 'RAG platform over ~100K Italian rulings, regulations and statutes, with cross-citation handling via a vector store + LLM-built knowledge graph.',
      it: 'Piattaforma RAG su ~100K sentenze, regolamenti e norme italiane, con gestione delle citazioni incrociate tramite vector store + knowledge graph costruito da LLM.',
    },
    challenge: {
      en: 'Legal answers live across documents that cite each other. Plain vector search misses the chain of citations, and a wrong answer is not an option.',
      it: 'Le risposte legali stanno in documenti che si citano a vicenda. La sola ricerca vettoriale perde la catena di citazioni, e una risposta sbagliata non è un’opzione.',
    },
    solution: [
      {
        en: 'Hybrid retrieval combining the vector store with an LLM-constructed knowledge graph of cross-citations.',
        it: 'Retrieval ibrido che combina vector store e knowledge graph delle citazioni costruito da LLM.',
      },
      {
        en: 'Evaluation with LLM-as-judge plus validation by legal experts: 91% recall@10, 89% answer relevance.',
        it: 'Valutazione con LLM-as-judge e validazione di esperti legali: 91% recall@10, 89% answer relevance.',
      },
      {
        en: 'Automated legal document generation pipeline on top of the retrieval layer.',
        it: 'Pipeline di generazione automatica di documenti legali sopra il layer di retrieval.',
      },
    ],
    metrics: [
      { value: '91%', label: { en: 'recall@10', it: 'recall@10' } },
      { value: '89%', label: { en: 'answer relevance', it: 'answer relevance' } },
      { value: '~100K', label: { en: 'documents', it: 'documenti' } },
    ],
    stack: ['Hybrid Search', 'Knowledge Graph', 'LLM-as-Judge', 'Docling', 'Azure OpenAI'],
    accent: 'pink',
  },
  {
    id: 'retail-planogram',
    tag: { en: 'Multi-agent', it: 'Multi-agente' },
    status: { en: 'Deploying', it: 'In rilascio' },
    client: { en: 'Fortune Global 500 IT group · retail', it: 'Gruppo IT Fortune Global 500 · retail' },
    title: {
      en: 'Eight agents. One shelf.',
      it: 'Otto agenti. Uno scaffale.',
    },
    summary: {
      en: '8-agent platform for retail planogram optimisation: analysis, product placement, shelf optimisation and reporting, each owned by a dedicated agent.',
      it: 'Piattaforma a 8 agenti per l’ottimizzazione dei planogrammi retail: analisi, posizionamento prodotti, ottimizzazione scaffali e reportistica, ognuno con un agente dedicato.',
    },
    challenge: {
      en: 'Planograms mix spatial rules, commercial constraints and domain jargon that general-purpose LLMs get wrong.',
      it: 'I planogrammi mescolano regole spaziali, vincoli commerciali e gergo di dominio che gli LLM generalisti sbagliano.',
    },
    solution: [
      {
        en: 'Each agent owns one domain responsibility, orchestrated as a multi-agent graph.',
        it: 'Ogni agente ha una sola responsabilità di dominio, orchestrati come grafo multi-agente.',
      },
      {
        en: 'RAG grounded on a fine-tuned LLM for planogram domain comprehension.',
        it: 'RAG basato su un LLM fine-tuned per la comprensione del dominio planogrammi.',
      },
      {
        en: 'Full RAG evaluation pipeline, deployed on Azure.',
        it: 'Pipeline completa di valutazione RAG, deploy su Azure.',
      },
    ],
    metrics: [
      { value: '8', label: { en: 'specialised agents', it: 'agenti specializzati' } },
      { value: 'FT', label: { en: 'domain-tuned LLM', it: 'LLM fine-tuned' } },
    ],
    stack: ['LangGraph', 'Fine-tuning', 'RAG', 'RAGAS', 'Azure'],
    accent: 'teal',
  },
  {
    id: 'hr-assistant',
    tag: { en: 'HR assistant', it: 'Assistente HR' },
    status: { en: 'Live', it: 'Live' },
    client: { en: 'International digital agency', it: 'Agenzia digitale internazionale' },
    title: {
      en: '7,000 questions a day. Five languages.',
      it: '7.000 domande al giorno. Cinque lingue.',
    },
    summary: {
      en: 'Multilingual HR assistant (IT, EN, ES, FR, DE) covering 150+ topics, from PTO and room booking to company policies and newsletters.',
      it: 'Assistente HR multilingua (IT, EN, ES, FR, DE) su 150+ temi, da ferie e prenotazione sale a policy aziendali e newsletter.',
    },
    challenge: {
      en: 'Thousands of employees across countries asking the same HR questions, scattered across apps and intranet pages. Built to scale group-wide.',
      it: 'Migliaia di dipendenti in più paesi con le stesse domande HR, sparse tra app e pagine intranet. Pensato per scalare a tutto il gruppo.',
    },
    solution: [
      {
        en: 'Hybrid search (semantic + keyword) with retroactive fine-tuning driven by tester feedback.',
        it: 'Ricerca ibrida (semantica + keyword) con fine-tuning retroattivo guidato dal feedback dei tester.',
      },
      {
        en: 'Topic routing: queries map to pre-configured topics that deep-link to the right app or web page.',
        it: 'Routing per topic: le domande vengono mappate su topic preconfigurati che portano alla pagina o app giusta.',
      },
    ],
    metrics: [
      { value: '~7K', label: { en: 'requests / day', it: 'richieste / giorno' } },
      { value: '150+', label: { en: 'HR topics', it: 'topic HR' } },
      { value: '5', label: { en: 'languages', it: 'lingue' } },
    ],
    stack: ['Hybrid Search', 'Topic Routing', 'Fine-tuning', 'Azure OpenAI'],
    accent: 'mustard',
  },
  {
    id: 'geo-seo',
    tag: { en: 'GEO / SEO', it: 'GEO / SEO' },
    status: { en: 'Live', it: 'Live' },
    client: { en: 'Beauty & fashion e-commerce', it: 'E-commerce beauty & fashion' },
    title: {
      en: 'Product pages that LLMs can find.',
      it: 'Schede prodotto che gli LLM trovano.',
    },
    summary: {
      en: 'Automated product descriptions, FAQs, JSON-LD structured data and tone-of-voice adaptation in up to 6 languages, optimised for search and generative engines.',
      it: 'Descrizioni prodotto, FAQ, dati strutturati JSON-LD e adattamento del tone of voice in fino a 6 lingue, ottimizzati per motori di ricerca e generativi.',
    },
    challenge: {
      en: 'Thousands of SKUs, multiple languages, one brand voice, and shoppers who increasingly ask an LLM instead of Google.',
      it: 'Migliaia di SKU, più lingue, una sola voce di brand, e clienti che chiedono sempre più a un LLM invece che a Google.',
    },
    solution: [
      {
        en: 'Generation pipeline for descriptions, FAQs and JSON-LD with brand tone-of-voice per language.',
        it: 'Pipeline di generazione per descrizioni, FAQ e JSON-LD con tone of voice del brand per lingua.',
      },
      {
        en: 'Discoverability validated via Google Search Console and GPT shopping-domain prompt testing.',
        it: 'Visibilità validata con Google Search Console e test di prompt nel dominio GPT shopping.',
      },
    ],
    metrics: [
      { value: '~80%', label: { en: 'less optimisation time', it: 'tempo di ottimizzazione in meno' } },
      { value: '6', label: { en: 'languages', it: 'lingue' } },
    ],
    stack: ['LLM Generation', 'JSON-LD', 'Structured Outputs', 'Search Console'],
    accent: 'pink',
  },
  {
    id: 'charity-recsys',
    tag: { en: 'RecSys + RAG', it: 'RecSys + RAG' },
    status: { en: 'Live', it: 'Live' },
    client: { en: 'Charity sector · multi-tenant', it: 'Settore charity · multi-tenant' },
    title: {
      en: 'Recommendations in under 100ms.',
      it: 'Raccomandazioni sotto i 100ms.',
    },
    summary: {
      en: 'Multi-tenant platform where non-profits discover relevant projects through personalised recommendations and a conversational RAG interface.',
      it: 'Piattaforma multi-tenant in cui le non-profit scoprono progetti rilevanti con raccomandazioni personalizzate e un’interfaccia RAG conversazionale.',
    },
    challenge: {
      en: 'Personalised recommendations on a non-profit budget: no room for heavyweight serving infrastructure.',
      it: 'Raccomandazioni personalizzate con budget da non-profit: niente spazio per infrastrutture di serving pesanti.',
    },
    solution: [
      {
        en: 'Two-tower-inspired architecture served straight from a vector DB instead of dedicated serving infra.',
        it: 'Architettura ispirata al two-tower servita direttamente da un vector DB invece che da infrastruttura dedicata.',
      },
      {
        en: 'Recommendations evolve dynamically with user behaviour patterns.',
        it: 'Le raccomandazioni evolvono dinamicamente con i pattern di comportamento degli utenti.',
      },
    ],
    metrics: [
      { value: '<100ms', label: { en: 'response time', it: 'tempo di risposta' } },
      { value: 'N', label: { en: 'tenants, one stack', it: 'tenant, uno stack' } },
    ],
    stack: ['Two-Tower', 'Vector DB', 'RAG', 'FastAPI'],
    accent: 'teal',
  },
  {
    id: 'mcp-platform',
    tag: { en: 'Dev productivity', it: 'Produttività dev' },
    status: { en: 'Daily use', it: 'Uso quotidiano' },
    client: { en: 'Internal · ~15 developers', it: 'Interno · ~15 sviluppatori' },
    title: {
      en: 'One source of truth for AI coding.',
      it: 'Una sola fonte di verità per il coding AI.',
    },
    summary: {
      en: 'MCP-based platform that turns Confluence, Slack and Jira into the shared context layer for AI coding assistants.',
      it: 'Piattaforma basata su MCP che trasforma Confluence, Slack e Jira nel layer di contesto condiviso per gli assistenti di coding AI.',
    },
    challenge: {
      en: 'Coding assistants are only as good as their context, and the context was scattered across three tools.',
      it: 'Gli assistenti di coding valgono quanto il loro contesto, e il contesto era sparso su tre strumenti.',
    },
    solution: [
      {
        en: 'Single-scope agents for code review, documentation ingestion and context building.',
        it: 'Agenti mono-scopo per code review, ingestion della documentazione e costruzione del contesto.',
      },
      {
        en: 'Multi-model cooperation between Claude and Gemini.',
        it: 'Cooperazione multi-modello tra Claude e Gemini.',
      },
    ],
    metrics: [
      { value: '~15', label: { en: 'devs, every day', it: 'dev, ogni giorno' } },
      { value: '3', label: { en: 'sources unified', it: 'fonti unificate' } },
    ],
    stack: ['MCP', 'Claude', 'Gemini', 'Confluence', 'Slack', 'Jira'],
    accent: 'mustard',
  },
  {
    id: 'turbocharge',
    tag: { en: 'Open source', it: 'Open source' },
    status: { en: 'Published', it: 'Pubblicato' },
    client: { en: 'Claude Code plugin', it: 'Plugin per Claude Code' },
    title: {
      en: 'Brainstorm → plan → build → review.',
      it: 'Brainstorm → plan → build → review.',
    },
    summary: {
      en: 'Turbocharge: an open-source Claude Code plugin for test-driven, AI-assisted development. 10 skills, 6 agents, 2 hooks.',
      it: 'Turbocharge: plugin open source per Claude Code per uno sviluppo AI-assisted guidato dai test. 10 skill, 6 agenti, 2 hook.',
    },
    challenge: {
      en: 'AI coding without process drifts: skipped tests, lost context, reviews that never happen.',
      it: 'Il coding con l’AI senza processo deriva: test saltati, contesto perso, review che non arrivano mai.',
    },
    solution: [
      {
        en: 'A full pipeline of skills, subagents and hooks that enforces TDD and review chains.',
        it: 'Una pipeline completa di skill, subagenti e hook che impone TDD e catene di review.',
      },
      {
        en: 'Used in day-to-day delivery work, published for anyone to take.',
        it: 'Usato nel lavoro di delivery quotidiano, pubblicato per chiunque.',
      },
    ],
    metrics: [
      { value: '10', label: { en: 'skills', it: 'skill' } },
      { value: '6', label: { en: 'agents', it: 'agenti' } },
      { value: '2', label: { en: 'hooks', it: 'hook' } },
    ],
    stack: ['Claude Code', 'Skills', 'Subagents', 'Hooks'],
    accent: 'pink',
    link: 'https://github.com/nicodiansk/turbocharge',
  },
  {
    id: 'cnn-classifier',
    tag: { en: 'Computer vision', it: 'Computer vision' },
    status: { en: 'Live', it: 'Live' },
    client: { en: 'E-commerce SEO', it: 'SEO e-commerce' },
    title: {
      en: 'Zero manual page labelling.',
      it: 'Zero classificazione manuale.',
    },
    summary: {
      en: 'CNN web-page classifier with a full ML pipeline: data collection, labelling, training, validation and monitoring.',
      it: 'Classificatore CNN di pagine web con pipeline ML completa: raccolta dati, labelling, training, validazione e monitoraggio.',
    },
    challenge: {
      en: 'Thousands of pages classified by hand before any SEO automation could even start.',
      it: 'Migliaia di pagine classificate a mano prima che qualsiasi automazione SEO potesse partire.',
    },
    solution: [
      {
        en: 'Transfer-learning CNN served via FastAPI on Azure AKS.',
        it: 'CNN con transfer learning servita via FastAPI su Azure AKS.',
      },
      {
        en: 'Removed 100% of manual classification, unlocking downstream SEO automation.',
        it: 'Eliminato il 100% della classificazione manuale, sbloccando l’automazione SEO a valle.',
      },
    ],
    metrics: [
      { value: '98%', label: { en: 'accuracy', it: 'accuratezza' } },
      { value: '0.95', label: { en: 'F1 score', it: 'F1 score' } },
      { value: '100%', label: { en: 'manual work removed', it: 'lavoro manuale eliminato' } },
    ],
    stack: ['PyTorch', 'CNN', 'Transfer Learning', 'FastAPI', 'Azure AKS'],
    accent: 'teal',
  },
];

export const experience: {
  role: L;
  company: string;
  period: L;
  intro: L;
  points: L[];
  accent: Accent;
}[] = [
  {
    role: { en: 'Head of AI Business Unit', it: 'Head of AI Business Unit' },
    company: 'S.I. 2001 SpA · Bergamo',
    period: { en: 'Jan 2023 – Present', it: 'Gen 2023 – Oggi' },
    intro: {
      en: 'Leading the AI division end-to-end: strategy, architecture, delivery and client management across concurrent enterprise projects.',
      it: 'Guido la divisione AI end-to-end: strategia, architettura, delivery e gestione clienti su più progetti enterprise in parallelo.',
    },
    points: [
      { en: 'Legal RAG for 5 law firms (~100K docs, 91% recall@10).', it: 'RAG legale per 5 studi (~100K documenti, 91% recall@10).' },
      { en: '8-agent planogram platform for a Fortune Global 500 IT group.', it: 'Piattaforma a 8 agenti sui planogrammi per un gruppo IT Fortune Global 500.' },
      { en: 'Multilingual HR assistant for an international agency (~7,000 requests/day).', it: 'Assistente HR multilingua per un’agenzia internazionale (~7.000 richieste/giorno).' },
      { en: 'GEO/SEO, recommendation and MCP developer platforms.', it: 'Piattaforme GEO/SEO, di raccomandazione e MCP per sviluppatori.' },
    ],
    accent: 'pink',
  },
  {
    role: { en: 'Senior AI Engineer & Team Lead', it: 'Senior AI Engineer & Team Lead' },
    company: 'S.I. 2001 SpA · Bergamo',
    period: { en: 'Apr 2022 – Dec 2022', it: 'Apr 2022 – Dic 2022' },
    intro: {
      en: 'Managed 5+ engineers while staying hands-on with architecture and delivery.',
      it: 'Gestione di 5+ ingegneri restando operativo su architettura e delivery.',
    },
    points: [
      { en: 'CNN web-page classifier: 98% accuracy, F1 0.95.', it: 'Classificatore CNN di pagine web: 98% accuratezza, F1 0.95.' },
      { en: 'Corporate AI training for ~50 employees.', it: 'Formazione AI aziendale per ~50 dipendenti.' },
      { en: 'Built the team from scratch with Agile/Scrum delivery standards.', it: 'Team costruito da zero con standard di delivery Agile/Scrum.' },
    ],
    accent: 'teal',
  },
  {
    role: { en: 'AI Engineer', it: 'AI Engineer' },
    company: 'S.I. 2001 SpA · Bergamo',
    period: { en: 'Apr 2021 – Mar 2022', it: 'Apr 2021 – Mar 2022' },
    intro: {
      en: 'Joined as the company’s first AI engineer. Computer vision models and the infrastructure to run them.',
      it: 'Entrato come primo AI engineer dell’azienda. Modelli di computer vision e l’infrastruttura per farli girare.',
    },
    points: [
      { en: 'Classification, object detection and similarity search with transfer learning.', it: 'Classificazione, object detection e similarity search con transfer learning.' },
      { en: 'FastAPI microservices on Docker and Azure AKS, with monitoring.', it: 'Microservizi FastAPI su Docker e Azure AKS, con monitoraggio.' },
      { en: 'Turned ops, HR and finance processes into ML workflows.', it: 'Processi di operations, HR e finance trasformati in workflow ML.' },
    ],
    accent: 'mustard',
  },
];

export const stack: { title: L; accent: Accent; items: string[] }[] = [
  {
    title: { en: 'AI & LLMs', it: 'AI & LLM' },
    accent: 'pink',
    items: ['LangChain', 'LangGraph', 'MCP', 'Azure OpenAI', 'Claude', 'Gemini', 'Multi-agent', 'Guardrails', 'HITL', 'Function Calling', 'Structured Outputs'],
  },
  {
    title: { en: 'RAG & Search', it: 'RAG & Search' },
    accent: 'teal',
    items: ['Hybrid Search', 'BM25 + RRF', 'Reranking', 'Knowledge Graphs', 'pgvector', 'Supabase', 'Pinecone', 'Qdrant', 'Weaviate', 'Docling'],
  },
  {
    title: { en: 'Evaluation', it: 'Valutazione' },
    accent: 'mustard',
    items: ['RAGAS', 'Recall@k', 'MRR', 'nDCG', 'LLM-as-Judge', 'Golden Sets', 'Regression Testing'],
  },
  {
    title: { en: 'ML & Vision', it: 'ML & Vision' },
    accent: 'cream',
    items: ['PyTorch', 'TensorFlow', 'CNNs', 'Transfer Learning', 'LLM Fine-tuning', 'Flan-T5', 'Two-Tower', 'Collaborative Filtering'],
  },
  {
    title: { en: 'AI-assisted engineering', it: 'Ingegneria AI-assisted' },
    accent: 'pink',
    items: ['Claude Code', 'Skills', 'Subagents', 'Hooks', 'Slash Commands', 'MCP Servers'],
  },
  {
    title: { en: 'Infra & Ops', it: 'Infra & Ops' },
    accent: 'teal',
    items: ['Python', 'FastAPI', 'Docker', 'Kubernetes (AKS)', 'Azure', 'CI/CD', 'Langfuse', 'LLMOps'],
  },
];

export const education: { degree: L; school: string; period: string; note?: L }[] = [
  {
    degree: { en: 'MSc Computer Engineering', it: 'Laurea Magistrale in Ingegneria Informatica' },
    school: 'Università di Bergamo',
    period: '2019 – 2022',
    note: { en: 'Summa cum laude · 110/110', it: '110/110 e lode' },
  },
  {
    degree: { en: 'BSc Computer Engineering', it: 'Laurea Triennale in Ingegneria Informatica' },
    school: 'Università di Bergamo',
    period: '2016 – 2019',
  },
];

export const thesis = {
  title: {
    en: 'Extraction of Semantic Topological Maps from 2D Occupational Maps',
    it: 'Extraction of Semantic Topological Maps from 2D Occupational Maps',
  },
  authors: 'with C. Celestino, B. Caglioni, D. Brugali',
};

export const research: L = {
  en: 'LLM-powered recommendation and agentic retrieval: 50+ papers studied, from neural collaborative filtering to retrieval-augmented recommenders.',
  it: 'Raccomandazione con LLM e retrieval agentico: 50+ paper studiati, dal neural collaborative filtering ai recommender retrieval-augmented.',
};

export const languages: { name: L; level: L }[] = [
  { name: { en: 'Italian', it: 'Italiano' }, level: { en: 'Native', it: 'Madrelingua' } },
  {
    name: { en: 'English', it: 'Inglese' },
    level: { en: 'Professional · Cambridge FCE', it: 'Professionale · Cambridge FCE' },
  },
];

export const marquee = [
  'Production RAG',
  'Multi-agent systems',
  'LLM evaluation',
  'LangGraph',
  'MCP',
  'Hybrid search',
  'Knowledge graphs',
  'Fine-tuning',
  'Guardrails',
  'Azure',
  'Claude Code',
];
