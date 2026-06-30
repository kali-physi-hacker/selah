/**
 * Map between character offsets within a block element and live DOM Ranges.
 * Offsets are measured against the block's rendered text (Range.toString),
 * which stays stable across re-renders of static content — so highlights can be
 * persisted as plain numbers and rebuilt later, even across inline <strong>/<em>.
 */

/** Char offsets of a selection range within `root` (null if it's outside). */
export function offsetsFromRange(
  root: HTMLElement,
  range: Range,
): { start: number; end: number } | null {
  if (!root.contains(range.startContainer) || !root.contains(range.endContainer)) return null;
  const pre = document.createRange();
  pre.selectNodeContents(root);
  try {
    pre.setEnd(range.startContainer, range.startOffset);
  } catch {
    return null;
  }
  const start = pre.toString().length;
  const len = range.toString().length;
  if (len === 0) return null;
  return { start, end: start + len };
}

/** Locate the text node + local offset for a char offset within `root`. */
function locate(root: Node, target: number): { node: Text; offset: number } | null {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let acc = 0;
  let node = walker.nextNode() as Text | null;
  while (node) {
    const len = node.data.length;
    if (target <= acc + len) return { node, offset: target - acc };
    acc += len;
    node = walker.nextNode() as Text | null;
  }
  return null;
}

/** Rebuild a DOM Range from stored char offsets within `root`. */
export function rangeFromOffsets(root: HTMLElement, start: number, end: number): Range | null {
  const s = locate(root, start);
  const e = locate(root, end);
  if (!s || !e) return null;
  try {
    const range = document.createRange();
    range.setStart(s.node, s.offset);
    range.setEnd(e.node, e.offset);
    return range;
  } catch {
    return null;
  }
}

export const supportsHighlightApi = (): boolean =>
  typeof CSS !== 'undefined' && 'highlights' in CSS;
