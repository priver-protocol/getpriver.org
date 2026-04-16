export interface FooterLink {
  text: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export const footer = {
  logo: { src: "/images/logo/default-monochrome.svg", alt: "Priver" },
  taglineHtml:
    '<span class="text-zinc-900 font-semibold">Priver</span> — <em>Your message. Nobody else\'s.</em>',
  credit: "Developed by Jetlio. Owned by no one.",
  columns: [
    {
      heading: "Product",
      links: [
        { text: "Why Priver", href: "/#why" },
        { text: "How it works", href: "/#solution" },
        { text: "Architecture", href: "/#architecture" },
        { text: "Threat model", href: "/threat-model/" },
        { text: "Download", href: "/#download" },
      ],
    },
    {
      heading: "Protocol",
      links: [
        {
          text: "GitHub",
          href: "https://github.com/priver-protocol",
          external: true,
        },
        { text: "Specification", href: "/#protocol" },
        {
          text: "Self-host gateway",
          href: "https://github.com/priver-protocol",
          external: true,
        },
      ],
    },
    {
      heading: "Contact",
      links: [
        { text: "hello@getpriver.org", href: "mailto:hello@getpriver.org" },
        { text: "getpriver.org", href: "https://getpriver.org" },
      ],
    },
  ] satisfies FooterColumn[],
  copyrightTemplate:
    "© {year} Priver Protocol. Released under an open license.",
  legal: "No accounts. No phone numbers. No servers. No middlemen.",
} as const;
