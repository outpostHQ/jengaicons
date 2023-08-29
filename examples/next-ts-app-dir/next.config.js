/** @type {import('next').NextConfig} */
const jengaIconsImportConditions = `{{#if (eq member "JengaIconContext" )}}/dist/cjs/context{{else}}/dist/cjs/icons/{{member}}{{/if}}`

const nextConfig = {
  modularizeImports: {
    "@jengaicons/react": {
      transform: `@jengaicons/react${jengaIconsImportConditions}`,
    },
  },
}

module.exports = nextConfig
