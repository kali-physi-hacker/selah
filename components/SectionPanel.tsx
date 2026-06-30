import React from 'react';
import { Icon } from './Icon';
import { hexToRgba } from '@/lib/color';

export interface SectionPanelProps {
  id?: string;
  eyebrow?: string;
  title: string;
  icon?: string;
  accent?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * A calm glass panel wrapping one section of the act deep-dive
 * (Overview, Story, People, …). Anchorable via `id` for the section nav.
 */
export function SectionPanel({
  id,
  eyebrow,
  title,
  icon,
  accent = '#67E8F9',
  children,
  className = '',
}: SectionPanelProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 rounded-card glass p-5 sm:p-6 ${className}`}
    >
      <header className="mb-4 flex items-center gap-3">
        {icon && (
          <span
            className="flex h-9 w-9 flex-none items-center justify-center rounded-control"
            style={{
              background: hexToRgba(accent, 0.16),
              border: `1px solid ${hexToRgba(accent, 0.32)}`,
              color: 'rgb(var(--ink))',
            }}
          >
            <Icon name={icon} size={18} aria-hidden />
          </span>
        )}
        <div>
          {eyebrow && (
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink-faint">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-xl leading-tight text-ink sm:text-2xl">
            {title}
          </h2>
        </div>
      </header>
      {children}
    </section>
  );
}
