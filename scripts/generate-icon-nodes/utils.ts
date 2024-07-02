export const toKebabCase = (str: string) => {
  return str
    .replace(/\s+/g, "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
}
