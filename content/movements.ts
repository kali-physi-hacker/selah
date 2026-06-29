import type { Movement } from './types';

/**
 * The four movements of the whole story: Creation → Fall → Redemption → Restoration.
 * These tag every act and color the journey arc on the home screen.
 */
export const movements: Movement[] = [
  {
    id: 'creation',
    title: 'Creation',
    tagline: 'In the beginning, everything is good.',
    accent: '#1D9E75',
    summary:
      'God speaks the world into being and calls it good. Out of nothing, by a word, order and life and beauty appear — and humanity is made in his image to know him, steward his world, and rest in his presence.',
  },
  {
    id: 'fall',
    title: 'Fall',
    tagline: 'One choice fractures everything.',
    accent: '#5F5E5A',
    summary:
      'Trust is broken and sin enters the world, splintering our relationship with God, each other, and creation itself. Yet even in the ruins, God makes the first promise of a deliverer — mercy threaded through judgment.',
  },
  {
    id: 'redemption',
    title: 'Redemption',
    tagline: 'God refuses to let the story end in ruin.',
    accent: '#C2410C',
    summary:
      'From a single family to a rescued nation, from law and land to kings and prophets, God patiently works to win his people back — every promise, sacrifice, and longing pointing forward to the One who would come to save.',
  },
  {
    id: 'restoration',
    title: 'Restoration',
    tagline: 'All things are made new.',
    accent: '#BA7517',
    summary:
      'The risen Christ pours out his Spirit, the good news catches fire across the world, and the story comes home: every tear wiped away, Eden restored and surpassed, God dwelling with his people forever.',
  },
];

export const movementById: Record<string, Movement> = Object.fromEntries(
  movements.map((m) => [m.id, m]),
);
