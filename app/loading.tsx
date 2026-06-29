export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <span
        className="h-10 w-10 animate-breathe rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 25%, #FDE68A, #14B8A6)',
          boxShadow: '0 0 40px rgba(103,232,249,0.4)',
        }}
        aria-hidden
      />
      <p className="scripture text-sm text-ink-faint">Be still…</p>
    </div>
  );
}
