// ABOUTME: Single source of truth for all portfolio copy, bilingual (EN/IT).
// ABOUTME: Content mirrors the public CV (scripts/cv/cv.html). Only verified numbers: update both together.

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
      en: 'I lead the AI unit at S.I. 2001. Together with a small team I design and build RAG, multi-agent and LLM evaluation systems for companies in HR, retail, financial services, industry, legal and e-commerce.',
      it: 'Guido la unit AI di S.I. 2001. Con un piccolo team progetto e sviluppo sistemi RAG, multi-agente e di valutazione LLM per aziende di HR, retail, servizi finanziari, industria, legale ed e-commerce.',
    },
    ctaWork: { en: 'See the work', it: 'Guarda i progetti' },
    ctaCv: { en: 'Download CV', it: 'Scarica il CV' },
  },
  stats: [
    { value: '5', label: { en: 'years in AI', it: 'anni in AI' } },
    { value: '12', label: { en: 'AI projects since 2023', it: 'progetti AI dal 2023' } },
    { value: '12K', label: { en: 'employees on one AI assistant', it: 'dipendenti su un solo assistente AI' } },
    { value: '8', label: { en: 'industries', it: 'settori' } },
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
      { en: '2023 – today.', it: '2023 – oggi.' },
    ],
    open: { en: 'Read the case', it: 'Leggi il caso' },
    close: { en: 'Close', it: 'Chiudi' },
    challenge: { en: 'The problem', it: 'Il problema' },
    solution: { en: 'What we built', it: 'Cosa abbiamo costruito' },
    role: { en: 'My role', it: 'Il mio ruolo' },
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
      en: 'Hybrid search (full-text + vectors, RRF), LLM reranking and page-level citations on long technical and business documents.',
      it: 'Ricerca ibrida (full-text + vettori, RRF), reranking con LLM e citazioni a livello di pagina su documenti tecnici e aziendali lunghi.',
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
      en: 'Test query sets, top-1 accuracy, faithfulness judges and before/after comparisons on the same data. Numbers before claims.',
      it: 'Set di query di test, accuratezza top-1, giudici di faithfulness e confronti prima/dopo sugli stessi dati. Prima i numeri, poi le affermazioni.',
    },
    accent: 'mustard',
  },
  {
    num: '04',
    tag: { en: 'Reliability', it: 'Affidabilità' },
    title: { en: 'Guardrails and fallbacks.', it: 'Guardrail e fallback.' },
    body: {
      en: 'Anonymisers before every model call, fallbacks, structured outputs, tool-call constraints and Langfuse tracing of cost and quality.',
      it: 'Anonimizzatori prima di ogni chiamata al modello, fallback, output strutturati, vincoli sui tool call e tracing Langfuse di costi e qualità.',
    },
    accent: 'cream',
  },
];

export type Project = {
  id: string;
  tag: L;
  /** Shown only when the state is confirmed. */
  status?: L;
  period: string;
  client: L;
  title: L;
  summary: L;
  challenge: L;
  solution: L[];
  /** Only verified numbers. metrics[0] is the poster headline. */
  metrics: { value: string; label: L; detail?: L }[];
  role: L;
  stack: string[];
  accent: Accent;
  link?: string;
};

