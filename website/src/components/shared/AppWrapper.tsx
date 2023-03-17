import { Block, BreakpointsProvider, Root, SSRProvider } from "@cube-dev/ui-kit"
import { JengaIconContext } from "@jengaicons/react"
import { IconContextProvider } from "@/context/IconContext"
import React, { ReactNode } from "react"
import Layout from "@/shared/Layout"
import { IconInfoDrawerProvider } from "@/hooks/useIconInfoDrawer"
import { ThemeProvider } from "next-themes"
import { Provider as JotaiProvider } from "jotai"

function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <SSRProvider>
      <JotaiProvider>
        <ThemeProvider enableSystem={false}>
          <BreakpointsProvider value={[1440, 540]}>
            <Root>
              <Layout>
                <JengaIconContext.Provider
                  value={{
                    color: "var(--cp-icon)",
                    size: "1.25rem",
                  }}
                >
                  <Block>{children}</Block>
                </JengaIconContext.Provider>
              </Layout>
            </Root>
          </BreakpointsProvider>
        </ThemeProvider>
      </JotaiProvider>
    </SSRProvider>
  )
  {
    /* </SSRProvider> */
  }
}

export default AppWrapper
