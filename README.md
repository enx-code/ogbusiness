# OG Cocktails

Marketing site for OG, a mobile cocktail service for parties and private events ("You supply, we shake"). Built with React and Vite, deployed to GitHub Pages.

**Live site:** https://enx-code.github.io/ogbusiness/

## What's on the site

- **Hero** — intro and call-to-action (call / WhatsApp)
- **Services** — what OG offers, shown as three cards with photo backgrounds
- **How it works** — booking steps
- **Packages** — House Party, Private Event, Big Night
- **Booking** — contact section with phone and WhatsApp links

## Tech stack

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 8
- [react-router-dom](https://reactrouter.com) (`HashRouter`, so it works on GitHub Pages without server-side routing)
- Plain CSS ([src/css/style.css](src/css/style.css))

## Project structure

```
src/
  components/
    NavBar.jsx   # top nav with brand mark and links
    Home.jsx     # all page sections
  css/
    style.css
  App.jsx        # router setup
  main.jsx       # entry point
public/          # static assets (images, icons) served as-is
```

## Development

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and pushes `dist/` to the `gh-pages` branch. GitHub Pages is configured (Settings → Pages) to serve from the `gh-pages` branch, root folder.

The Vite `base` in [vite.config.js](vite.config.js) is set to `/ogbusiness/` to match the GitHub Pages project path — update it if the repo is ever renamed.
