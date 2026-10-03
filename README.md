# Piyush Anand — Portfolio

Personal portfolio built with React + Vite, Tailwind CSS, Framer Motion, and AOS.

## Run locally

```bash
npm install
npm run dev
```

> **Windows note:** this project sits under a folder containing `&` (`hackathon&projects`), which
> breaks `npm run` scripts (cmd.exe treats `&` as a command separator). If `npm run dev` fails,
> run vite directly instead:
>
> ```bash
> node node_modules/vite/bin/vite.js dev
> ```
>
> Or move the project to a path without `&` and `npm run dev` will work normally.

## Build for production

```bash
npm run build
```

## Customizing

Almost all site content (name, links, skills, projects, certificates, etc.) lives in one file:

```
src/data/portfolioData.js
```

## Assets

- **Hero video**: `public/hero-video.mp4` (10s, 1280×720) — plays in the hero with the Play Reel button; the illustrated portrait shows as the poster.
- **Resume**: `public/Piyush_Anand_Resume.pdf` — linked from the hero's "Download Resume" button.
