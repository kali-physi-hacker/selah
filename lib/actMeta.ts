import type { ActContent, MovementId } from '@/content/types';

/** The light slice of an act used by journey cards & client components. */
export interface ActMeta {
  number: number;
  slug: string;
  title: string;
  movement: MovementId;
  books: string;
  era: string;
  accent: string;
  icon: string;
  teaser: string;
  isClimax: boolean;
  banner?: string;
}

export function toMeta(act: ActContent): ActMeta {
  return {
    number: act.number,
    slug: act.slug,
    title: act.title,
    movement: act.movement,
    books: act.books,
    era: act.era,
    accent: act.accent,
    icon: act.icon,
    teaser: act.teaser,
    isClimax: Boolean(act.isClimax),
    banner: act.banner,
  };
}
