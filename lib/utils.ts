import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Accent } from '@/data/content';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix public assets with the GitHub Pages base path in production. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const asset = (path: string) => `${basePath}${path}`;

export const accentText: Record<Accent, string> = {
  pink: 'text-pink',
  teal: 'text-teal',
  mustard: 'text-mustard',
  cream: 'text-paper',
};

export const accentBg: Record<Accent, string> = {
  pink: 'bg-pink',
  teal: 'bg-teal',
  mustard: 'bg-mustard',
  cream: 'bg-paper',
};

export const accentBorder: Record<Accent, string> = {
  pink: 'border-pink',
  teal: 'border-teal',
  mustard: 'border-mustard',
  cream: 'border-paper',
};

/** Torn top edge only (straight sides and bottom): a strip of paper stuck along the bottom of a card. */
export function tornTopClip(seed = 1, teeth = 22, depth = 9): string {
  let s = seed * 9301 + 49297;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const pts: string[] = [];
  for (let i = 0; i <= teeth; i++) pts.push(`${(i / teeth) * 100}% ${rand() * depth}%`);
  pts.push('100% 100%', '0% 100%');
  return `polygon(${pts.join(',')})`;
}

/**
 * Deterministic jagged “torn paper” polygon for clip-path.
 * Same seed → same edge, so server and client render identically.
 */
export function tornClip(seed = 1, teeth = 28, depth = 2.2): string {
  let s = seed * 9301 + 49297;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const pts: string[] = [];
  for (let i = 0; i <= teeth; i++) pts.push(`${(i / teeth) * 100}% ${rand() * depth}%`);
  for (let i = teeth; i >= 0; i--) pts.push(`${(i / teeth) * 100}% ${100 - rand() * depth}%`);
  return `polygon(${pts.join(',')})`;
}
