import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction } from "@remix-run/node"

import {
  JengaIconContext,
  ActivityFill,
  Activity,
  AirplayMono,
} from "@jengaicons/react"

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <html lang='en'>
      <div style={{ color: "green" }}>
        <Activity weight={"0.5px"} size='300px' />
      </div>
      <JengaIconContext.Provider
        value={{
          color: "red",
        }}
      >
        <div>
          <ActivityFill size={300} />

          <AirplayMono size={300} alt='Airplay icon' />
        </div>
      </JengaIconContext.Provider>
    </html>
  )
}
