'use client';

import { useCallback, useEffect, useState } from 'react';
import { useHighlights, HIGHLIGHT_COLORS, type HighlightColor } from '@/lib/useHighlights';
import { offsetsFromRange, rangeFromOffsets, supportsHighlightApi } from '@/lib/highlightRange';
import { track } from '@/lib/analytics';
import { Icon } from '@/components/Icon';

const SWATCH: Record<HighlightColor, string> = {
  amber: '#FCD34D',
  green: '#6EE7B7',
  sky: '#7DD3FC',
  rose: '#FDA4AF',
};

// Minimal typing for the CSS Custom Highlight API (avoids depending on lib.dom).
interface Registry {
  set(name: string, h: object): void;
  delete(name: string): void;
}
type HighlightCtor = new (...ranges: Range[]) => object;

interface Bar {
  x: number;
  y: number;
  block: string;
  start: number;
  end: number;
  text: string;
  overlap: string[];
}

/**
 * Select-to-highlight for the reading. Marks live in [data-hl-block] elements;
 * highlights are painted with the CSS Custom Highlight API (no DOM surgery, so
 * it never fights React). Anchored by character offsets, persisted + synced.
 */
export function HighlightController({ actSlug, label }: { actSlug: string; label: string }) {
  const { marks, hydrated, add, remove } = useHighlights();
  const [bar, setBar] = useState<Bar | null>(null);

  // Paint the saved highlights.
  useEffect(() => {
    if (!hydrated || !supportsHighlightApi()) return;
    const reg = (CSS as unknown as { highlights: Registry }).highlights;
    const Ctor = (window as unknown as { Highlight: HighlightCtor }).Highlight;
    const byColor: Partial<Record<HighlightColor, Range[]>> = {};
    document.querySelectorAll<HTMLElement>(`[data-hl-block^="${actSlug}:"]`).forEach((el) => {
      const id = el.getAttribute('data-hl-block');
      if (!id) return;
      for (const m of marks) {
        if (m.block !== id) continue;
        const r = rangeFromOffsets(el, m.start, m.end);
        if (r) (byColor[m.color] ??= []).push(r);
      }
    });
    for (const color of HIGHLIGHT_COLORS) {
      const name = `selah-${color}`;
      const ranges = byColor[color];
      if (ranges && ranges.length) reg.set(name, new Ctor(...ranges));
      else reg.delete(name);
    }
    return () => {
      for (const color of HIGHLIGHT_COLORS) reg.delete(`selah-${color}`);
    };
  }, [marks, hydrated, actSlug]);

  // Watch the selection → position the toolbar.
  useEffect(() => {
    if (!supportsHighlightApi()) return;
    const onSelect = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
        setBar(null);
        return;
      }
      const range = sel.getRangeAt(0);
      const anchor =
        range.commonAncestorContainer.nodeType === 1
          ? (range.commonAncestorContainer as HTMLElement)
          : range.commonAncestorContainer.parentElement;
      const blockEl = anchor?.closest<HTMLElement>('[data-hl-block]');
      const id = blockEl?.getAttribute('data-hl-block');
      if (!blockEl || !id || !id.startsWith(`${actSlug}:`)) {
        setBar(null);
        return;
      }
      const off = offsetsFromRange(blockEl, range);
      if (!off) {
        setBar(null);
        return;
      }
      const rect = range.getBoundingClientRect();
      const overlap = marks
        .filter((m) => m.block === id && m.start < off.end && m.end > off.start)
        .map((m) => m.id);
      setBar({ x: rect.left + rect.width / 2, y: rect.top, block: id, ...off, text: sel.toString(), overlap });
    };
    document.addEventListener('selectionchange', onSelect);
    return () => document.removeEventListener('selectionchange', onSelect);
  }, [marks, actSlug]);

  const applyColor = useCallback(
    (color: HighlightColor) => {
      if (!bar) return;
      add({ block: bar.block, start: bar.start, end: bar.end, color, text: bar.text.slice(0, 400), ref: label });
      track('highlight_add', { color });
      window.getSelection()?.removeAllRanges();
      setBar(null);
    },
    [bar, add, label],
  );

  const erase = useCallback(() => {
    if (!bar) return;
    remove(bar.overlap);
    window.getSelection()?.removeAllRanges();
    setBar(null);
  }, [bar, remove]);

  if (!bar) return null;
  return (
    <div
      className="pointer-events-auto fixed z-[60] -translate-x-1/2 -translate-y-full"
      style={{ left: bar.x, top: bar.y - 8 }}
    >
      <div className="flex items-center gap-1.5 rounded-pill bg-abyss/95 px-2 py-1.5 shadow-xl ring-1 ring-white/15 backdrop-blur">
        {HIGHLIGHT_COLORS.map((c) => (
          <button
            key={c}
            onClick={() => applyColor(c)}
            className="h-6 w-6 rounded-full ring-1 ring-white/25 transition-transform active:scale-90"
            style={{ background: SWATCH[c] }}
            aria-label={`Highlight ${c}`}
          />
        ))}
        {bar.overlap.length > 0 && (
          <button
            onClick={erase}
            className="ml-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/12 text-ink"
            aria-label="Remove highlight"
          >
            <Icon name="x" size={14} aria-hidden />
          </button>
        )}
      </div>
    </div>
  );
}
