import { Block, BreakpointsProvider, Root, SSRProvider } from "@cube-dev/ui-kit"
import { JengaIconContext } from "@jengaicons/react"
import { IconContextProvider } from "@/context/IconContext"
import React, { ReactNode } from "react"
import Layout from "@/shared/Layout"
import { IconInfoDrawerProvider } from "@/hooks/useIconInfoDrawer"
import { ThemeProvider } from "next-themes"

function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <SSRProvider>
      <ThemeProvider enableSystem={false}>
        <Root>
          <Layout>
            <BreakpointsProvider value={[1440, 540]}>
              <IconContextProvider>
                <IconInfoDrawerProvider>
                  <JengaIconContext.Provider
                    value={{
                      color: "var(--cp-icon)",
                      size: "1.25rem",
                    }}
                  >
                    <Block>{children}</Block>
                  </JengaIconContext.Provider>
                </IconInfoDrawerProvider>
              </IconContextProvider>
            </BreakpointsProvider>
          </Layout>
        </Root>
      </ThemeProvider>
    </SSRProvider>
  )
  {
    /* </SSRProvider> */
  }
}

export default AppWrapper
