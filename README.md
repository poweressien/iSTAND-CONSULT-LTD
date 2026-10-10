# iSTAND CONSULT LTD website

React + TypeScript + Vite, Framer Motion, Three.js (lazy-loaded hero), Lucide icons. Plain CSS design system in `src/styles.css`.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # type-check + production build to dist/
    npm run preview

## Edit content
Everything editable lives in `src/config.ts`: phone numbers, email, services, process steps and the promotion.

## Promotion
`PROMO.enabled` is `false` (the October flyer is historical). To run an offer, set `enabled: true` and update `start`, `end`, `discount`, `headline`, `terms`. It shows only between the start and end dates and hides itself afterwards.

## Contact forms
No backend is included. By default, after validation the form offers "Send on WhatsApp" and "Send by email" buttons with the enquiry pre-filled; nothing is claimed as sent until the visitor sends it. To receive submissions directly, copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a JSON-accepting endpoint (Formspree, Getform, your own API).

## Deploy to Vercel
1. Push this folder to GitHub, import the repo in Vercel (framework: Vite).
2. Build command `npm run build`, output `dist`. `vercel.json` already handles page refreshes on routes.
3. Add `VITE_FORM_ENDPOINT` under Environment Variables if you use one.
Netlify/Cloudflare Pages work too (add an SPA fallback to `index.html`).

## Notes
- The logo is recreated in SVG from the flyer (figure mark + wordmark). Replace `Logo` in `src/components/Chrome.tsx` with the original transparent PNG/SVG when available.
- Add `og-image.png` (1200x630) for best social previews; an SVG placeholder is included.
- Reduced-motion and no-WebGL users get a static hero visual.
# iSTAND-CONSULT-LTD
