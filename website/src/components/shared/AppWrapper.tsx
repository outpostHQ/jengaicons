import { Block, BreakpointsProvider, Root } from "@cube-dev/ui-kit";
import { JengaIconContext } from "@jengaicons/react";
import React, { ReactNode } from "react";
import Layout from "./Layout";

function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <Root>
      <Layout>
        <BreakpointsProvider value={[1440, 540]}>
          <JengaIconContext.Provider
            value={{
              color: "var(--cp-icon)",
              size: "0.75rem",
            }}
          >
            <Block>{children}</Block>
          </JengaIconContext.Provider>
        </BreakpointsProvider>
      </Layout>
    </Root>
  );
}

export default AppWrapper;
