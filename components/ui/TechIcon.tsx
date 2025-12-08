// ABOUTME: Technology icon component with Lucide React icons for tech stack visualization
// ABOUTME: Maps technology names to corresponding icons with consistent styling

import {
  Bot, Brain, Sparkles, Link2, Database, Pin, Layers, Cloud,
  Cpu, Binary, Zap, Code2, Network, Search, GitBranch, Activity
} from 'lucide-react';

interface TechIconProps {
  techName: string;
  size?: number;
  className?: string;
}

// Map tech names to Lucide icons with colors
const TECH_ICON_MAP: Record<string, { Icon: typeof Bot; color: string }> = {
  'OpenAI': { Icon: Bot, color: '#10A37F' },
  'Claude': { Icon: Sparkles, color: '#D4A574' },
  'Gemini': { Icon: Brain, color: '#4285F4' },
  'GPT-4': { Icon: Bot, color: '#10A37F' },
  'GPT-4o': { Icon: Bot, color: '#10A37F' },
  'LangChain': { Icon: Link2, color: '#1C3C3C' },
  'LangGraph': { Icon: GitBranch, color: '#1C3C3C' },
  'MCP': { Icon: Network, color: '#D4A574' },
  'Neo4j': { Icon: Database, color: '#008CC1' },
  'Pinecone': { Icon: Pin, color: '#FF6B6B' },
  'Qdrant': { Icon: Layers, color: '#DC244C' },
  'Weaviate': { Icon: Cloud, color: '#00D9FF' },
  'Supabase': { Icon: Database, color: '#3ECF8E' },
  'PyTorch': { Icon: Cpu, color: '#EE4C2C' },
  'TensorFlow': { Icon: Binary, color: '#FF6F00' },
  'ONNX': { Icon: Zap, color: '#00D9FF' },
  'Transfer Learning': { Icon: Activity, color: '#EE4C2C' },
  'Computer Vision': { Icon: Brain, color: '#EE4C2C' },
  'FastAPI': { Icon: Zap, color: '#009688' },
  'Python': { Icon: Code2, color: '#3776AB' },
  'React': { Icon: Cpu, color: '#61DAFB' },
  'RAG': { Icon: Search, color: '#D4A574' },
  'Vector Search': { Icon: Search, color: '#FF6B6B' },
  'Hybrid Search': { Icon: Search, color: '#00D9FF' },
  'Embeddings': { Icon: Layers, color: '#10A37F' },
  'Semantic Ranking': { Icon: Activity, color: '#4285F4' },
  'Collaborative Filtering': { Icon: Network, color: '#3776AB' },
  'Knowledge Graphs': { Icon: GitBranch, color: '#008CC1' },
  'NLP': { Icon: Brain, color: '#3776AB' },
  'Jira': { Icon: Activity, color: '#0052CC' },
};

export function TechIcon({ techName, size = 32, className = '' }: TechIconProps) {
  const iconConfig = TECH_ICON_MAP[techName];

  if (!iconConfig) {
    // Fallback to first letter if no icon found
    return (
      <div
        className={`flex items-center justify-center bg-gray-800 rounded-full ${className}`}
        style={{ width: size, height: size }}
        title={techName}
      >
        <span className="text-gray-400 text-xs font-bold">
          {techName.charAt(0)}
        </span>
      </div>
    );
  }

  const { Icon, color } = iconConfig;

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gray-900/80 border border-gray-700 ${className}`}
      style={{ width: size, height: size }}
      title={techName}
    >
      <Icon size={size * 0.6} style={{ color }} />
    </div>
  );
}
