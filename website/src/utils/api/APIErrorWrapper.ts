import { APIError } from "@/utils/api/APIError"

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
