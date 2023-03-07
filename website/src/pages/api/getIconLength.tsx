import type { GetLengthHandler } from "@/types/api/getLength"
import { FillIconMetaData, RegularIconMetaData } from "@/constants/icons"

const handler: GetLengthHandler = (req, res) => {
  res.status(200).json({
    fill: FillIconMetaData.length,
    regular: RegularIconMetaData.length,
  })
}

export default handler
