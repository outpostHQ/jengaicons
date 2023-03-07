import type { GetLengthHandler } from "@/types/api/getLength"
import iconData from "../../../../optimized/allIconsData.json"
import { IconMetadata } from "@/types/index"

type Tvariants = IconMetadata["variant"]

const handler: GetLengthHandler = (req, res) => {
  res.status(200).json({
    Fill: iconData.map((val) => (val.variant as Tvariants) === "fill").length,
    Regular: iconData.map((val) => (val.variant as Tvariants) === "regular")
      .length,
  })
}

export default handler
