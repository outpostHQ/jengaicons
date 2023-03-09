import { APIError } from "@/types/api"
import { Loading } from "@/types/hooks/useFetch"
import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = <Response, Error = APIError>({
  type = "GET",
  url,
  data,
}: {
  url: string
  type?: "GET" | "POST"
  data?: any
}) => {
  const [response, setResponse] = useState<Response>()
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState<Loading>(true)

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      try {
        let res: Response

        switch (type) {
          case "GET":
            res = (
              await axios.get(url, {
                data,
              })
            )?.data
            break
          case "POST":
            res = (
              await axios.post(url, {
                data,
              })
            )?.data
            break
        }

        setResponse(res)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return [loading, response, error] as const
}

export default useFetch
