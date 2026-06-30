import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAdmin } from '@/lib/admin';
import { getAnalyticsSummary, dbConfigured, type AnalyticsSummary } from '@/lib/db';
import { PageBackdrop } from '@/components/PageBackdrop';
import { PageHeader } from '@/components/PageHeader';
import { AutoRefresh } from '@/components/admin/AutoRefresh';
import { Icon } from '@/components/Icon';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

const fmtMinutes = (m: number) =>
  m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${m}m`;

function Stat({ icon, value, label }: { icon: string; value: string | number; label: string }) {
  return (
    <div className="rounded-card glass p-4">
      <Icon name={icon} size={16} aria-hidden className="mb-1.5 text-ink-faint" />
      <div className="font-display text-2xl text-ink">{value}</div>
      <div className="text-xs text-ink-faint">{label}</div>
    </div>
  );
}

function BarRow({ label, n, max }: { label: string; n: number; max: number }) {
  return (
    <div className="flex items-center gap-3 py-1">
      <span className="w-32 flex-none truncate text-xs text-ink-muted">{label}</span>
      <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/8">
        <span className="block h-full rounded-full bg-aqua/60" style={{ width: `${max ? (n / max) * 100 : 0}%` }} />
      </span>
      <span className="w-10 flex-none text-right text-xs tabular-nums text-ink-faint">{n}</span>
    </div>
  );
}

function Dashboard({ d }: { d: AnalyticsSummary }) {
  const dauMax = Math.max(1, ...d.dau.map((x) => x.users));
  const typeMax = Math.max(1, ...d.byType.map((x) => x.n));
  const pageMax = Math.max(1, ...d.topPages.map((x) => x.n));

  return (
    <div className="space-y-5 px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        <Stat icon="users" value={d.totals.users7d} label="active users · 7d" />
        <Stat icon="compass" value={d.totals.sessions7d} label="sessions · 7d" />
        <Stat icon="hourglass" value={fmtMinutes(d.totalMinutes)} label="total time on app" />
        <Stat icon="feather" value={`${d.avgSessionMinutes}m`} label="avg session" />
        <Stat icon="sparkles" value={d.totals.events24h} label="events · 24h" />
        <Stat icon="account" value={d.totals.signedIn} label="signed-in users" />
      </div>

      {/* Daily active users */}
      <div className="rounded-card glass p-5">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
          Active users · last 7 days
        </p>
        <div className="flex h-28 items-end gap-2">
          {d.dau.length === 0 && <p className="text-sm text-ink-faint">No data yet.</p>}
          {d.dau.map((x) => (
            <div key={x.day} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="flex w-full flex-1 items-end">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-aqua/40 to-aqua/80"
                  style={{ height: `${(x.users / dauMax) * 100}%` }}
                  title={`${x.users} users`}
                />
              </div>
              <span className="text-[0.6rem] text-ink-faint">{x.day.slice(5)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-card glass p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
            What they do
          </p>
          {d.byType.map((x) => (
            <BarRow key={x.type} label={x.type} n={x.n} max={typeMax} />
          ))}
        </div>
        <div className="rounded-card glass p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
            Top pages
          </p>
          {d.topPages.length === 0 && <p className="text-sm text-ink-faint">No page views yet.</p>}
          {d.topPages.map((x) => (
            <BarRow key={x.path} label={x.path} n={x.n} max={pageMax} />
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="rounded-card glass p-5">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
          Recent activity
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-ink-faint">
              <tr>
                <th className="pb-2 pr-3 font-medium">When</th>
                <th className="pb-2 pr-3 font-medium">Event</th>
                <th className="pb-2 pr-3 font-medium">Path</th>
                <th className="pb-2 pr-3 font-medium">Who</th>
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              {d.recent.map((r, i) => (
                <tr key={i} className="border-t border-white/6">
                  <td className="py-1.5 pr-3 tabular-nums text-ink-faint">{r.at}</td>
                  <td className="py-1.5 pr-3 text-ink">{r.type}</td>
                  <td className="py-1.5 pr-3">{r.path || '—'}</td>
                  <td className="py-1.5 pr-3">
                    {r.signedIn ? <span className="text-aqua">member</span> : `anon·${r.anon}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default async function AdminPage() {
  const admin = await getAdmin();
  if (!admin) notFound();

  const data = dbConfigured ? await getAnalyticsSummary() : null;

  return (
    <main className="pb-8">
      <PageBackdrop immersive={false} />
      <AutoRefresh seconds={30} />
      <PageHeader
        eyebrow={`Signed in as ${admin.email}`}
        title="Admin"
        subtitle="Live usage and activity. Anonymous by design — no prayer or note content is ever recorded."
      />
      <div className="mt-6">
        {data ? (
          <Dashboard d={data} />
        ) : (
          <p className="px-6 text-sm text-ink-muted">Analytics storage isn&rsquo;t configured.</p>
        )}
      </div>
    </main>
  );
}
