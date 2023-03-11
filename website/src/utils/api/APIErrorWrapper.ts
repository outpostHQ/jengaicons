import { TAPIErrorBody, TAPIHandler, TypedNextApiRequest } from "@/types/api"
import { APIError } from "@/utils/api/APIError"
import { NextApiResponse } from "next/types"

export const APIErrorWrapper = <Handler extends Function>(
  APIHandler: Handler,
): Handler => {
  return (async (req: any, res: any) => {
    try {
      await APIHandler(req, res)
    } catch (err) {
      if (err instanceof APIError) {
        res.statusCode = err._statusCode
        res.json(err.getBody())
      } else {
        res.statusCode = 500
        res.json({
          message: "Internal Error",
        })
      }
    }
    // TODO: fix typing
  }) as unknown as Handler
}
