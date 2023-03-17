import { CubeFlexProps, Flex } from "@cube-dev/ui-kit"
import React from "react"
import { CPText } from "./library"
import SectionContainer from "./SectionContainer"

function Footer(props: CubeFlexProps) {
  return (
    <SectionContainer>
      <Flex
        gap='0.5rem'
        flow={["row", "row", "column"]}
        padding='62px 0'
        style={{ borderTop: "1px solid var(--cp-border)" }}
        justifyContent='space-between'
        textAlign={["start", "start", "center"]}
        {...props}
      >
        <CPText variant='heading'>
          Built by <span style={{ fontWeight: "600" }}>Outpost</span>
        </CPText>
        <Flex
          gap='0.25rem'
          margin={[0, 0, "1.4rem 0 0 0"]}
          flow={["row", "row", "column"]}
        >
          <CPText color='var(--cp-gray-400)'>
            Copyright&copy; 2022 Outpost{" "}
          </CPText>
          <CPText color='var(--cp-gray-400)' hide={[true, false, false]}>
            All rights reserved
          </CPText>
          <CPText color='var(--cp-gray-400)' hide={[false, false, true]}>
            &nbsp; / &nbsp;
          </CPText>
          <CPText fontWeight='medium' margin={[0, 0, "0.75rem 0 0 0"]}>
            Trademark policy
          </CPText>
        </Flex>
      </Flex>
    </SectionContainer>
  )
}

export default Footer
