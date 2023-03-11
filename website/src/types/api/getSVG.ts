import { TAPIHandler } from "@/types/api"
import { TVariants } from "../icon"

export type GetSVGRequestBody = {
  iconSafeName: string
  variant: TVariants
  download?: boolean
}

export type GetSVGResponseBody = string

export type GetSVGHandler = TAPIHandler<GetSVGRequestBody, GetSVGResponseBody>
