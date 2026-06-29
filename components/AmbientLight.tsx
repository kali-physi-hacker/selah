/**
 * Decorative, fixed ambient light — slow-drifting divine-light orbs behind all
 * content. Pure CSS animation (honors prefers-reduced-motion via globals.css),
 * non-interactive, and hidden from assistive tech.
 */
export function AmbientLight() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl animate-breathe"
        style={{
          background:
            'radial-gradient(closest-side, rgba(253,224,138,0.16), rgba(253,224,138,0))',
        }}
      />
      <div
        className="absolute top-1/3 -left-20 h-[26rem] w-[26rem] rounded-full blur-3xl animate-soft-float"
        style={{
          background: 'radial-gradient(closest-side, rgba(103,232,249,0.12), rgba(103,232,249,0))',
        }}
      />
      <div
        className="absolute bottom-0 -right-24 h-[30rem] w-[30rem] rounded-full blur-3xl animate-breathe"
        style={{
          background: 'radial-gradient(closest-side, rgba(20,184,166,0.14), rgba(20,184,166,0))',
          animationDelay: '2.5s',
        }}
      />
      {/* faint grain to soften gradient banding */}
      <div className="absolute inset-0 bg-grain opacity-[0.025] mix-blend-overlay" />
    </div>
  );
}
