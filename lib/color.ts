/** Convert a #RRGGBB hex to an rgba() string at the given alpha. */
export function hexToRgba(hex: string, alpha = 1): string {
  const clean = hex.replace('#', '');
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((c) => c + c)
          .join('')
      : clean;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** A soft linear gradient string in an accent color (for headers/backgrounds). */
export function accentGradient(hex: string, strength = 0.22): string {
  return `linear-gradient(135deg, ${hexToRgba(hex, strength)} 0%, ${hexToRgba(
    hex,
    strength * 0.25,
  )} 60%, rgba(255,255,255,0) 100%)`;
}
