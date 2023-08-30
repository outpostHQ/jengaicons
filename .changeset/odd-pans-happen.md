---
"@jengaicons/react": minor
---

- added nextjs 13 app-directory support
- added nextjs modularize import support to fix tree shaking for app-directory
  (https://nextjs.org/docs/architecture/nextjs-compiler#modularize-imports)
  - This also fixes memory issues, only the icons that are being used are loaded
    in runtime ( significantly reduces time to compile pages during development)
