import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { DataControls } from '@/components/about/DataControls';
import { PageBackdrop } from '@/components/PageBackdrop';
import { aboutScenery, IMAGE_CREDIT } from '@/lib/imagery';
import { AMBIENT_ATTRIBUTION } from '@/lib/ambientAudio';
import { AUTH_ENABLED } from '@/lib/authEnabled';
import { Icon } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'About',
  description: 'What Selah is, how to use it, and the heart behind it.',
};

const HOW_TO = [
  { icon: 'compass', title: 'Walk the journey', body: 'The home screen is a single thread from Creation to Revelation. Tap any of the 15 acts to step inside.' },
  { icon: 'book-open', title: 'Go as deep as you like', body: 'Each act has overview, story, people, themes, key words, the thread to Christ, memory verses, reflection, and honest questions.' },
  { icon: 'search', title: 'Search everything', body: 'Find any verse, person, theme, or word across the whole story in a moment.' },
  { icon: 'bookmark', title: 'Keep what speaks to you', body: 'Bookmark verses and acts, and add your own notes and prayers — saved privately on your device.' },
  { icon: 'volume-on', title: 'Let it breathe', body: 'Tap the sound button (lower-left) for a gentle worship soundscape to rest in as you read.' },
];

const LINKS = [
  { href: '/stillness', icon: 'feather', title: 'Stillness', body: 'Timed meditation & guided quiet time.' },
  { href: '/settings', icon: 'settings', title: 'Settings', body: 'Theme (incl. low-light) & soundscape.' },
  ...(AUTH_ENABLED
    ? [
        {
          href: '/account',
          icon: 'account',
          title: 'Account',
          body: 'Your stats, prayers & cross-device sync.',
        },
      ]
    : [
        {
          href: '/account',
          icon: 'account',
          title: 'Account',
          body: 'Your stats and prayer journal.',
        },
      ]),
  { href: '/people', icon: 'users', title: 'People', body: 'The figures who carry the story.' },
  { href: '/glossary', icon: 'languages', title: 'Glossary', body: 'Hebrew & Greek words that unlock the text.' },
  { href: '/read', icon: 'book-open', title: 'Reading plan', body: 'Master the whole Bible in 30 days.' },
];

export default function AboutPage() {
  return (
    <main className="px-4 pb-10 sm:px-6">
      <PageBackdrop scenery={aboutScenery} accent="#67E8F9" intensity="deep" density={0.8} priority />
      <PageHeader
        eyebrow="The heart behind it"
        title="About Selah"
        subtitle="“Selah” is a word scattered through the Psalms — most likely a musical pause, an invitation to stop and consider. That is the whole intent of this app."
      />

      <section className="mt-7 space-y-4">
        <div className="rounded-card glass p-5">
          <p className="leading-relaxed text-ink-muted">
            Selah is a calm, cinematic guide to the <span className="text-ink">whole story of God</span> —
            from the first light of Genesis to the last promise of Revelation, told in 15 acts along the
            ancient four-movement arc:
            <span className="text-ink"> Creation → Fall → Redemption → Restoration.</span>
          </p>
          <p className="mt-3 leading-relaxed text-ink-muted">
            It is built to help you not merely skim the Bible but to <span className="text-ink">internalize</span>{' '}
            it — every act carries the depth of a study Bible with the quiet of a place made for prayer.
            A golden thread of redemption ties every part back to Christ at the center.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 px-1 font-display text-lg text-ink">How to use it</h2>
        <ul className="space-y-3">
          {HOW_TO.map((item) => (
            <li key={item.title} className="flex gap-3 rounded-card glass-soft p-4">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/8 text-aqua">
                <Icon name={item.icon} size={18} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-base text-ink">{item.title}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 px-1 font-display text-lg text-ink">Explore more</h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex h-full flex-col gap-1 rounded-card glass-soft p-4 transition-colors hover:bg-white/10"
              >
                <Icon name={l.icon} size={20} aria-hidden className="text-light-warm" />
                <span className="mt-1 font-display text-base text-ink">{l.title}</span>
                <span className="text-xs leading-relaxed text-ink-faint">{l.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <div className="rounded-card glass-soft p-4">
          <h3 className="font-display text-base text-ink">On scripture & tradition</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">
            All quoted scripture is from the <span className="text-ink">World English Bible</span> (WEB),
            a modern, public-domain translation. Selah aims to serve Catholic, Orthodox, and Protestant
            readers alike: where Christians have genuinely differed — on the days of creation, the
            end times, and more — it presents the major historic views charitably and lets you weigh them.
          </p>
        </div>
        <DataControls />
      </section>

      <p className="mt-8 text-center text-xs leading-relaxed text-ink-faint">
        {IMAGE_CREDIT}
        <br />
        {AMBIENT_ATTRIBUTION}
        <br />
        Made as a quiet place to dwell. May it be, for you, a true <span className="scripture">selah</span>.
      </p>
    </main>
  );
}
