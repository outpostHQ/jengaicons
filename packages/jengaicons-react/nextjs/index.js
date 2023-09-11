const jengaIconsImportConditions = `{{#if (eq member "JengaIconContext" )}}/dist/esm/context{{else}}/dist/esm/icons/{{member}}{{/if}}`
module.exports.nextJsModularizeImport = {
  transform: `@jengaicons/react${jengaIconsImportConditions}`,
}
