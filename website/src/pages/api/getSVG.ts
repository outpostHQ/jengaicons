import type { GetSVGHandler } from "@/types/api/getSVG"
import { allIconsMetaData } from "@/constants/icons"
import { IconMetadata, TIconSafeName } from "@/types"
import { APIErrorWrapper } from "@/utils/api/APIErrorWrapper"
import { APIError } from "@/utils/api/APIError"
import { readFile } from "fs/promises"
import { totalVariants } from "@/utils/icons"
import { createReadStream } from "fs"
type Tvariants = IconMetadata["variant"]

const safeNameCache = allIconsMetaData.reduce((cache, iconMD) => {
  cache.add(iconMD.safeName)
  return cache
}, new Set<(typeof allIconsMetaData)[number]["safeName"]>())

const variantCache = allIconsMetaData.reduce((cache, iconMD) => {
  cache.add(iconMD.safeName)
  return cache
}, new Set<(typeof allIconsMetaData)[number]["safeName"]>())

const isValidIconSafeName = (iconSafeName: string, variant: string) => {
  return (
    totalVariants.has(variant as Tvariants) && safeNameCache.has(iconSafeName)
  )
}

const getIconFilePath = (IconSafeName: TIconSafeName, variant: Tvariants) => {
  return `src/iconSVGS/${variant}/${IconSafeName}.svg`
}

const ReadSVG = (IconSafeName: TIconSafeName, variant: Tvariants) => {
  return readFile(getIconFilePath(IconSafeName, variant), {
    encoding: "utf-8",
  })
}

const handler: GetSVGHandler = async (req, res) => {
  try {
    //@ts-expect-error
    const reqBody = req.body?.data as (typeof req)["body"]
    const iconSafeName = reqBody?.iconSafeName
    const variant = reqBody?.variant
    const isDownload = reqBody?.download

    if (!iconSafeName || !variant) {
      throw new APIError()
        .setBody({
          message: "Provide Icon's SafeName & Variant'",
        })
        .setStatus(400)
    }

    if (!isValidIconSafeName(iconSafeName, variant))
      throw new APIError()
        .setBody({
          message: "Invalid Icon name",
        })
        .setStatus(400)

    res.setHeader("Content-Type", "image/svg+xml")
    if (isDownload) {
      //Set the proper headers
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${iconSafeName}.svg`,
      )

      //Create a read stream and pipe to the response
      createReadStream(getIconFilePath(iconSafeName, variant)).pipe(res)
    } else res.status(200).send(await ReadSVG(iconSafeName, variant))
  } catch (err) {
    console.error(err)

    if (err instanceof APIError) {
      res.statusCode = err._statusCode
      // @ts-expect-error
      res.json(err.getBody())
    } else {
      res.statusCode = 500
      // @ts-expect-error
      res.json({
        message: "Internal Error",
      })
    }
  }
}

export default handler
