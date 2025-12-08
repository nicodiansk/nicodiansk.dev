// ABOUTME: Color class mappings for safe dynamic Tailwind usage
// ABOUTME: Prevents JIT compiler from purging dynamically constructed class names

export const textColorClasses = {
  lime: 'text-cyber-lime',
  cyan: 'text-cyber-cyan',
  yellow: 'text-cyber-yellow',
  magenta: 'text-cyber-magenta',
} as const;

export const bgColorClasses = {
  lime: 'bg-cyber-lime',
  cyan: 'bg-cyber-cyan',
  yellow: 'bg-cyber-yellow',
  magenta: 'bg-cyber-magenta',
} as const;

export const borderColorClasses = {
  lime: 'border-cyber-lime',
  cyan: 'border-cyber-cyan',
  yellow: 'border-cyber-yellow',
  magenta: 'border-cyber-magenta',
} as const;

export const bgOpacityClasses = {
  lime: 'bg-cyber-lime/10',
  cyan: 'bg-cyber-cyan/10',
  yellow: 'bg-cyber-yellow/10',
  magenta: 'bg-cyber-magenta/10',
} as const;

export type CyberColor = keyof typeof textColorClasses;
