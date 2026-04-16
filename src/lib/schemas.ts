import { z } from "astro:content";
import type * as zCore from "zod/v4";

/* ============================================================
 * Atoms
 * ========================================================= */

export const buttonSchema = z.object({
  text: z.string().optional(),
  href: z.string().optional(),
  variant: z
    .enum(["primary", "secondary", "ghost", "platform", "header"])
    .default("primary"),
  size: z.enum(["sm", "md", "lg"]).default("md"),
  icon_left: z.string().optional(),
  icon_right: z.string().optional(),
  external: z.boolean().default(false),
  /** platform variant only — caption above the platform name. */
  platform_label: z.string().optional(),
  /** override classes (use sparingly). */
  class: z.string().optional(),
});

export const statSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const cardSchema = z.object({
  /** iconify id (e.g. "lucide:shield-check"). Optional for plain cards. */
  icon: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  /** "highlight" gives the gradient-bordered styling. */
  variant: z.enum(["default", "highlight", "plain"]).default("default"),
  layer_number: z.string().optional(),
  layer_subtitle: z.string().optional(),
});

/**
 * Headings are plain text with inline markdown:
 *   **bold**  → <strong> with brand gradient (primary emphasis)
 *   *italic*  → <em>     with muted color    (secondary distinction)
 */
export const headingSchema = z.string();

/* ============================================================
 * Page-level SEO envelope
 * ========================================================= */

export const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  canonical: z.string().optional(),
  og_image: z.string().optional(),
  og_type: z.string().default("website"),
  no_index: z.boolean().default(false),
  twitter_card: z.enum(["summary", "summary_large_image"]).default("summary"),
});

/* ============================================================
 * Blocks
 * ========================================================= */

const heroBlock = z.object({
  _component: z.literal("hero"),
  badge: z
    .object({
      text: z.string(),
      href: z.string().optional(),
      pulse: z.boolean().default(true),
    })
    .optional(),
  heading: headingSchema,
  description: z.string(),
  buttons: z.array(buttonSchema).default([]),
  stats: z.array(statSchema).optional(),
});

const featureGridBlock = z.object({
  _component: z.literal("feature-grid"),
  id: z.string().optional(),
  background: z.enum(["white", "zinc-50"]).default("white"),
  label: z.string().optional(),
  heading: headingSchema.optional(),
  description: z.string().optional(),
  bullets: z.array(z.object({ text: z.string() })).optional(),
  subheading: z.string().optional(),
  columns: z.union([z.literal(2), z.literal(3), z.literal(5)]).default(3),
  cards: z.array(cardSchema),
  closing: z
    .object({
      primary: z.string(),
      secondary: z.string().optional(),
    })
    .optional(),
});

const ctaBannerBlock = z.object({
  _component: z.literal("cta-banner"),
  label: z.string().optional(),
  heading: z.string(),
  description: z.string(),
  button: buttonSchema,
});

const closingTextBlock = z.object({
  _component: z.literal("closing-text"),
  primary: z.string(),
  secondary: z.string().optional(),
});

const protocolSectionBlock = z.object({
  _component: z.literal("protocol-section"),
  id: z.string().optional(),
  label: z.string(),
  heading: headingSchema,
  paragraphs: z.array(z.string()),
  callout: z.object({
    quote: z.string(),
    punchline: z.string(),
    cards: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .length(3),
  }),
});

const downloadCtaBlock = z.object({
  _component: z.literal("download-cta"),
  id: z.string().default("download"),
  label: z.string(),
  heading: z.string(),
  description: z.string(),
  buttons: z.array(buttonSchema),
  footer_note: z.string().optional(),
});

export const verdictSchema = z.enum(["yes", "no", "partial"]);

const comparisonTableBlock = z.object({
  _component: z.literal("comparison-table"),
  id: z.string().optional(),
  label: z.string(),
  heading: headingSchema,
  description: z.string().optional(),
  columns: z.array(z.string()),
  highlight_last: z.boolean().default(true),
  rows: z.array(
    z.object({
      capability: z.string(),
      verdicts: z.array(verdictSchema),
    }),
  ),
  legend: z.string().optional(),
});

const chatControlCalloutBlock = z.object({
  _component: z.literal("chat-control-callout"),
  label: z.string(),
  heading: z.string(),
  paragraphs: z.array(z.string()),
  bullets: z.array(z.string()),
  quote_cards: z
    .array(
      z.object({
        body: z.string(),
        source: z.string(),
        href: z.string(),
      }),
    )
    .max(2),
  status: z.object({
    text: z.string(),
    link_text: z.string(),
    href: z.string(),
  }),
  closer: z.string().optional(),
});

const articleCardsGridBlock = z.object({
  _component: z.literal("article-cards-grid"),
  id: z.string().optional(),
  background: z.enum(["white", "zinc-50"]).default("white"),
  label: z.string(),
  heading: headingSchema,
  description: z.string(),
  cards: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      source_text: z.string(),
      source_href: z.string(),
    }),
  ),
  closer: z.string().optional(),
});

/* ============================================================
 * Page schema
 * ========================================================= */

export const blockSchema = z.discriminatedUnion("_component", [
  heroBlock,
  featureGridBlock,
  ctaBannerBlock,
  closingTextBlock,
  protocolSectionBlock,
  downloadCtaBlock,
  comparisonTableBlock,
  chatControlCalloutBlock,
  articleCardsGridBlock,
]);

export type Block = zCore.infer<typeof blockSchema>;
export type ButtonData = zCore.infer<typeof buttonSchema>;
export type CardData = zCore.infer<typeof cardSchema>;
export type StatData = zCore.infer<typeof statSchema>;
export type SeoData = zCore.infer<typeof seoSchema>;
export type Verdict = zCore.infer<typeof verdictSchema>;

export const pageSchema = z.object({
  title: z.string(),
  seo: seoSchema.optional(),
  blocks: z.array(blockSchema).default([]),
});

export type PageData = zCore.infer<typeof pageSchema>;
