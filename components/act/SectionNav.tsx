'use client';

import { useEffect, useRef, useState } from 'react';
import { hexToRgba } from '@/lib/color';

export interface NavSection {
  id: string;
  label: string;
}

/**
 * A sticky, glassy segmented control for navigating a long act on mobile.
 * Highlights the active section as you scroll (scrollspy), and the active
 * chip auto-scrolls into view within the rail.
 */
export function SectionNav({ sections, accent }: { sections: NavSection[]; accent: string }) {
  const [active, setActive] = useState(sections[0]?.id);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  // Keep the active chip in view within the horizontal rail.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !active) return;
    const chip = rail.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    if (chip) {
      const railRect = rail.getBoundingClientRect();
      const chipRect = chip.getBoundingClientRect();
      if (chipRect.left < railRect.left || chipRect.right > railRect.right) {
        chip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [active]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -96, duration: 1.1 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setActive(id);
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <div className="sticky top-2 z-30 px-3">
      <div
        ref={railRef}
        className="no-scrollbar glass-strong flex gap-1 overflow-x-auto rounded-pill p-1.5"
        role="tablist"
        aria-label="Sections"
      >
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-chip={s.id}
              role="tab"
              aria-selected={isActive}
              onClick={(e) => handleClick(e, s.id)}
              className="whitespace-nowrap rounded-pill px-3.5 py-1.5 text-xs font-medium transition-colors"
              style={
                isActive
                  ? {
                      background: hexToRgba(accent, 0.3),
                      color: 'rgb(var(--ink))',
                      boxShadow: `inset 0 0 0 1px ${hexToRgba(accent, 0.5)}`,
                    }
                  : { color: 'rgb(var(--ink) / 0.6)' }
              }
            >
              {s.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
