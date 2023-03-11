import { TVariants } from "@/types/index"
import { TAPIHandler } from "@/types/api"

export type GetLengthResponse = {
  [variant in TVariants]: number
}
export type GetLengthHandler = TAPIHandler<undefined, GetLengthResponse>
