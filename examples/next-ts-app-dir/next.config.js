const { nextJsModularizeImport } = require("@jengaicons/react/nextjs")

/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@jengaicons/react": nextJsModularizeImport,
  },
}

module.exports = nextConfig
