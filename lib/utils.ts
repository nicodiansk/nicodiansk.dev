import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Accent } from '@/data/content';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix public assets with the GitHub Pages base path in production. */
export const basePath = process.env.NODE_ENV === 'production' ? '/nicodiansk.dev' : '';
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
