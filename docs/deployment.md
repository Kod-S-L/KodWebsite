# Deployment Notes

The KOD website is a **static Astro site** and is deployed on **Vercel**.

---

## Vercel — Recommended Deployment

### One-click via Vercel UI

1. Push your branch to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Astro. Accept the defaults:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
4. Click **Deploy**.

### Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Environment variables

No environment variables are required for the static build.  
Add them in the Vercel dashboard under **Settings → Environment Variables**
if server-side features are added later.

---

## Other Static Hosts

Because the output is plain HTML/CSS/JS in `dist/`, the site can also be
deployed to:

| Host | Notes |
|------|-------|
| **Netlify** | Drag-and-drop `dist/` or connect the repo |
| **GitHub Pages** | Use the `peaceiris/actions-gh-pages` action |
| **Cloudflare Pages** | Auto-detects Astro |
| **Any CDN/VPS** | Serve the `dist/` folder with nginx / Caddy |

---

## Custom Domain

Configure a custom domain in the Vercel dashboard under  
**Project → Settings → Domains**.

---

## Continuous Deployment

Vercel automatically redeploys on every push to the connected branch  
(default: `main`). Preview deployments are created for pull requests.

---

## Build Checks

Before merging to `main`, make sure:

```bash
npm run build   # must succeed with no errors
npm run preview # verify the output looks correct locally
```
