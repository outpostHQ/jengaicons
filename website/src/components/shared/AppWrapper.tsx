import { Block, BreakpointsProvider, Root, SSRProvider } from "@cube-dev/ui-kit"
import { JengaIconContext } from "@jengaicons/react"
import { IconContextProvider } from "@/context/IconContext"
import React, { ReactNode } from "react"
import Layout from "./Layout"

function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <Root>
      <Layout>
        <SSRProvider>
          <BreakpointsProvider value={[1440, 540]}>
            <IconContextProvider>
              <JengaIconContext.Provider
                value={{
                  color: "var(--cp-icon)",
                  size: "0.75rem",
                }}
              >
                <Block>{children}</Block>
              </JengaIconContext.Provider>
            </IconContextProvider>
          </BreakpointsProvider>
        </SSRProvider>
      </Layout>
    </Root>
  )
}

export default AppWrapper
