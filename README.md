<div align="center">

# BitLinks — Minimal URL Shortener (Next.js + MongoDB)

Free and open‑source URL shortener focused on simplicity. Create short links, share them, and get instant redirects.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-61dafb)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248)

</div>

---

## Features

- Clean UI with Tailwind CSS
- Create custom short slugs for your links
- Instant redirect via dynamic route `app/[url]/page.js`
- API route to create short links: `POST /api/generate`
- MongoDB persistence

## Tech Stack

- Next.js App Router
- React 19
- MongoDB (official Node driver)
- Tailwind CSS v4

## Quick Start

Prerequisites:
- Node.js 18+ (LTS recommended)
- A MongoDB connection string (Atlas or local)

1) Clone and install

```bash
git clone <your-repo-url> bitlinks
cd bitlinks
npm install
```

2) Configure environment

Create a `.env.local` file in the project root:

```bash
MONGODB_URI="your-mongodb-connection-string"
NEXT_PUBLIC_HOST="http://localhost:3000"
```

Notes:
- `MONGODB_URI` is required by `lib/mongodb.js`.
- `NEXT_PUBLIC_HOST` is used to show the full generated short link in the UI.

3) Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build and Start (Production)

```bash
npm run build
npm run start
```

## Project Structure (important parts)

```text
app/
  page.js                # Landing page
  shorten/page.js        # UI to create short links
  [url]/page.js          # Dynamic redirect route
  api/generate/route.js  # API: create short links
lib/
  mongodb.js             # MongoDB client
public/
  team.png               # Hero image
```

## API

### POST /api/generate

Create a new short link.

Request body:

```json
{
  "url": "https://example.com/very/long/link",
  "shorturl": "my-custom-slug"
}
```

Response (success):

```json
{
  "success": true,
  "error": false,
  "message": "URL generated successfully"
}
```

If `shorturl` already exists, the API responds with:

```json
{
  "success": false,
  "error": true,
  "message": "Short URL already exists"
}
```

## How Redirects Work

- Visiting `http://<host>/<shorturl>` hits `app/[url]/page.js`.
- The page looks up the slug in MongoDB and issues a server redirect to the original URL.
- If not found, it redirects back to `NEXT_PUBLIC_HOST`.

## Deployment

You can deploy anywhere that supports Next.js. Common options:

- Vercel: add the environment variables (`MONGODB_URI`, `NEXT_PUBLIC_HOST`) in the project settings. Then `vercel --prod` or connect your GitHub repo.
- Node server: build with `npm run build` and run with `npm run start`. Ensure env vars are set on the host.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add awesome thing"`
4. Push: `git push origin feat/your-feature`
5. Open a PR

## License

MIT License. See `LICENSE` file if present. If not, you may license this project under MIT with the following header in your contributions:

```text
MIT License © Your Name
```

