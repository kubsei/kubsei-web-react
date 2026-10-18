# kubsei-web-react

Website of Kubsei at [kubsei.com](https://kubsei.com): mission, products (plaart) and contact. Static and informational,
plus an internal area at `/ai` for the team.

Next.js 16 (App Router), React 19, Tailwind 4, React Compiler. Deployed by Vercel's GitHub integration
(`main` = production, PRs = previews).

## Structure

| Path | What |
| --- | --- |
| `/` | Redirects to `/es` or `/en` from the browser's language |
| `/es`, `/en` | Home: hero, products, upcoming, about, contact |
| `/{es,en}/legal`, `/{es,en}/privacy` | Legal notice (LSSI) and privacy policy |
| `/ai` | Internal, Basic Auth (`src/proxy.ts`), noindex, not in the sitemap |

- Texts: `src/locales/{es,en}.json`, rendered on the server; each language has its own URL so both get indexed.
- Legal details and contact email: `src/lib/site.ts` (`LEGAL` must be filled before publishing).
- Provisional brand colors: tokens at the top of `src/app/globals.css`.

## Run

```bash
npm install
npm run dev                     # http://localhost:3000
AI_USER=x AI_PASSWORD=y npm run dev   # to open /ai locally
```

| Variable (Vercel → Settings → Environment Variables) | |
| --- | --- |
| `AI_USER`, `AI_PASSWORD` | Credentials for `/ai`. Without them `/ai` always answers 401 |
