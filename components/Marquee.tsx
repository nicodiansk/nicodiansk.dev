import { marquee } from '@/data/content';

/** Tilted tape strip of keywords scrolling forever. */
export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative z-10 -my-2 -rotate-[1.5deg] overflow-hidden border-y-2 border-ink bg-mustard py-3 shadow-[0_6px_0_0_#9C6F06]">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-xl uppercase tracking-tight text-ink sm:text-2xl">
            {m}
            <span aria-hidden className="text-pink-deep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
