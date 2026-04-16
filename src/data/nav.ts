export interface NavLink {
  text: string;
  href: string;
  external?: boolean;
}

export const nav = {
  logo: { src: "/images/logo/default-monochrome.svg", alt: "Priver" },
  links: [
    { text: "Why Priver", href: "/#why" },
    { text: "How it works", href: "/#solution" },
    { text: "Architecture", href: "/#architecture" },
    { text: "Threat model", href: "/threat-model/" },
  ] satisfies NavLink[],
  github: { href: "https://github.com/priver-protocol" },
  downloadCta: { text: "Download", href: "/#download" },
} as const;
