import type { ActContent } from '../types';

import { creation } from './01-creation';
import { theFall } from './02-the-fall';
import { thePatriarchs } from './03-the-patriarchs';
import { exodus } from './04-exodus';
import { lawAndWilderness } from './05-law-and-wilderness';
import { promisedLand } from './06-promised-land';
import { kingdomRises } from './07-kingdom-rises';
import { kingdomFalls } from './08-kingdom-falls';
import { wisdom } from './09-wisdom';
import { theProphets } from './10-the-prophets';
import { returnAndSilence } from './11-return-and-silence';
import { theMessiah } from './12-the-messiah';
import { theChurch } from './13-the-church';
import { theLetters } from './14-the-letters';
import { revelation } from './15-revelation';

/** All 15 acts, in canonical order. */
export const acts: ActContent[] = [
  creation,
  theFall,
  thePatriarchs,
  exodus,
  lawAndWilderness,
  promisedLand,
  kingdomRises,
  kingdomFalls,
  wisdom,
  theProphets,
  returnAndSilence,
  theMessiah,
  theChurch,
  theLetters,
  revelation,
].sort((a, b) => a.number - b.number);
