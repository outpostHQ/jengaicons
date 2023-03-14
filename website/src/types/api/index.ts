import { NextApiRequest, NextApiResponse } from "next"

export type TAPIErrorBody = {
  message: string
}

// @ts-expect-error
export interface TypedNextApiRequest<T> extends NextApiRequest {
  body?: T
}

export type TAPIHandler<ReqBody = {}, ResBody = {}> = (
  req: TypedNextApiRequest<ReqBody>,
  res: NextApiResponse<ResBody>,
) => void | Promise<void>
