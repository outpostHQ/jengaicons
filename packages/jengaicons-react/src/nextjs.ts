const jengaIconsImportConditions = `{{#if (eq member "JengaIconContext" )}}/dist/esm/context{{else}}/dist/esm/icons/{{member}}{{/if}}`
export const nextJsModularizeImport = {
  transform: `@jengaicons/react${jengaIconsImportConditions}`,
}
