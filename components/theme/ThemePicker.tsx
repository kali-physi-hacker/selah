'use client';

import { useTheme } from '@/lib/useTheme';
import { THEMES, THEME_META } from '@/lib/theme';
import { track } from '@/lib/analytics';
import { Icon } from '@/components/Icon';

export function ThemePicker() {
  const { theme, setTheme, hydrated } = useTheme();

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {THEMES.map((id) => {
        const meta = THEME_META[id];
        const active = hydrated && theme === id;
        return (
          <button
            key={id}
            onClick={() => {
              setTheme(id);
              track('theme_change', { theme: id });
            }}
            aria-pressed={active}
            className={`rounded-card p-4 text-left transition-colors ${
              active ? 'glass-strong ring-1 ring-aqua/50' : 'glass-soft hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className="h-9 w-9 rounded-full ring-1 ring-white/15"
                style={{ background: meta.swatch }}
                aria-hidden
              />
              {active && <Icon name="check-circle" size={18} aria-hidden className="text-aqua" />}
            </div>
            <p className="mt-2.5 font-display text-base text-ink">{meta.label}</p>
            <p className="mt-0.5 text-xs leading-snug text-ink-faint">{meta.description}</p>
          </button>
        );
      })}
    </div>
  );
}
