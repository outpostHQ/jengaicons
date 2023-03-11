import { TAPIErrorBody } from "@/types/api"
import { Loading } from "@/types/hooks/useFetch"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"

// type TuseFetchParam<RequestBody, ResponseBody> = {
//   url: string
//   type?: "GET" | "POST"
//   data?: RequestBody
//   makeInitialReq?: boolean
// }

// type TmodifiedParam<RequestBody, ResponseBody> = TuseFetchParam<
//   RequestBody,
//   ResponseBody
// >

// export const useFetch = <RequestBody, ResponseBody>(
//   param0: TuseFetchParam<RequestBody, ResponseBody>,
// ) => {
//   const { makeInitialReq } = param0
//   const [response, setResponse] = useState<ResponseBody>()
//   const [error, setError] = useState<TAPIErrorBody>()
//   const [loading, setLoading] = useState<Loading>(true)

//   const request = useCallback(
//     async (param: TuseFetchParam<RequestBody, ResponseBody> = param0) => {
//       const { type = "GET", url, data } = param

//       setLoading(true)

//       try {
//         let res: ResponseBody

//         switch (type) {
//           case "GET":
//             res = (
//               await axios.get(url, {
//                 data,
//               })
//             )?.data
//             break
//           case "POST":
//             res = (
//               await axios.post(url, {
//                 data,
//               })
//             )?.data
//             break
//         }

//         setResponse(res)
//       } catch (err) {
//         setError(err as Error)
//       } finally {
//         setLoading(false)
//       }
//     },
//     [],
//   )

//   return { loading, response, error, makeRequest } as const
// }

type TuseFetchParam<RequestBody, ResponseBody> = {
  url: string
  type?: "GET" | "POST"
  data?: RequestBody
  makeInitialReq?: boolean
}

export const useFetch = <RequestBody = undefined, ResponseBody = undefined>(
  param0: TuseFetchParam<RequestBody, ResponseBody>,
) => {
  const { type = "GET", url, data: reqData, makeInitialReq } = param0
  const [response, setResponse] = useState<ResponseBody>()
  const [error, setError] = useState<TAPIErrorBody>()
  const [loading, setLoading] = useState<Loading>(true)

  const request = useCallback(async () => {
    setLoading(true)

    try {
      let res: ResponseBody

      switch (type) {
        case "GET":
          res = await axios
            .get(url, {
              data: reqData,
            })
            .then((res) => res?.data)

          break
        case "POST":
          res = await axios
            .post(url, {
              data: reqData,
            })
            .then((res) => res?.data)
          break
      }
      // console.log(
      //   await axios
      //     .get(url, {
      //       data: reqData,
      //     })
      //     .then((res) => res?.data),
      // )
      setResponse(res)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [param0])

  useEffect(() => {
    if (makeInitialReq) request()
  }, [])

  return { loading, response, error, request } as const
}

export default useFetch
