import { Marked } from "marked";

const marked = new Marked({
  gfm: true,
  breaks: false,
  async: false,
});

/** Inline markdown (no surrounding <p>). Suitable for short strings inside headings, paragraphs. */
export function renderInline(src: string): string {
  return marked.parseInline(src) as string;
}

/** Block markdown (paragraphs preserved). */
export function renderBlock(src: string): string {
  return marked.parse(src) as string;
}
