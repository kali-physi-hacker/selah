import { hexToRgba } from '@/lib/color';

const WORDS = ['STILLNESS', 'LIGHT', 'MERCY', 'HOPE', 'GRACE', 'PEACE', 'WONDER', 'REST'];

/**
 * The reference motif: meditative words curving around a luminous center,
 * orbiting slowly. Pure SVG/CSS — the rotation honors reduced-motion (paused via
 * the global media query in globals.css). Decorative, hidden from a11y.
 */
export function OrbitRing({
  accent = '#67E8F9',
  size = 300,
  words = WORDS,
}: {
  accent?: string;
  size?: number;
  words?: string[];
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative"
      style={{ width: size, height: size }}
    >
      {/* glowing center — the divine light */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="animate-breathe rounded-full"
          style={{
            width: size * 0.42,
            height: size * 0.42,
            background: `radial-gradient(circle at 50% 45%, ${hexToRgba('#FFFFFF', 0.9)}, ${hexToRgba(
              '#FDE68A',
              0.55,
            )} 35%, ${hexToRgba(accent, 0.25)} 60%, transparent 72%)`,
            filter: 'blur(2px)',
          }}
        />
      </div>

      {/* faint concentric rings */}
      <div
        className="absolute inset-[8%] rounded-full"
        style={{ border: `1px solid ${hexToRgba('#F0FDFA', 0.14)}` }}
      />
      <div
        className="absolute inset-[20%] rounded-full"
        style={{ border: `1px solid ${hexToRgba('#F0FDFA', 0.1)}` }}
      />

      {/* rotating ring of words */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-spin-slow"
        style={{ animationDuration: '70s' }}
      >
        <defs>
          <path
            id="orbit-path"
            d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
            fill="none"
          />
        </defs>
        {words.map((word, i) => (
          <text
            key={word}
            fill={hexToRgba('#F0FDFA', 0.55)}
            style={{
              fontSize: '7px',
              letterSpacing: '2.5px',
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
          >
            <textPath href="#orbit-path" startOffset={`${(i / words.length) * 100}%`}>
              {word}
            </textPath>
          </text>
        ))}
        {/* tiny separator dots between words */}
        {words.map((word, i) => (
          <text key={`dot-${word}`} fill={hexToRgba(accent, 0.8)} style={{ fontSize: '7px' }}>
            <textPath href="#orbit-path" startOffset={`${((i + 0.5) / words.length) * 100}%`}>
              ·
            </textPath>
          </text>
        ))}
      </svg>
    </div>
  );
}
