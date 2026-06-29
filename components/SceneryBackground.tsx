import Image from 'next/image';
import { hexToRgba } from '@/lib/color';

const OVERLAYS = {
  // hero — let the ocean glow through brightly, like the reference
  soft: 'linear-gradient(180deg, rgba(2,31,30,0.2) 0%, rgba(2,31,30,0.4) 48%, rgba(2,18,17,0.82) 100%)',
  // act pages — a touch darker, but the glass panels carry their own legibility
  deep: 'linear-gradient(180deg, rgba(2,31,30,0.52) 0%, rgba(2,31,30,0.66) 45%, rgba(2,16,15,0.9) 100%)',
};

export interface SceneryBackgroundProps {
  src: string;
  position?: string;
  accent?: string;
  intensity?: keyof typeof OVERLAYS;
  blur?: boolean;
  priority?: boolean;
}

/**
 * Full-bleed photographic backdrop, fixed behind everything, dimmed by a
 * luminous teal overlay (and tinted by the act accent) so content floats over a
 * deep, glowing scene. Ships from /public (no runtime image dependency).
 */
export function SceneryBackground({
  src,
  position = '50% 50%',
  accent,
  intensity = 'deep',
  blur = false,
  priority = false,
}: SceneryBackgroundProps) {
  return (
    <div aria-hidden className="fixed inset-0 -z-30 overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={`animate-fade-in object-cover ${blur ? 'scale-110 blur-[3px]' : ''}`}
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0" style={{ background: OVERLAYS[intensity] }} />
      {accent && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(125% 80% at 50% -5%, ${hexToRgba(accent, 0.26)}, transparent 58%)`,
          }}
        />
      )}
      {/* faint top divine-light wash + grain to blend */}
      <div
        className="absolute inset-x-0 top-0 h-1/2"
        style={{
          background:
            'radial-gradient(70% 60% at 50% 0%, rgba(253,224,138,0.12), rgba(253,224,138,0) 70%)',
        }}
      />
    </div>
  );
}
