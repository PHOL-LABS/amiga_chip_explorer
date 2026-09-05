# Amiga Chip Explorer

Amiga Chip Explorer is a retro-styled reference application for exploring key custom and support ICs across classic Commodore Amiga systems.

It provides two main workflows:

- **Chip Library**: browse chips by Amiga model and review package, pin-count, and function metadata.
- **Schematic Viewer**: inspect an individual chip package, click pins, and view signal-level reference media.

## Project Goals

- Centralize core chip reference data for multiple Amiga generations.
- Offer a fast visual workflow for moving from model → chip → pin details.
- Keep a compact, browser-based UI suitable for hobby electronics, reverse engineering, and preservation work.

## Supported Amiga Models

The current dataset includes:

- A1200
- A600
- A500
- A2000
- CD32
- A3000
- A4000
- CDTV

## Key Features

- **Interactive model and chip navigation** with URL-synced state in the schematic viewer.
- **Chip metadata catalog** including part number, package type, and pin count.
- **Pin selection + signal panel** for focused per-pin review.
- **Retro terminal/CRT-inspired interface** tuned for high-contrast reference use.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the development server

```bash
npm run dev
```

Open [http://localhost:4028](http://localhost:4028).

## Static deployment

The application is exported to `out/`. By default it targets the `/achip-explorer` deployment
folder used on `phol-labs.com`.

For `https://phol-labs.com/achip-explorer/index.html`:

```bash
npm run build
```

Upload the contents of `out/` into the host's `achip-explorer/` folder.

For a different subfolder:

```bash
npm run build -- --base-path=/different-folder
```

For a site hosted at the domain root, such as `https://website2.com/index.html`:

```bash
npm run build:root
```

Upload the contents of `out/` to the website document root. The build validates generated URLs
and writes the selected target to `out/deployment-info.json`. Rebuild when the deployment folder
changes.

Do not open `out/index.html` directly with a `file://` URL. Test it through an HTTP server or on
the hosting account so that JavaScript modules and nested routes are served correctly.

## Available Scripts

- `npm run dev` — start development server on port `4028`
- `npm run build` — create a `/achip-explorer` static export
- `npm run build:root` — create a root-hosted static export
- `npm run build -- --base-path=/folder` — create a subfolder-hosted static export
- `npm run serve` — run production server
- `npm run lint` — run ESLint checks
- `npm run lint:fix` — auto-fix lint issues where possible
- `npm run type-check` — run TypeScript checks without emitting files
- `npm run format` — format source files with Prettier

## Main Routes

- `/chip-library` — main chip browsing interface
- `/schematic-viewer` — package/pin viewer

The schematic viewer accepts URL search params (such as `modelId`, `chipId`, `package`, and `pinCount`) so selected context can be shared or revisited.

## Project Structure

```text
src/
├── app/
│   ├── chip-library/         # Chip catalog UI + model/chip data
│   └── schematic-viewer/     # Interactive package and signal viewer
├── components/               # Shared layout and UI components
└── styles/                   # Global styles and Tailwind layers
```

## Notes

- This project uses static in-repo model/chip definitions as its initial data source.
- Signal reference media is loaded from `public/assets/signals/...` paths in the schematic workflow.

## Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Initially scaffolded with Rocket.new
