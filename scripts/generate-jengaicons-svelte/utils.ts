import { readdirSync } from "fs"
export const getJSONFiles = (dir: string) => {
  return readdirSync(dir, {
    withFileTypes: true,
  })
    .filter((file) => file.isFile())
    .filter((file) => /\.json$/i.test(file.name))
    .map((file) => file.name)
}
