import "@/styles/globals.css";
import "../styles/designSystem.css";
import "../styles/tokens.css";

import type { AppProps } from "next/app";
import { Root } from "@cube-dev/ui-kit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}
