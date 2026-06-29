import React from 'react';

/**
 * A tiny, dependency-free markdown renderer for the content `body` fields.
 * Supports exactly what the content uses:
 *   - paragraphs (blank line separated)
 *   - "- " bullet lists
 *   - **bold** and *italic* inline
 *
 * This keeps the bundle lean and the content fully static.
 */

let keyCounter = 0;
const nextKey = () => `md-${keyCounter++}`;

/** Parse inline **bold** / *italic* into React nodes. */
function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Split on bold first, then italic inside each chunk.
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
  for (const part of boldParts) {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      nodes.push(
        <strong key={nextKey()} className="font-semibold text-ink">
          {renderItalic(part.slice(2, -2))}
        </strong>,
      );
    } else if (part) {
      nodes.push(...renderItalic(part));
    }
  }
  return nodes;
}

function renderItalic(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const parts = text.split(/(\*[^*]+\*)/g);
  for (const part of parts) {
    if (/^\*[^*]+\*$/.test(part)) {
      nodes.push(
        <em key={nextKey()} className="italic text-ink/90">
          {part.slice(1, -1)}
        </em>,
      );
    } else if (part) {
      nodes.push(<React.Fragment key={nextKey()}>{part}</React.Fragment>);
    }
  }
  return nodes;
}

interface MarkdownProps {
  content: string;
  className?: string;
}

/** Render a content body string as calm, readable prose. */
export function Markdown({ content, className }: MarkdownProps) {
  const blocks = content.trim().split(/\n{2,}/);

  return (
    <div className={className}>
      {blocks.map((block) => {
        const lines = block.split('\n');
        const isList = lines.every((l) => l.trim().startsWith('- '));

        if (isList) {
          return (
            <ul key={nextKey()} className="my-3 space-y-2 pl-1">
              {lines.map((line) => (
                <li key={nextKey()} className="flex gap-3 text-ink-muted">
                  <span
                    aria-hidden
                    className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-current opacity-60"
                  />
                  <span className="leading-relaxed">
                    {renderInline(line.replace(/^\s*-\s+/, ''))}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={nextKey()} className="my-3 leading-relaxed text-ink-muted first:mt-0 last:mb-0">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
