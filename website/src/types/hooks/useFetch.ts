export type Loading = boolean

export type IuseFetch = <Response = undefined, Error = undefined>(obj: {
  url: string
  type: "GET" | "POST"
}) => Readonly<[Loading, Response, Error]>
