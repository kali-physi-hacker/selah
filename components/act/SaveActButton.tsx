'use client';

import { useBookmarks, actBookmarkId, type Bookmark } from '@/lib/useBookmarks';
import { Icon } from '@/components/Icon';

/** Toggle saving the whole act to bookmarks. */
export function SaveActButton({
  slug,
  title,
  accent,
}: {
  slug: string;
  title: string;
  accent: string;
}) {
  const { has, toggle, hydrated } = useBookmarks();
  const id = actBookmarkId(slug);
  const saved = hydrated && has(id);

  const bookmark: Bookmark = {
    id,
    kind: 'act',
    ref: slug,
    label: title,
    actSlug: slug,
    actTitle: title,
    accent,
    createdAt: new Date().toISOString(),
  };

  return (
    <button
      onClick={() => toggle(bookmark)}
      aria-pressed={saved}
      className="inline-flex items-center gap-1.5 rounded-pill bg-white/8 px-3 py-1.5 text-xs text-ink-muted ring-1 ring-white/12 transition-colors hover:bg-white/12"
      title={saved ? 'Remove from saved' : 'Save this act'}
    >
      <Icon
        name={saved ? 'bookmark-check' : 'bookmark'}
        size={15}
        aria-hidden
        className={saved ? 'text-light-warm' : ''}
      />
      {saved ? 'Saved' : 'Save'}
    </button>
  );
}
