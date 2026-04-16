// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://getpriver.org",
  trailingSlash: "ignore",
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: {
        lucide: ["*"],
        "simple-icons": ["github", "apple", "android", "linux"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["400", "500", "600", "700", "800"],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
  build: {
    format: "directory",
  },
  devToolbar: {
    enabled: false,
  },
});
