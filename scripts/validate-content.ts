/**
 * Standalone content validator. Run with: npm run validate-content
 * Importing the content graph triggers zod validation at module load.
 */
import { acts, glossary, people } from '../content/index';

console.log('✓ Content validated successfully.');
console.log(`  • ${acts.length} acts`);
console.log(`  • ${people.length} people`);
console.log(`  • ${glossary.length} glossary terms`);

const thin = acts.filter((a) => a.deepDive.length < 4);
if (thin.length > 0) {
  console.warn(
    `\n⚠ ${thin.length} act(s) have fewer than 4 deep-dive sections (target 4–8):`,
  );
  thin.forEach((a) => console.warn(`    - Act ${a.number}: ${a.title} (${a.deepDive.length})`));
}
