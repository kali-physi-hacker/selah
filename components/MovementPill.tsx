import { hexToRgba } from '@/lib/color';

export interface MovementPillProps {
  label: string;
  accent: string;
  active?: boolean;
  className?: string;
}

/** A small glowing pill for a movement / tag. */
export function MovementPill({ label, accent, active = false, className = '' }: MovementPillProps) {
  return (
    <span
      className={`pill ${className}`}
      style={{
        background: hexToRgba(accent, active ? 0.28 : 0.14),
        border: `1px solid ${hexToRgba(accent, active ? 0.6 : 0.32)}`,
        color: 'rgb(var(--ink))',
      }}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: accent, boxShadow: `0 0 8px ${hexToRgba(accent, 0.9)}` }}
      />
      {label}
    </span>
  );
}
