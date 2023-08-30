---
"@jengaicons/react": minor
---

- Added `SWC` bundler that resulted in very fast builds
- Changed build output structure - `cjs` and `esm` types will have their own directory
- Added Next.js 13 App-Directory support
- Added Next.js 13 [Modularize Import](https://nextjs.org/docs/architecture/nextjs-compiler#modularize-imports) support to fix tree shaking for app-directory
  - This also fixes memory issues, only the icons that are being used are loaded
    in runtime ( significantly reduces time to compile pages during development)
