# getpriver.org

The landing page for **Priver** — a serverless, end-to-end encrypted messaging protocol.

> *Your message. Nobody else's.*

A static, single-page site built with Tailwind CSS. The full marketing copy lives in [`PRIVER.md`](./PRIVER.md).

## Develop

```bash
npm install
npm run dev      # rebuild output.css on change
```

## Build

```bash
npm run build    # produces a minified output.css
```

## Deploy

The site is fully static. To deploy, upload:

- `index.html`
- `output.css`
- `images/` (the logo lives in `images/logo/`)
- the favicon and manifest assets at the repo root (`favicon*`, `apple-touch-icon.png`, `android-chrome-*.png`, `site.webmanifest`, `browserconfig.xml`)

## License

MIT.
