---
status: pending
title: Hello World Page
---

1. Scaffold the base app files if missing: `index.html`, `package.json` (React, Vite, TypeScript, TanStack Router, Tailwind CSS v4 with `@tailwindcss/vite`), `vite.config.ts` (React plugin, `@tailwindcss/vite` plugin, `@tanstack/router-plugin/vite`, `@/` alias to `src/`), `tsconfig.json` with the same `@/` path alias. Expected outcome: `npm run dev` can start a Vite app with file-based routing and Tailwind processing.

2. Create `src/styles/global.css` containing exactly one line importing Tailwind. Expected outcome: single stylesheet, Tailwind utilities available app-wide.

3. Create `src/main.tsx` that imports `src/styles/global.css` once, builds the router from the generated `src/routeTree.gen.ts`, and mounts the app into the `#root` element. Expected outcome: app boots with routing enabled.

4. Create `src/routes/__root.tsx` as the app shell: a root route rendering a full-height, minimal wrapper with the route outlet inside. Expected outcome: consistent shell for all routes with no extra chrome.

5. Create `src/routes/index.tsx` for the home route `/`: a full-viewport-height flex container centering content both horizontally and vertically, rendering the text "Hello World" as a large, semibold heading with a neutral text color. Expected outcome: visiting `/` shows centered "Hello World".

6. Verify: start the dev server, confirm `src/routeTree.gen.ts` is generated automatically (never hand-edited), and confirm the home page renders centered text with no TypeScript errors. Expected outcome: clean, minimal Hello World page.
