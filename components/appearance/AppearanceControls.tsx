'use client';

import { useAppearance } from '@/lib/useAppearance';
import { MODES, MODE_META, FONT_SIZES, FONT_SIZE_META, FONTS, FONT_META } from '@/lib/appearance';
import { Icon } from '@/components/Icon';

export function AppearanceControls() {
  const { mode, fontSize, font, hydrated, setMode, setFontSize, setFont } = useAppearance();
  const sample = { sm: 13, base: 15, lg: 17, xl: 20 } as const;

  return (
    <div className="space-y-5">
      {/* Mode */}
      <div>
        <p className="mb-2 px-1 text-xs uppercase tracking-[0.16em] text-ink-faint">Light &amp; dark</p>
        <div className="grid grid-cols-3 gap-2">
          {MODES.map((m) => {
            const active = hydrated && mode === m;
            return (
              <button
                key={m}
                onClick={() => setMode(m)}
                aria-pressed={active}
                className={`rounded-card p-3 text-center transition-colors ${
                  active ? 'glass-strong ring-1 ring-aqua/50' : 'glass-soft hover:bg-white/10'
                }`}
              >
                <Icon name={MODE_META[m].icon} size={18} aria-hidden className={`mx-auto mb-1.5 ${active ? 'text-aqua' : 'text-ink-muted'}`} />
                <span className="text-sm font-medium text-ink">{MODE_META[m].label}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 px-1 text-xs leading-snug text-ink-faint">
          {hydrated ? MODE_META[mode].description : ' '}
        </p>
      </div>

      {/* Font size */}
      <div>
        <p className="mb-2 px-1 text-xs uppercase tracking-[0.16em] text-ink-faint">Text size</p>
        <div className="grid grid-cols-4 gap-2">
          {FONT_SIZES.map((fs) => {
            const active = hydrated && fontSize === fs;
            return (
              <button
                key={fs}
                onClick={() => setFontSize(fs)}
                aria-pressed={active}
                className={`rounded-control py-3 transition-colors ${
                  active ? 'glass-strong ring-1 ring-aqua/50' : 'glass-soft hover:bg-white/10'
                }`}
              >
                <span className="font-display text-ink" style={{ fontSize: sample[fs] }}>Aa</span>
                <span className="mt-0.5 block text-[0.6rem] text-ink-faint">{FONT_SIZE_META[fs]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Font style */}
      <div>
        <p className="mb-2 px-1 text-xs uppercase tracking-[0.16em] text-ink-faint">Font</p>
        <div className="grid grid-cols-3 gap-2">
          {FONTS.map((f) => {
            const active = hydrated && font === f;
            return (
              <button
                key={f}
                onClick={() => setFont(f)}
                aria-pressed={active}
                className={`rounded-card p-3 text-center transition-colors ${
                  active ? 'glass-strong ring-1 ring-aqua/50' : 'glass-soft hover:bg-white/10'
                }`}
              >
                <span className="block text-xl text-ink" style={{ fontFamily: FONT_META[f].css }}>Aa</span>
                <span className="mt-1 block text-xs text-ink-muted">{FONT_META[f].label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
