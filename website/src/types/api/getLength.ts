import { NextApiRequest, NextApiResponse } from "next"
import { TVariants } from "@/types/index"

export type NextHandler<ReqBody = {}, ResBody = {}> = (
  req: NextApiRequest & { body?: ReqBody },
  res: NextApiResponse<ResBody>,
) => void

export type GetLengthResponse = {
  [variant in TVariants]: number
}
export type GetLengthHandler = NextHandler<undefined, GetLengthResponse>
