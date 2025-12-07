// ABOUTME: Architecture flow diagram component for visualizing system data pipelines
// ABOUTME: Renders nodes and arrows showing technology flow with cyberpunk styling

import React from 'react';
import { ArrowRight, Database, Zap, Brain, Code2, Network } from 'lucide-react';

export interface FlowNode {
  id: string;
  label: string;
  tech?: string;
  type: 'input' | 'process' | 'storage' | 'output' | 'agent';
  color: 'cyan' | 'magenta' | 'yellow' | 'lime' | 'blue';
}

export interface FlowConnection {
  from: string;
  to: string;
  label?: string;
}

export interface ArchitectureFlowProps {
  nodes: FlowNode[];
  connections: FlowConnection[];
  className?: string;
}

const iconMap = {
  input: Code2,
  process: Zap,
  storage: Database,
  output: ArrowRight,
  agent: Brain,
};

const colorMap = {
  cyan: 'border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan',
  magenta: 'border-cyber-magenta bg-cyber-magenta/10 text-cyber-magenta',
  yellow: 'border-cyber-yellow bg-cyber-yellow/10 text-cyber-yellow',
  lime: 'border-cyber-lime bg-cyber-lime/10 text-cyber-lime',
  blue: 'border-blue-500 bg-blue-500/10 text-blue-400',
};

const arrowColorMap = {
  cyan: 'text-cyber-cyan',
  magenta: 'text-cyber-magenta',
  yellow: 'text-cyber-yellow',
  lime: 'text-cyber-lime',
  blue: 'text-blue-400',
};

export function ArchitectureFlow({ nodes, connections, className = '' }: ArchitectureFlowProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="space-y-4">
        {nodes.map((node, index) => {
          const Icon = iconMap[node.type];
          const isLastNode = index === nodes.length - 1;
          const nextNode = !isLastNode ? nodes[index + 1] : null;

          return (
            <div key={node.id}>
              {/* Node */}
              <div
                className={`border-2 rounded-lg p-4 transition-all duration-300 hover:shadow-lg ${colorMap[node.color]} hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-3">
                  <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm mb-1">{node.label}</div>
                    {node.tech && (
                      <div className="text-xs opacity-80 font-mono">{node.tech}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Arrow to next node */}
              {!isLastNode && nextNode && (
                <div className="flex items-center justify-center py-2">
                  <ArrowRight
                    className={`w-6 h-6 ${arrowColorMap[nextNode.color]} animate-pulse`}
                    strokeWidth={3}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
