import type { GetLengthHandler } from "@/types/api/getLength"
import { allIconsMetaData } from "@/constants/icons"
import { IconMetadata } from "@/types/index"

type Tvariants = IconMetadata["variant"]

const handler: GetLengthHandler = (req, res) => {
  res.status(200).json({
    Fill: allIconsMetaData.map((val) => (val.variant as Tvariants) === "fill")
      .length,
    Regular: allIconsMetaData.map(
      (val) => (val.variant as Tvariants) === "regular",
    ).length,
  })
}

export default handler
