# Tech Twist Global website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Node.js API route.

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

Edit your details in `lib/site.ts` (phone, email, address, services).
Contact form posts to `app/api/contact/route.ts`: connect it to email or a CRM where marked TODO.
Brand: Forest Gold, Plus Jakarta Sans (colors in `tailwind.config.ts`).

## GitHub

    git init -b main
    git add .
    git commit -m "Initial commit: Tech Twist Global website"
    git remote add origin https://github.com/<your-username>/techtwist-web.git
    git push -u origin main

CI (type-check + build) runs on every push and pull request: `.github/workflows/ci.yml`.
Run `npm install` once and commit `package-lock.json` (CI uses `npm ci`).