// Clients are anonymised on purpose. Every metric below comes from an evaluation report or test in the project repo.
export const projects: Project[] = [
  {
    id: 'hr-assistant',
    tag: { en: 'HR assistant', it: 'Assistente HR' },
    status: { en: 'Live', it: 'Live' },
    period: '2023 – 2026',
    client: { en: 'European data & AI consultancy', it: 'Società europea di consulenza data & AI' },
    title: {
      en: 'The HR assistant 12,000 employees ask first, in five languages.',
      it: 'L’assistente HR che 12.000 dipendenti interrogano per primo, in cinque lingue.',
    },
    summary: {
      en: 'The AI layer of an employee HR platform used by 12,000 people worldwide: it routes every question to the right HR topic, answers from company documents and keeps the conversation context.',
      it: 'Lo strato AI di una piattaforma HR usata da 12.000 persone nel mondo: instrada ogni domanda al topic HR giusto, risponde dai documenti aziendali e mantiene il contesto della conversazione.',
    },
    challenge: {
      en: 'Topic classification relied on the LLM alone. It needed a hybrid search that respects per-group permissions and stays in sync with the topic catalogue.',
      it: 'La classificazione sui topic si basava solo sull’LLM. Serviva una ricerca ibrida che rispettasse i permessi per gruppo e restasse allineata al catalogo dei topic.',
    },
    solution: [
      {
        en: 'Hybrid search in Postgres/pgvector: per-language full-text and vectors fused with RRF, an LLM reranker, and a deterministic filter on the topics each user may see.',
        it: 'Ricerca ibrida in Postgres/pgvector: full-text per lingua e vettori fusi con RRF, un reranker LLM e un filtro deterministico sui topic visibili a ogni utente.',
      },
      {
        en: 'Topic catalogue kept in sync through webhooks (bulk operations, cascading deletes) plus a full re-alignment endpoint.',
        it: 'Catalogo dei topic sincronizzato via webhook (operazioni bulk, cancellazioni a cascata) e un endpoint di riallineamento completo.',
      },
      {
        en: 'Document RAG with a reranker and a faithfulness judge that blocks unsupported claims; conversation memory with LangGraph and a Postgres checkpointer.',
        it: 'RAG sui documenti con reranker e un giudice di faithfulness che blocca le affermazioni non supportate; memoria conversazionale con LangGraph e checkpointer Postgres.',
      },
      {
        en: 'One image for several client deployments (Kustomize, Azure DevOps, AKS), traced with Langfuse.',
        it: 'Una sola immagine per più installazioni cliente (Kustomize, Azure DevOps, AKS), con tracing Langfuse.',
      },
    ],
    metrics: [
      { value: '12K', label: { en: 'employees worldwide', it: 'dipendenti nel mondo' } },
      { value: '97%', label: { en: 'required facts in RAG answers', it: 'fatti richiesti nelle risposte RAG' }, detail: { en: 'internal evaluation', it: 'valutazione interna' } },
      { value: '5', label: { en: 'languages', it: 'lingue' } },
    ],
    role: {
      en: 'Architecture and most of the development, releases and operations. The client’s team owns the platform backend.',
      it: 'Architettura e gran parte dello sviluppo, rilasci e operations. Il backend della piattaforma è del team del cliente.',
    },
    stack: ['FastAPI', 'LangGraph', 'Azure OpenAI', 'pgvector', 'Langfuse', 'AKS'],
    accent: 'pink',
  },
  {
    id: 'call-analysis',
    tag: { en: 'Call analysis', it: 'Analisi chiamate' },
    status: { en: 'Live', it: 'Live' },
    period: '2025 – 2026',
    client: { en: 'International credit insurer · sales team', it: 'Assicuratore del credito internazionale · team commerciale' },
    title: {
      en: 'Sales calls transcribed, scored and turned into coaching.',
      it: 'Chiamate di vendita trascritte, valutate e trasformate in coaching.',
    },
    summary: {
      en: 'A nightly pipeline picks up sales call recordings, transcribes them, extracts customer objections, scores each call on the campaign grid and writes coaching for the sellers. A tutor chatbot sits on top.',
      it: 'Una pipeline notturna prende le registrazioni delle chiamate di vendita, le trascrive, estrae le obiezioni dei clienti, valuta ogni chiamata sulla griglia della campagna e scrive il coaching per i venditori. Sopra c’è un chatbot tutor.',
    },
    challenge: {
      en: 'The sales team had no systematic way to review calls, collect customer objections or coach sellers.',
      it: 'Il team commerciale non aveva un modo sistematico per rivedere le chiamate, raccogliere le obiezioni dei clienti e fare coaching ai venditori.',
    },
    solution: [
      {
        en: 'Recordings from the CRM every night → EU speech-to-text with language detection → speaker identification → objection extraction → scoring per campaign → coaching.',
        it: 'Registrazioni dal CRM ogni notte → trascrizione in UE con riconoscimento della lingua → identificazione dei parlanti → estrazione delle obiezioni → valutazione per campagna → coaching.',
      },
      {
        en: 'Catalogue of objections and strengths, deduplicated with embeddings plus an LLM judge; transcripts indexed for vector search.',
        it: 'Catalogo di obiezioni e punti di forza, deduplicato con embedding e un giudice LLM; trascrizioni indicizzate per la ricerca vettoriale.',
      },
      {
        en: 'Per-campaign prompts refined against the scoring grid with before/after comparisons; prompt changes shipped as database migrations.',
        it: 'Prompt per campagna affinati sulla griglia di valutazione con confronti prima/dopo; le modifiche ai prompt vanno in produzione come migrazioni del database.',
      },
      {
        en: 'LangGraph tutor chatbot for the sellers.',
        it: 'Chatbot tutor in LangGraph per i venditori.',
      },
    ],
    metrics: [
      { value: '25%→0%', label: { en: 'coaching aimed at the wrong speaker', it: 'coaching rivolto al parlante sbagliato' }, detail: { en: 'same 12 calls, before and after', it: 'stesse 12 chiamate, prima e dopo' } },
      { value: '12%→0%', label: { en: 'polluted catalogue entries', it: 'voci inquinate nel catalogo' }, detail: { en: 'same 12 calls, before and after', it: 'stesse 12 chiamate, prima e dopo' } },
    ],
    role: {
      en: 'Architecture and development of the AI service. The web app and .NET backend are built by the rest of the team.',
      it: 'Architettura e sviluppo del servizio AI. Web app e backend .NET sono del resto del team.',
    },
    stack: ['FastAPI', 'LangGraph', 'Azure OpenAI', 'AssemblyAI', 'pgvector', 'Azure Container Apps'],
    accent: 'teal',
  },
  {
    id: 'planogram-agents',
    tag: { en: 'Multi-agent', it: 'Multi-agente' },
    status: { en: 'In rollout', it: 'In rilascio' },
    period: '2025 – 2026',
    client: { en: 'Global system integrator · retail category management', it: 'System integrator globale · category management retail' },
    title: {
      en: 'Five agents and an optimiser behind one planogram assistant.',
      it: 'Cinque agenti e un ottimizzatore dietro un assistente per planogrammi.',
    },
    summary: {
      en: 'An AI assistant that became the main interface of a category-management product: category managers edit and question planograms in plain language.',
      it: 'Un assistente AI diventato l’interfaccia principale di un prodotto di category management: i category manager modificano e interrogano i planogrammi in linguaggio naturale.',
    },
    challenge: {
      en: 'Category managers had to change and understand planograms through technical tools. The assistant, planned as a later add-on, became the main way in.',
      it: 'I category manager dovevano modificare e capire i planogrammi con strumenti tecnici. L’assistente, previsto come add-on futuro, è diventato l’accesso principale.',
    },
    solution: [
      {
        en: 'LangGraph supervisor with five specialist agents (editor, insight analyst, rules checker, explainer, goal agent) and handoff tools. It replaced a dedicated intent classifier.',
        it: 'Supervisor LangGraph con cinque agenti specialisti (editor, analista, verifica regole, spiegazione, obiettivi) e tool di handoff. Ha sostituito un classificatore di intenti dedicato.',
      },
      {
        en: '“No data, no opinion”: the LLM interprets and routes, while KPIs, rules and optimisation come only from the authoritative services.',
        it: '“No data, no opinion”: l’LLM interpreta e instrada, mentre KPI, regole e ottimizzazione arrivano solo dai servizi autoritativi.',
      },
      {
        en: 'Session and long-term memory on PostgreSQL/pgvector, progressive summaries, agent interrupt and resume, SSE streaming.',
        it: 'Memoria di sessione e a lungo termine su PostgreSQL/pgvector, riassunti progressivi, interruzione e ripresa degli agenti, streaming SSE.',
      },
      {
        en: 'Contributions to the OR-Tools CP-SAT optimiser (four phases, async jobs, explainability).',
        it: 'Contributi all’ottimizzatore OR-Tools CP-SAT (quattro fasi, job asincroni, explainability).',
      },
    ],
    metrics: [
      { value: '5', label: { en: 'specialist agents', it: 'agenti specialisti' } },
      { value: '27', label: { en: 'tools', it: 'tool' } },
    ],
    role: {
      en: 'Architecture and development of the LLM orchestrator, plus contributions to the optimisation service. Core services and UI are built by the partner’s team.',
      it: 'Architettura e sviluppo dell’orchestratore LLM, più contributi al servizio di ottimizzazione. Servizi core e UI sono del team del partner.',
    },
    stack: ['LangGraph', 'FastAPI', 'Azure OpenAI', 'pgvector', 'OR-Tools', 'AKS'],
    accent: 'mustard',
  },
  {
    id: 'team-platform',
    tag: { en: 'New product', it: 'Nuovo prodotto' },
    status: { en: 'In development', it: 'In sviluppo' },
    period: '2026',
    client: { en: 'Software teams · PMs, engineers, developers', it: 'Team software · PM, ingegneri, sviluppatori' },
    title: {
      en: 'One workspace where PMs, engineers and AI ship together.',
      it: 'Un unico spazio dove PM, ingegneri e AI rilasciano insieme.',
    },
    summary: {
      en: 'A process platform for software teams that brings together what is usually split across Notion, Trello, Jira and GitHub: shared documentation, tasks, plans and code reviews, with Claude as the engine.',
      it: 'Una piattaforma di processo per i team software che riunisce quello che di solito è diviso tra Notion, Trello, Jira e GitHub: documentazione condivisa, task, pianificazione e code review, con Claude come motore.',
    },
    challenge: {
      en: 'Work is scattered across docs, boards, trackers and repositories. Context gets lost between PMs, engineers and developers, and checks, plans and reviews depend on who has time.',
      it: 'Il lavoro è sparso tra documenti, board, tracker e repository. Il contesto si perde tra PM, ingegneri e sviluppatori, e controlli, piani e review dipendono da chi ha tempo.',
    },
    solution: [
      {
        en: 'A shared knowledge base that PMs, engineers, developers and the AI all work from.',
        it: 'Una base documentale condivisa da cui lavorano PM, ingegneri, sviluppatori e l’AI.',
      },
      {
        en: 'Claude as the engine: it checks tasks against requirements, keeps Gantt plans current and pre-reviews pull and merge requests.',
        it: 'Claude come motore: verifica i task rispetto ai requisiti, tiene aggiornati i Gantt e fa una prima review di pull e merge request.',
      },
      {
        en: 'GitHub and GitLab tracking linked to tasks, so progress comes from the code instead of status meetings.',
        it: 'Tracciamento GitHub e GitLab collegato ai task, così l’avanzamento arriva dal codice e non dalle riunioni di stato.',
      },
      {
        en: 'Turbocharge underneath: one standard, verifiable way of working, with solid tests and reviews on every change.',
        it: 'Turbocharge alla base: un unico standard di lavoro verificabile, con test solidi e review su ogni modifica.',
      },
    ],
    metrics: [{ value: '4→1', label: { en: 'docs, boards, tracker and Git in one place', it: 'documenti, board, tracker e Git insieme' } }],
    role: {
      en: 'Product design and architecture, leading development with the team.',
      it: 'Design del prodotto e architettura, guidando lo sviluppo con il team.',
    },
    stack: ['Claude', 'MCP', 'Claude Code', 'Turbocharge', 'GitHub', 'GitLab'],
    accent: 'pink',
  },
  {
    id: 'privacy-first-hr',
    tag: { en: 'Privacy by design', it: 'Privacy by design' },
    status: { en: 'In rollout', it: 'In rilascio' },
    period: '2026',
    client: { en: 'Supermarket chain, Northern Italy', it: 'Catena di supermercati del Nord Italia' },
    title: {
      en: 'An employee assistant that remembers nothing.',
      it: 'Un assistente per i dipendenti che non ricorda nulla.',
    },
    summary: {
      en: 'An employee assistant deployed under a cyber-security clearance that rules out memory, document RAG, stored questions and personal data sent to the models.',
      it: 'Un assistente per i dipendenti installato con un nulla osta di cyber security che esclude memoria, RAG sui documenti, domande salvate e dati personali inviati ai modelli.',
    },
    challenge: {
      en: 'The client could adopt the assistant only within a security clearance that forbade conversation memory, RAG, storing questions and sending personal data to the models.',
      it: 'Il cliente poteva adottare l’assistente solo con un nulla osta che vietava memoria, RAG, salvataggio delle domande e dati personali verso i modelli.',
    },
    solution: [
      {
        en: 'Dedicated configuration: no memory, no RAG, no cache, metadata-only logs.',
        it: 'Configurazione dedicata: niente memoria, niente RAG, niente cache, log con soli metadati.',
      },
      {
        en: 'In-pod anonymiser (names, emails, phone numbers, tax codes, IBANs, cards, ID documents) before any embedding or model call.',
        it: 'Anonimizzatore nel pod (nomi, email, telefoni, codici fiscali, IBAN, carte, documenti) prima di ogni embedding o chiamata al modello.',
      },
      {
        en: 'Measured what happens if the question text never reaches the database: top-1 accuracy 70.4% against 70.6%, so full-text search could go without a measurable loss.',
        it: 'Misurato cosa succede se il testo della domanda non arriva mai al database: accuratezza top-1 70,4% contro 70,6%, quindi la ricerca full-text si è potuta togliere senza perdite misurabili.',
      },
      {
        en: 'Runs inside the client’s cluster (ClusterIP only, no ingress, default-deny network policies), with the model in a dedicated tenant.',
        it: 'Gira nel cluster del cliente (solo ClusterIP, nessun ingress, network policy default deny), con il modello in un tenant dedicato.',
      },
    ],
    metrics: [
      { value: '70.4%', label: { en: 'top-1 accuracy, no query text in the DB', it: 'accuratezza top-1, nessun testo nel DB' }, detail: { en: '70.6% with the query text', it: '70,6% con il testo della domanda' } },
    ],
    role: {
      en: 'Architecture, the architecture/cost/data-residency document for the client, code changes for the security conditions, release pipeline.',
      it: 'Architettura, documento di architettura/costi/residenza dei dati per il cliente, adattamento del codice alle condizioni di sicurezza, pipeline di rilascio.',
    },
    stack: ['FastAPI', 'Azure OpenAI', 'PostgreSQL', 'Kubernetes', 'Entra Workload ID'],
    accent: 'teal',
  },
  {
    id: 'technical-rag',
    tag: { en: 'Technical RAG', it: 'RAG tecnico' },
    status: { en: 'In rollout', it: 'In rilascio' },
    period: '2024 – 2026',
    client: { en: 'Industrial valve company · training platform', it: 'Azienda di valvole industriali · piattaforma di formazione' },
    title: {
      en: 'Answers from 700-page standards, with the page cited.',
      it: 'Risposte da norme di 700 pagine, con la pagina citata.',
    },
    summary: {
      en: 'Question answering over long technical manuals and standards, with every answer citing the document and the page.',
      it: 'Domande e risposte su manuali tecnici e norme molto lunghi, con ogni risposta che cita documento e pagina.',
    },
    challenge: {
      en: 'Reliable answers, with page citations, over very long manuals and standards full of tables.',
      it: 'Risposte affidabili, con la citazione della pagina, su manuali e norme molto lunghi e pieni di tabelle.',
    },
    solution: [
      {
        en: 'LangGraph flow with a relevance filter, retrieval, grading, a corrective-RAG loop and a hallucination check; citations point to the absolute page.',
        it: 'Flusso LangGraph con filtro di pertinenza, retrieval, grading, ciclo di corrective RAG e controllo delle allucinazioni; le citazioni puntano alla pagina assoluta.',
      },
      {
        en: 'Parsing with Azure Document Intelligence in page blocks, re-joining tables split across pages.',
        it: 'Parsing con Azure Document Intelligence a blocchi di pagine, ricomponendo le tabelle spezzate tra pagine.',
      },
      {
        en: 'Routing across three model sizes by cost; migration from Pinecone to Azure AI Search; Postgres memory.',
        it: 'Instradamento su tre taglie di modello in base al costo; migrazione da Pinecone ad Azure AI Search; memoria su Postgres.',
      },
    ],
    metrics: [
      { value: '708', label: { en: 'pages in a single standard', it: 'pagine in una sola norma' }, detail: { en: 're-ingested in one run, 667 MB peak memory', it: 'reingerite in un’unica esecuzione, picco di 667 MB' } },
      { value: '3', label: { en: 'model sizes routed by cost', it: 'taglie di modello per costo' } },
    ],
    role: { en: 'Most of the development.', it: 'Gran parte dello sviluppo.' },
    stack: ['LangGraph', 'Azure OpenAI', 'Azure AI Search', 'Document Intelligence', 'PostgreSQL'],
    accent: 'mustard',
  },
  {
    id: 'structured-data',
    tag: { en: 'GEO / SEO', it: 'GEO / SEO' },
    period: '2025 – 2026',
    client: {
      en: 'E-commerce brands, a digital agency, a credit insurer',
      it: 'Brand e-commerce, un’agenzia digitale, un assicuratore del credito',
    },
    title: {
      en: 'Product and company data that search and AI engines can read.',
      it: 'Dati di prodotti e aziende leggibili da motori di ricerca e AI.',
    },
    summary: {
      en: 'Three projects on structured data for search and answer engines: a multi-tenant Shopify app, a WooCommerce backend for an agency, and a corrected JSON-LD identity for an insurer’s website.',
      it: 'Tre progetti sui dati strutturati per motori di ricerca e answer engine: un’app Shopify multi-tenant, un backend WooCommerce per un’agenzia e l’identità JSON-LD corretta per il sito di un assicuratore.',
    },
    challenge: {
      en: 'Product pages and company sites had missing, wrong or conflicting structured data, so search engines and AI assistants misread them.',
      it: 'Schede prodotto e siti aziendali avevano dati strutturati assenti, sbagliati o in conflitto, e motori di ricerca e assistenti AI li leggevano male.',
    },
    solution: [
      {
        en: 'Multi-tenant Shopify app that generates JSON-LD, FAQs and structured data per product (FastAPI, Next.js, encrypted credentials, Firecrawl).',
        it: 'App Shopify multi-tenant che genera JSON-LD, FAQ e dati strutturati per prodotto (FastAPI, Next.js, credenziali cifrate, Firecrawl).',
      },
      {
        en: 'WooCommerce pipeline: parse → classify → detect conflicts between plugins → JSON-LD from Pydantic models → validation → immutable versions, with before/after reports.',
        it: 'Pipeline WooCommerce: parsing → classificazione → rilevamento dei conflitti tra plugin → JSON-LD da modelli Pydantic → validazione → versioni immutabili, con report prima/dopo.',
      },
      {
        en: 'Organization JSON-LD validated against Google Search Central, an implementation brief for the client’s IT, and an audit of the firewall logs for AI crawlers.',
        it: 'JSON-LD Organization validato su Google Search Central, un brief di implementazione per l’IT del cliente e un audit dei log del firewall sui crawler AI.',
      },
    ],
    metrics: [{ value: '3', label: { en: 'clients · JSON-LD', it: 'clienti · JSON-LD' } }],
    role: {
      en: 'Lead developer on the two platforms; technical specialist on the insurer’s website.',
      it: 'Sviluppatore principale sulle due piattaforme; specialista tecnico sul sito dell’assicuratore.',
    },
    stack: ['FastAPI', 'Next.js', 'Pydantic', 'extruct', 'schema.org', 'Shopify', 'WooCommerce'],
    accent: 'pink',
  },
  {
    id: 'legal-rag',
    tag: { en: 'Legal RAG', it: 'RAG legale' },
    status: { en: 'Delivered', it: 'Consegnato' },
    period: '2024 – 2025',
    client: { en: 'Several Italian law firms', it: 'Diversi studi legali italiani' },
    title: {
      en: 'Search the firm’s documents, draft the minutes.',
      it: 'Cercare nei documenti dello studio, redigere i verbali.',
    },
    summary: {
      en: 'A platform used by several law firms: a chatbot over each firm’s document base, and a module that drafts corporate minutes and deeds from DOCX templates.',
      it: 'Una piattaforma usata da diversi studi legali: un chatbot sulla base documentale di ogni studio e un modulo che redige verbali e atti societari da template DOCX.',
    },
    challenge: {
      en: 'Firms wanted to query their own documents in plain language, and minutes and corporate deeds were filled in by hand from templates.',
      it: 'Gli studi volevano interrogare i propri documenti in linguaggio naturale, e verbali e atti societari venivano compilati a mano dai template.',
    },
    solution: [
      {
        en: 'RAG chatbot on documents indexed in Pinecone, with conversation memory and question rephrasing.',
        it: 'Chatbot RAG su documenti indicizzati in Pinecone, con memoria conversazionale e riformulazione della domanda.',
      },
      {
        en: 'Document generation: minutes and deeds from DOCX templates, fed by notes, existing texts and company data (balance sheet, directors, VAT number).',
        it: 'Generazione documentale: verbali e atti da template DOCX, alimentati da appunti, testi esistenti e dati aziendali (bilancio, amministratori, P. IVA).',
      },
      {
        en: 'Parsing with Unstructured and Tesseract; scheduled scrapers.',
        it: 'Parsing con Unstructured e Tesseract; scraper programmati.',
      },
    ],
    metrics: [
      { value: '300K+', label: { en: 'documents managed, and growing', it: 'documenti gestiti, in crescita' } },
      { value: '2', label: { en: 'modules: chat and document drafting', it: 'moduli: chat e redazione documenti' } },
    ],
    role: {
      en: 'Part of a ten-person team: prompts and topic chains for the RAG, AI review, demo templates.',
      it: 'In un team di dieci persone: prompt e catene per topic del RAG, revisione AI, template demo.',
    },
    stack: ['LangChain', 'LangGraph', 'Pinecone', 'Azure OpenAI', 'Unstructured'],
    accent: 'teal',
  },
  {
    id: 'nonprofit-recsys',
    tag: { en: 'RecSys + RAG', it: 'RecSys + RAG' },
    period: '2024 – 2025',
    client: { en: 'Italian platform linking companies and non-profits', it: 'Piattaforma italiana che collega aziende e non profit' },
    title: {
      en: 'Matching companies with social projects.',
      it: 'Abbinare aziende e progetti sociali.',
    },
    summary: {
      en: 'Recommendations and two chatbots that help companies find the social projects that suit them.',
      it: 'Raccomandazioni e due chatbot che aiutano le aziende a trovare i progetti sociali adatti a loro.',
    },
    challenge: {
      en: 'Companies had to find the most suitable social projects among the many published by non-profits.',
      it: 'Le aziende dovevano trovare i progetti sociali più adatti tra i tanti pubblicati dalle non profit.',
    },
    solution: [
      {
        en: 'Recommendations on Pinecone that track user preferences, with novelty and diversity corrections.',
        it: 'Raccomandazioni su Pinecone che tengono traccia delle preferenze, con correzioni di novità e diversità.',
      },
      {
        en: 'Two LangGraph chatbots (public, and private per company) with retrieval, ranking and generation, SQL memory and streaming.',
        it: 'Due chatbot LangGraph (pubblico e privato per azienda) con retrieval, ranking e generazione, memoria SQL e streaming.',
      },
      {
        en: 'APIs for companies, projects and documents (PDF, text, FAQs).',
        it: 'API per aziende, progetti e documenti (PDF, testo, FAQ).',
      },
    ],
    metrics: [{ value: '2', label: { en: 'LangGraph chatbots', it: 'chatbot LangGraph' } }],
    role: { en: 'Co-developer in a three-person team.', it: 'Co-sviluppatore in un team di tre persone.' },
    stack: ['FastAPI', 'LangGraph', 'Pinecone', 'Azure OpenAI', 'SQL Server'],
    accent: 'mustard',
  },
  {
    id: 'ad-intelligence',
    tag: { en: 'Competitive intel', it: 'Competitive intel' },
    status: { en: 'Live demo', it: 'Demo live' },
    period: '2025 – 2026',
    client: { en: 'Marketing agency', it: 'Agenzia di marketing' },
    title: {
      en: 'Competitors’ ad campaigns, collected and scored.',
      it: 'Le campagne dei concorrenti, raccolte e valutate.',
    },
    summary: {
      en: 'Collects competitors’ sponsored campaigns from public ad libraries, captures them and scores each creative with a vision model on the agency’s own six-dimension method.',
      it: 'Raccoglie le campagne sponsorizzate dei concorrenti dalle librerie pubbliche degli annunci, le cattura e valuta ogni creatività con un modello vision sul metodo a sei dimensioni dell’agenzia.',
    },
    challenge: {
      en: 'Reviewing competitors’ Google and Meta campaigns by hand took too long.',
      it: 'Analizzare a mano le campagne dei concorrenti su Google e Meta richiedeva troppo tempo.',
    },
    solution: [
      {
        en: 'Crawling of Google Ads Transparency Center and Meta Ad Library (SerpAPI, Firecrawl), screenshots and URL deduplication.',
        it: 'Crawling di Google Ads Transparency Center e Meta Ad Library (SerpAPI, Firecrawl), screenshot e deduplica degli URL.',
      },
      {
        en: 'Scoring on six dimensions with a vision LLM; versioned prompt sets.',
        it: 'Valutazione su sei dimensioni con un LLM vision; set di prompt versionati.',
      },
      {
        en: 'Next.js dashboard with filters and counts computed in the database.',
        it: 'Dashboard Next.js con filtri e conteggi calcolati nel database.',
      },
    ],
    metrics: [{ value: '6', label: { en: 'scoring dimensions per creative', it: 'dimensioni di valutazione' } }],
    role: { en: 'Sole developer, full stack.', it: 'Unico sviluppatore, full stack.' },
    stack: ['FastAPI', 'Next.js', 'Supabase', 'Azure OpenAI', 'SerpAPI', 'Firecrawl'],
    accent: 'pink',
  },
  {
    id: 'fashion-search',
    tag: { en: 'Visual search', it: 'Ricerca visiva' },
    period: '2024 – 2026',
    client: { en: 'Fashion e-commerce', it: 'E-commerce di moda' },
    title: {
      en: 'Search the catalogue with words or with a photo.',
      it: 'Cercare nel catalogo con le parole o con una foto.',
    },
    summary: {
      en: 'Product search in natural Italian and by photo for a fashion catalogue.',
      it: 'Ricerca prodotti in italiano naturale e per foto su un catalogo di moda.',
    },
    challenge: {
      en: 'Shoppers wanted to describe what they were looking for in their own words, or show a picture of it.',
      it: 'I clienti volevano descrivere quello che cercavano con parole loro, o mostrarne una foto.',
    },
    solution: [
      {
        en: 'Text search with NLTK, TF-IDF and cosine similarity, fused with RRF, plus a price filter.',
        it: 'Ricerca testuale con NLTK, TF-IDF e similarità coseno, fusa con RRF, più un filtro sul prezzo.',
      },
      {
        en: 'Image search: Segformer segments the garments, Fashion-CLIP embeds them.',
        it: 'Ricerca per immagine: Segformer segmenta i capi, Fashion-CLIP ne calcola gli embedding.',
      },
    ],
    metrics: [{ value: '2', label: { en: 'ways to search: text and photo', it: 'modi di cercare: testo e foto' } }],
    role: { en: 'Developer in a five-person team.', it: 'Sviluppatore in un team di cinque persone.' },
    stack: ['FastAPI', 'scikit-learn', 'Segformer', 'Fashion-CLIP'],
    accent: 'teal',
  },
  {
    id: 'turbocharge',
    tag: { en: 'Open source', it: 'Open source' },
    status: { en: 'Published', it: 'Pubblicato' },
    period: '2025 – 2026',
    client: { en: 'Claude Code plugin', it: 'Plugin per Claude Code' },
    title: {
      en: 'Brainstorm → plan → build → review.',
      it: 'Brainstorm → plan → build → review.',
    },
    summary: {
      en: 'Turbocharge: an open-source Claude Code plugin for test-driven, AI-assisted development, listed in Anthropic’s plugin directory.',
      it: 'Turbocharge: un plugin open source per Claude Code per uno sviluppo AI-assisted guidato dai test, presente nella directory dei plugin di Anthropic.',
    },
    challenge: {
      en: 'Claude Code setups drift: duplicated agents, conflicting rules, skipped tests, reviews that never happen.',
      it: 'Le configurazioni di Claude Code si sporcano: agenti duplicati, regole in conflitto, test saltati, review che non arrivano mai.',
    },
    solution: [
      {
        en: 'One pipeline: brainstorm → story → plan → build → review → ship, with a TDD builder, a task reviewer and a final reviewer.',
        it: 'Una sola pipeline: brainstorm → story → plan → build → review → ship, con un builder TDD, un reviewer per task e un reviewer finale.',
      },
      {
        en: 'Session wrap-up for continuity between sessions; an eval suite that compares runs with and without the plugin.',
        it: 'Chiusura di sessione per la continuità tra sessioni; una suite di eval che confronta esecuzioni con e senza plugin.',
      },
    ],
    metrics: [
      { value: '10', label: { en: 'skills', it: 'skill' } },
      { value: '6', label: { en: 'agents', it: 'agenti' } },
      { value: '2', label: { en: 'hooks', it: 'hook' } },
    ],
    role: { en: 'Sole author.', it: 'Unico autore.' },
    stack: ['Claude Code', 'Skills', 'Subagents', 'Hooks'],
    accent: 'mustard',
    link: 'https://github.com/nicodiansk/turbocharge',
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
      { en: 'HR assistant used by 12,000 employees worldwide, in five languages.', it: 'Assistente HR usato da 12.000 dipendenti nel mondo, in cinque lingue.' },
      { en: 'Multi-agent planogram assistant for a global system integrator.', it: 'Assistente multi-agente per planogrammi per un system integrator globale.' },
      { en: 'Sales-call analysis and coaching for an international credit insurer.', it: 'Analisi delle chiamate di vendita e coaching per un assicuratore del credito internazionale.' },
      { en: 'New in 2026: an AI-driven process platform for software teams, built on Claude and Turbocharge.', it: 'Novità 2026: una piattaforma di processo AI per i team software, basata su Claude e Turbocharge.' },
      { en: 'Technical RAG, recommenders, GEO/SEO structured data, competitive intelligence.', it: 'RAG tecnico, sistemi di raccomandazione, dati strutturati GEO/SEO, competitive intelligence.' },
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
