import { Check, Spinner, X } from "@jengaicons/react"
import styled from "styled-components"

export const CPIconLoading = styled(Spinner)`
  animation: ckw-rotate 3s linear infinite;
  @keyframes ckw-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const CPIconCheck = styled(Check)`
  color: green;
`

export const CPIconClose = styled(X)`
  color: red;
`
