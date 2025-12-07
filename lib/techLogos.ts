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
  'Transfer Learning': '/images/tech-logos/pytorch.svg',
  'Computer Vision': '/images/tech-logos/pytorch.svg',

  // Backend
  'FastAPI': '/images/tech-logos/fastapi.svg',
  'Python': '/images/tech-logos/python.svg',

  // Frontend
  'React': '/images/tech-logos/react.svg',

  // Other AI/ML
  'RAG': '/images/tech-logos/anthropic.svg',
  'Vector Search': '/images/tech-logos/pinecone.svg',
  'Hybrid Search': '/images/tech-logos/qdrant.svg',
  'Embeddings': '/images/tech-logos/openai.svg',
  'Semantic Ranking': '/images/tech-logos/google.svg',
  'Collaborative Filtering': '/images/tech-logos/python.svg',
  'Knowledge Graphs': '/images/tech-logos/neo4j.svg',
  'NLP': '/images/tech-logos/python.svg',
  'Jira': '/images/tech-logos/react.svg',
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
  return TECH_LOGO_MAP[tech] || '/images/tech-logos/react.svg'
}

export function getProjectIconPath(projectId: string): string {
  return PROJECT_ICON_MAP[projectId] || '/images/project-icons/dev-velocity.svg'
}
