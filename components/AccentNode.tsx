import { Icon } from './Icon';
import { hexToRgba } from '@/lib/color';

export interface AccentNodeProps {
  icon: string;
  accent: string;
  size?: number;
  halo?: boolean;
  className?: string;
}

/**
 * The luminous, accent-colored icon node used along the journey thread and in
 * act headers. A soft glow in the act's accent color; an optional halo for the
 * two climax acts.
 */
export function AccentNode({
  icon,
  accent,
  size = 56,
  halo = false,
  className = '',
}: AccentNodeProps) {
  return (
    <span
      className={`relative inline-flex flex-none items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 25%, ${hexToRgba(accent, 0.45)}, ${hexToRgba(
          accent,
          0.14,
        )})`,
        border: `1px solid ${hexToRgba(accent, 0.5)}`,
        boxShadow: `0 0 ${halo ? 38 : 22}px ${hexToRgba(accent, halo ? 0.6 : 0.4)}, inset 0 1px 0 ${hexToRgba(
          '#ffffff',
          0.25,
        )}`,
      }}
    >
      {halo && (
        <span
          aria-hidden
          className="absolute inset-[-55%] -z-10 rounded-full animate-breathe"
          style={{
            background: `radial-gradient(closest-side, ${hexToRgba(
              '#FDE68A',
              0.5,
            )}, transparent 70%)`,
          }}
        />
      )}
      <Icon
        name={icon}
        size={size * 0.42}
        strokeWidth={1.75}
        aria-hidden
        className="text-ink drop-shadow"
      />
    </span>
  );
}
