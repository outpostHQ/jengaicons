import "@/styles/globals.css"
import "../styles/designSystem.css"
import "../styles/tokens.css"

import type { AppProps } from "next/app"
import AppWrapper from "@/components/shared/AppWrapper"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
