import { TAPIErrorBody } from "@/types/api"

export class APIError extends Error {
  message: string = "Internal Error"
  _statusCode: number = 500

  _requestBody: TAPIErrorBody = {
    message: "Internal Error",
  }

  constructor() {
    super("Internal Error")
    Object.setPrototypeOf(this, APIError.prototype)
  }

  setStatus(statusCode: number) {
    this._statusCode = statusCode

    return this
  }

  setBody(body: TAPIErrorBody) {
    this.message = body.message
    this._requestBody = body

    return this
  }

  getBody() {
    return this._requestBody
  }
}
