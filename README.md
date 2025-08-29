# Web Portfolio Backend — Sanity Studio (Essentials)

This is the backend (CMS) for my web portfolio, built with Sanity Studio v4 to manage content (projects, images, tech stack).

## Quick Start

```bash
# Install deps
npm install

# Run Studio (dev)
npm run dev

# Build Studio (prod)
npm run build

# Start built Studio
npm run start
```

Open http://localhost:3333 (default) or the URL shown in terminal.

## Environment

If you fetch data from a frontend app, use these vars in that app (.env.local):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=z7pmw5ai
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
# Server-only (optional, private dataset):
SANITY_API_READ_TOKEN=your_read_token
```

Also add CORS origins in Sanity Manage → API → CORS:
- http://localhost:3000 (dev frontend)
- https://yourdomain.com (prod)

## Scripts

- dev: sanity dev
- build: sanity build
- start: sanity start

Run with:
```bash
npm run <script>
```

## Content Types (summary)

- Project: title, slug, description, technologies[] (iconUrl), images[] (image, alt, isMain), githubUrl, featured, yearCreated, category
- Certificate: basic certificate fields

## Config (already set)

- projectId: z7pmw5ai
- dataset: production
- autoUpdates: enabled
